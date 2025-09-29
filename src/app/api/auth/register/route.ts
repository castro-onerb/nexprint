import { register } from '@/services/identity/auth/register';
import { RegisterDTO } from '@/services/identity/auth/register/dto';
import { NextRequest, NextResponse } from 'next/server';
import { validate, Rule } from '@/shared/utils/guard';

export async function POST(req: NextRequest) {
  try {
    const text = await req.text();
    if (!text) {
      return NextResponse.json({ error: 'Corpo da requisição vazio' }, { status: 400 });
    }

    const body = JSON.parse(text) as RegisterDTO;

    const rules: Partial<Record<keyof RegisterDTO, Rule<RegisterDTO>>> = {
      companyName: { required: true, message: 'É necessário informar o nome da empresa.' },
      cnpj: { required: true, message: 'É necessário informar o CNPJ.' },
      personName: { required: true, message: 'É necessário informar o nome da pessoa.' },
      personSurname: { required: true, message: 'É necessário informar o sobrenome da pessoa.' },
      email: {
        required: true,
        message: 'É necessário informar um e-mail válido.',
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      },
      password: { required: true, message: 'É necessário informar a senha.' },
      phone: { required: true, message: 'É necessário informar o telefone.' },
    };

    const validationResult = validate(body, rules, 'register');
    if (validationResult.isLeft()) {
      return NextResponse.json({ errors: validationResult.value.details }, { status: 400 });
    }

    const result = await register(body);

    if (result.isLeft()) {
      return NextResponse.json({ errors: result.value.details }, { status: 400 });
    }

    return NextResponse.json(
      { data: { membershipId: result.value.membershipId } },
      { status: 201 },
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
}

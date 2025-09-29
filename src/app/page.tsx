'use client';

import { Button } from '@/shared/components/Button';
import { Headline } from '@/shared/components/Headline';
import { Icon } from '@/shared/components/Icon';
import { useViewport } from '@/shared/hooks/use-viewport';

const features = [
  {
    title: 'ENGENHARIA DE PRODUTOS',
    description:
      'Mapeamos todos os produtos do mercado. Esqueça horas e horas de cadastros. Entre e use!',
  },
  {
    title: 'CONTROLE FINANCEIRO DE PONTA',
    description:
      'Temos um sistema integrado completo, analisando em tempo real a saúde e metas financeiras da sua empresa. Chega de prejuízos.',
  },
  {
    title: 'ENGENHARIA DE PRODUTOS',
    description:
      'Mapeamos todos os produtos do mercado. Esqueça horas e horas de cadastros. Entre e use!',
  },
];

export default function Welcome() {
  const { tablet } = useViewport();

  return (
    <div className='w-dvw h-dvh flex items-stretch bg-[var(--background)]'>
      <div className='flex-1 hidden md:flex flex-col items-center justify-center bg-primary-500 p-[32px]'>
        <div className='flex flex-col gap-5 max-w-[340px]'>
          <div className='flex flex-col gap-1 text-white'>
            <Headline.Level1 className='text-inherit'>
              A <strong>Nex</strong> leva a sua empresa <strong>muito mais</strong> longe.
            </Headline.Level1>
            <p className='text-base leading-[120%]'>
              Tenha controle completo, de maneira fácil e intuitiva, direto do seu celular.
            </p>
          </div>

          {features.map((feature, idx) => (
            <div key={idx} className='flex gap-3 text-white'>
              <span className='bg-white w-[18px] h-[18px] rounded-full flex items-center justify-center'>
                <Icon name='check_regular' className='leading-none text-primary-500' />
              </span>
              <div className='flex flex-col gap-1'>
                <p className='font-bold text-inherit'>{feature.title}</p>
                <p className='text-inherit leading-[120%]'>{feature.description}</p>
              </div>
            </div>
          ))}

          <Button.Root
            className='w-fit'
            size='lg'
            variant='outlined'
            color='white'
            corner='rounded'
          >
            Ver mais soluções
          </Button.Root>
        </div>
      </div>
      <div className='flex-1 flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center gap-5 max-w-[340px] w-full'>
          <Icon name='nexprint_black_color_full_fill' className='text-primary-500' size={140} />
          <div className='w-full flex flex-col items-center gap-1'>
            <Icon name='illustration_team_success' className='text-primary-500' size={300} />
            <p className='text-[24px] leading-[120%] font-medium text-foreground'>
              Ser eficiente em gestão
            </p>
            <p className='text-[24px] leading-[120%] font-bold text-foreground'>Começa Aqui!</p>
          </div>
          <div className='w-full flex gap-4'>
            <Button.Root
              variant='outlined'
              corner='pill'
              size='lg'
              className='flex-1'
              color='primary'
            >
              REGISTRAR-SE
            </Button.Root>
            <Button.Root color='primary' corner='pill' size='lg' className='flex-1'>
              ENTRAR
            </Button.Root>
          </div>
        </div>
      </div>
    </div>
  );
}

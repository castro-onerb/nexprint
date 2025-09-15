import { Icon } from '@/shared/components/Icon';
import { Input } from '@/shared/components/Input';

export default function Home() {
  return (
    <div className='font-sans grid grid-cols-5 gap-6 p-20'>
      <div className='flex flex-col gap-1.5'>
        <label htmlFor='name' className='flex font-semibold leading-none'>
          Nome <Icon name='required_fill' className='text-red-600' />
        </label>
        <div className='flex border rounded-md items-center'>
          <input
            type='text'
            placeholder='Insira seu usuário aqui'
            className='outline-none p-3 flex-1 font-medium leading-none'
          />
          <span className='mr-3 flex items-center justify-center h-full'>
            <Icon name='warning_fill' size={26} className='text-red-600' />
          </span>
        </div>
        <span className='text-[13px] leading-[15px] text-red-500'>
          Não existe uma conta vinculada ao usuário que você inseriu. Você pode{' '}
          <strong>criar uma conta</strong>.
        </span>
      </div>
      <div className='flex flex-col gap-1.5'>
        <label htmlFor='name' className='flex font-semibold leading-none'>
          Nome <Icon name='required_fill' className='text-red-600' />
        </label>
        <div className='flex border rounded-full items-center'>
          <input
            type='text'
            placeholder='Insira seu usuário aqui'
            className='outline-none p-3 flex-1 font-medium leading-none'
          />
          <span className='mr-3 flex items-center justify-center h-full'>
            <Icon name='warning_fill' size={26} className='text-red-600' />
          </span>
        </div>
        <span className='text-[13px] leading-[15px] text-red-500'>
          Não existe uma conta vinculada ao usuário que você inseriu. Você pode{' '}
          <strong>criar uma conta</strong>.
        </span>
      </div>
      <div className='flex flex-col gap-1.5'>
        <label htmlFor='name' className='flex font-semibold leading-none'>
          Nome <Icon name='required_fill' className='text-red-600' />
        </label>
        <div className='flex border rounded-md items-center'>
          <input
            type='text'
            placeholder='Insira seu usuário aqui'
            className='outline-none p-2 flex-1 font-normal leading-none'
          />
          <span className='mr-2 flex items-center justify-center h-full'>
            <Icon name='warning_fill' size={22} className='text-red-600' />
          </span>
        </div>
        <span className='text-[13px] leading-[15px] text-red-500'>
          Não existe uma conta vinculada ao usuário que você inseriu. Você pode{' '}
          <strong>criar uma conta</strong>.
        </span>
      </div>
      <div className='flex flex-col gap-1.5'>
        <label htmlFor='name' className='flex font-semibold leading-none'>
          Nome <Icon name='required_fill' className='text-red-600' />
        </label>
        <div className='flex border rounded-full items-center'>
          <input
            type='text'
            placeholder='Insira seu usuário aqui'
            className='outline-none p-2 flex-1 font-normal leading-none'
          />
          <span className='mr-2 flex items-center justify-center h-full'>
            <Icon name='warning_fill' size={22} className='text-red-600' />
          </span>
        </div>
        <span className='text-[13px] leading-[15px] text-red-500'>
          Não existe uma conta vinculada ao usuário que você inseriu. Você pode{' '}
          <strong>criar uma conta</strong>.
        </span>
      </div>
      <div className='flex flex-col gap-1.5'>
        <label htmlFor='name' className='flex font-semibold leading-none'>
          Nome <Icon name='required_fill' className='text-red-600' />
        </label>
        <div className='flex border rounded-xl items-center'>
          <input
            type='text'
            placeholder='Insira seu usuário aqui'
            className='outline-none p-2 flex-1 font-normal leading-none'
          />
          <span className='mr-2 flex items-center justify-center h-full'>
            <Icon name='warning_fill' size={22} className='text-red-600' />
          </span>
        </div>
        <span className='text-[13px] leading-[15px] text-red-500'>
          Não existe uma conta vinculada ao usuário que você inseriu. Você pode{' '}
          <strong>criar uma conta</strong>.
        </span>
      </div>
      <Input.Group>
        <Input.Label>Senha</Input.Label>
        <Input.Root placeholder='Sua senha aqui' />
      </Input.Group>
    </div>
  );
}

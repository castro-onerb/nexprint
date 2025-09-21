import { Icon } from '@/shared/components/Icon';

export function NavbarMobileRoot() {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col'>
        <span>Breno Castro</span>
      </div>
      <div className='rounded-xl grid grid-cols-4 grid-rows-2 gap-3 text-white'>
        <div className='flex flex-col gap-1 items-center leading-none'>
          <div className='border border-[var(--border)] p-3.5  rounded-full bg-background text-primary-600'>
            <Icon name='graph_bar_increase_fill' size={24} />
          </div>
          <span className='text-xs font-medium'>Caixa</span>
        </div>
        <div className='flex flex-col gap-1 items-center leading-none'>
          <div className='border border-[var(--border)] p-3.5  rounded-full bg-background text-primary-600'>
            <Icon name='chevron_right_fill' size={24} />
          </div>
          <span className='text-xs font-medium'>Clientes</span>
        </div>
        <div className='flex flex-col gap-1 items-center leading-none'>
          <div className='border border-[var(--border)] p-3.5  rounded-full bg-background text-primary-600'>
            <Icon name='required_fill' size={24} />
          </div>
          <span className='text-xs font-medium'>Vendas</span>
        </div>
        <div className='flex flex-col gap-1 items-center leading-none'>
          <div className='border border-[var(--border)] p-3.5  rounded-full bg-background text-primary-600'>
            <Icon name='speed_custom_duotone_fill' size={24} />
          </div>
          <span className='text-xs font-medium'>Orçamentos</span>
        </div>
        <div className='flex flex-col gap-1 items-center leading-none'>
          <div className='border border-[var(--border)] p-3.5  rounded-full bg-background text-primary-600'>
            <Icon name='speed_duotone_fill' size={24} />
          </div>
          <span className='text-xs font-medium'>Financeiro</span>
        </div>
        <div className='flex flex-col gap-1 items-center leading-none'>
          <div className='border border-[var(--border)] p-3.5  rounded-full bg-background text-primary-600'>
            <Icon name='warning_fill' size={24} />
          </div>
          <span className='text-xs font-medium'>Relatórios</span>
        </div>
        <div className='flex flex-col gap-1 items-center leading-none'>
          <div className='border border-[var(--border)] p-3.5  rounded-full bg-background text-primary-600'>
            <Icon name='graph_bar_increase_fill' size={24} />
          </div>
          <span className='text-xs font-medium'>Kanban</span>
        </div>
        <div className='flex flex-col gap-1 items-center leading-none'>
          <div className='border border-[var(--border)] p-3.5  rounded-full bg-background text-primary-600'>
            <Icon name='graph_bar_increase_fill' size={24} />
          </div>
          <span className='text-xs font-medium'>Mais</span>
        </div>
      </div>
    </div>
  );
}

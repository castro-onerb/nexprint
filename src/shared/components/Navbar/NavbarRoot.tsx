import { Navbar } from '.';
import { Icon } from '../Icon';

export function NavbarRoot() {
  return (
    <div className='p-4 bg-background flex flex-col gap-1 border-r border-[var(--border)]'>
      <div className='flex flex-col gap-2'>
        <span className='text-[11px] font-bold text-gray-500 flex items-center gap-1 transition'>
          <Icon name='chevron_right_fill' /> OVERVIEW
        </span>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-3 p-3 font-medium text-sm text-primary-600 leading-none bg-primary-500/10 rounded-xl h-[44px]'>
            <Icon name='speed_custom_duotone_fill' size={22} />
            <span>Dashboard</span>
          </div>
          <Navbar.Item.Link
            icon='speed_custom_duotone_fill'
            label='Abrir Modal'
            onClick={() => console.log('clicou!')}
          />
        </div>
      </div>
    </div>
  );
}

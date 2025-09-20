import { Icon } from '../Icon';

export function NavbarRoot() {
  return (
    <div className='p-3 bg-white flex flex-col gap-1'>
      <div className='flex items-center gap-3 p-3 font-semibold text-sm text-emerald-500 leading-none bg-emerald-50 rounded-xl'>
        <Icon name='speed_duotone_fill' size={25} />
        <span>Dashboard</span>
      </div>
      <div className='flex items-center gap-3 p-3 font-semibold text-sm text-gray-500 leading-none rounded-xl'>
        <Icon name='graph_bar_increase_fill' size={25} />
        <span>Relatórios</span>
      </div>
    </div>
  );
}

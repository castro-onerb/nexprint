'use client';

import { Dropdown } from '@/shared/components/Dropdown';
import { Icon } from '@/shared/components/Icon';
import { Layout } from '@/shared/components/Layout';
import { Navbar } from '@/shared/components/Navbar';
import { useViewport } from '@/shared/hooks/use-viewport';
import clsx from 'clsx';

export default function Home() {
  const { mobile } = useViewport();
  return (
    <Layout.Root
      classname={clsx(mobile && 'bg-gradient-to-b from-blue-500 from-35% to-background to-35%')}
      sidebar={<Navbar.Root />}
    >
      <Dropdown.Root<HTMLDivElement>
        motionOrigin='bottom'
        dropdown={
          <div className='bg-red-500 p-10 rounded-xl shadow-xl border border-slate-200'>Modal</div>
        }
      ></Dropdown.Root>
      <div className='flex p-4'>
        <Dropdown.Root<HTMLDivElement>
          placement='bottom-start'
          motionOrigin='top-left'
          dropdown={
            <div className='flex flex-col gap-1  shadow-lg rounded-lg border-2 border-white p-1 min-w-[230px]'>
              <div className='flex flex-col max-h-[200px] overflow-y-auto'>
                <div className='flex items-center gap-2 cursor-pointer transition px-2 py-3 rounded-lg bg-white/50'>
                  <div className='w-[26px] h-[26px] bg-primary-500 rounded-full flex items-center leading-none justify-center text-xs font-semibold text-primary-50'>
                    AD
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='font-medium text-sm text-gray-500'>Administrativo</span>
                  </div>
                </div>
                <div className='flex items-center gap-2 cursor-pointer transition px-2 py-3 rounded-lg bg-gray-100'>
                  <div className='w-[26px] h-[26px] bg-primary-500 rounded-full flex items-center leading-none justify-center text-xs font-semibold text-primary-50'>
                    AT
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='font-medium text-sm text-gray-500'>Atendimento</span>
                  </div>
                </div>
                <div className='flex items-center gap-2 cursor-pointer transition px-2 py-3 rounded-lg bg-white/50'>
                  <div className='w-[26px] h-[26px] bg-primary-500 rounded-full flex items-center leading-none justify-center text-xs font-semibold text-primary-50'>
                    PR
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='font-medium text-sm text-gray-500'>Produção</span>
                  </div>
                </div>
                <div className='flex items-center gap-2 cursor-pointer transition px-2 py-3 rounded-lg bg-white/50'>
                  <div className='w-[26px] h-[26px] bg-primary-500 rounded-full flex items-center leading-none justify-center text-xs font-semibold text-primary-50'>
                    AC
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='font-medium text-sm text-gray-500'>Acabamento</span>
                  </div>
                </div>
                <div className='flex items-center gap-2 cursor-pointer transition px-2 py-3 rounded-lg bg-white/50'>
                  <div className='w-[26px] h-[26px] bg-primary-500 rounded-full flex items-center leading-none justify-center text-xs font-semibold text-primary-50'>
                    EN
                  </div>
                  <div className='flex items-center gap-1'>
                    <span className='font-medium text-sm text-gray-500'>Entrega</span>
                  </div>
                </div>
              </div>
              <div className='border-b border-dashed border-gray-300'></div>
              <div className='flex items-center justify-between gap-2 cursor-pointer transition p-2 rounded-lg bg-white/50 text-gray-500'>
                <div className='flex items-center gap-1'>
                  <span className='font-medium text-sm'>Novo setor</span>
                </div>
                <Icon name='plus_fill' />
              </div>
            </div>
          }
        >
          {({ ref, onClick, open }) => (
            <div
              ref={ref}
              onClick={onClick}
              className={clsx(
                'relative flex items-center gap-2 cursor-pointer transition p-1 rounded-lg',
                open && 'bg-slate-100',
              )}
            >
              <div className='w-[26px] h-[26px] bg-primary-500 rounded-full flex items-center leading-none justify-center text-xs font-semibold text-primary-50'>
                AT
              </div>

              <div className='flex items-center gap-1'>
                <span className='font-medium text-sm text-gray-500'>Atendimento</span>
              </div>

              <div className='flex flex-col gap-0 leading-none text-gray-500'>
                <Icon name='chevron_up_fill' size={10} />
                <Icon name='chevron_down_fill' size={10} />
              </div>
            </div>
          )}
        </Dropdown.Root>
      </div>
    </Layout.Root>
  );
}

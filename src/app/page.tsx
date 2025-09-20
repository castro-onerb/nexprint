'use client';

import { Layout } from '@/shared/components/Layout';
import { Navbar } from '@/shared/components/Navbar';

export default function Home() {
  return (
    <Layout.Root sidebar={<Navbar.Root />}>
      <div className='bg-purple-500 p-5 flex-1'></div>
    </Layout.Root>
  );
}

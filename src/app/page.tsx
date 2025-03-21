// import dynamic from 'next/dynamic';
import Counter from '@/components/Counter';

// import dynamic from 'next/dynamic';

// const Counter = dynamic(() => import('@/components/Counter'), { ssr: true }); // 允許 SSR，除非有客戶端依賴

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] 
    justify-items-center min-h-screen p-8 pb-20
    gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Counter />
      </main>
    </div>
  );
}

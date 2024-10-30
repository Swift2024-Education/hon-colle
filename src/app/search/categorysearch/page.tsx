/*
import React from 'react';
import Dropdown from './dropdown';

const Page: React.FC = () => {
  return (
    <div>
      <h1>本棚アプリ</h1>
      <Dropdown />
    </div>
  );
};

export default Page;
*/
// pages/index.tsx またはお好みのページ
import React from 'react';
import Dropdown from './dropdown';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className='text-gray-700 text-5xl p-8 font-bold'>
        本棚アプリ
      </h1>
      <div className="grid grid-cols-4 gap-x-4 gap-y-32 p-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <Dropdown key={index} />
        ))}
      </div>
      <li className="flex flex-row grow items-center gap-1 hover:text-blue-600 bg-neutral-400 rounded-md m-1 max-w-56 hover:bg-amber-50">
            <Link href="/search">back to searchpage</Link>
          </li>
    </div>
  );
}

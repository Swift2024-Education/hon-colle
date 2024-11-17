'use client';

import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

//入力フォーム
export default function InputForm({ placeholder }: { placeholder: string }) {
  const [inputValueBookNumber, setInputValueBookNumber] = useState('');
  //const [inputValueId, setInputValueId] = useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    params.set('number', inputValueBookNumber); //queryにパラメータセット
    params.set('state', '');
    //params.set('id', inputValueId);
    replace(`${pathname}?${params.toString()}`);
    setInputValueBookNumber('');
    //setInputValueId('');

  };



  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder={placeholder}
            value={inputValueBookNumber}
            onChange={(e) => setInputValueBookNumber(e.target.value)}
            className="block w-100 rounded-xl border-solid border-4 border-gray-200 py-2 pl-3 text-lg placeholder-gray-600"
          />
        </div>
        {/*
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="idを入力"
            value={inputValueId}
            onChange={(e) => setInputValueId(e.target.value)}
            className="block w-100 rounded-xl border-solid border-4 border-gray-200 py-2 pl-3 text-lg placeholder-gray-600"
          />
        </div>*/}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          送信
        </button>
      </form>
    </div>
  );
}

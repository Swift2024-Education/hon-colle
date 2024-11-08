'use client';

import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function InputForm({ placeholder }: { placeholder: string }) {
  const [inputValue, setInputValue] = useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    params.set('query', inputValue); //queryにパラメータセット
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="block w-100 rounded-xl border-solid border-4 border-gray-200 py-2 pl-3 text-lg placeholder-gray-600"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        送信
      </button>
    </form>
  );
}

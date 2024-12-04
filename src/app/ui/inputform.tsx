'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { z } from 'zod';


//zodスキーマで10桁の数字を定義
const bookNumberSchema = z.string().refine((val) => /^\d{10}$/.test(val), {
  message: '10桁の数字を入力してください。',
});

//入力フォーム
export default function InputForm({ placeholder }: { placeholder: string }) {
  const [inputValueBookNumber, setInputValueBookNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const state = searchParams.get('state');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!inputValueBookNumber) {
      //入力がnullのときエラーメッセージをクリアして処理を中断
      setErrorMessage('');
      return;
    }

    //入力値をバリデーション
    const result = bookNumberSchema.safeParse(inputValueBookNumber);
    if (!result.success) {
      setErrorMessage(result.error.errors[0].message);
      return;
    }


    //エラーがない場合にパラメータを設定
    setErrorMessage(''); //エラーメッセージクリア
    const params = new URLSearchParams(searchParams);
    params.set('number', inputValueBookNumber); //queryにパラメータセット
    //params.set('state', '');
    //params.set('id', inputValueId);
    replace(`${pathname}?${params.toString()}`, { scroll: false });

    setInputValueBookNumber('');
  };

  //本が登録済みのとき用
  const registeredButtonOk = async (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);
    params.set('number', '');
    params.set('state', '');
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };



  return (
    <div className="flex items-center justify-center">
      {state === 'registered' ? (
        <div className="text-center mb-8">
          <button onClick={registeredButtonOk} className="bg-blue-500 text-white px-4 py-2 rounded">
            数字をうちなおす
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-start">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder={placeholder}
              value={inputValueBookNumber}
              onChange={(e) => setInputValueBookNumber(e.target.value)}
              className="block w-100 rounded-xl border-solid border-4 border-gray-200 py-2 pl-3 text-lg placeholder-gray-600 text-gray-700"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              送信
            </button>
          </div>
          {errorMessage ? (
            <span className="text-red-500 text-sm">{errorMessage}</span>
          ) : (
            <div className="mb-5"></div>
          )}
        </form>
      )}
    </div>
  );
}

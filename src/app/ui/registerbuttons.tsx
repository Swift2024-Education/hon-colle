'use client';

import { globalBooksArray } from '@/app/lib/difinitions';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {registerBookNumber} from '@/app/lib/data';



type Book = {
    book_number: bigint;
    title: string;
    isbn: bigint | null;
    title_kana: string;
    author_kana: string;
};

export default function RegisterButtons({ result }: { result: Book | null }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [message, setMessage] = useState('');
    const [currentStatus, setCurrentStatus] = useState('normal');  // 状態管理用


    // 登録ボタンの処理
    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
        const date = new Date();

        if (result) {
            // `globalBooksArray` にまだ存在しない場合のみ追加
            if (!globalBooksArray.some(storedBook => storedBook.book_number === result.book_number)) {
                globalBooksArray.push(result);
                //console.log('登録されました:', result.title);
                console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}-${date.getHours()}-${date.getMinutes()}`);
                {/*日付の表示*/}
            }

            const params = new URLSearchParams(searchParams);
            params.set('state', 'register');
            //params.set('state', 'register');
            replace(`${pathname}?${params.toString()}`);
        }
    };

    // キャンセルボタンの処理
    const handleCancel = (e: React.FormEvent) => {
        e.preventDefault();

        //console.log('キャンセルしました');
        const params = new URLSearchParams(searchParams);
        params.set('state', 'cancel');
        //params.set('state', 'cancel');
        replace(`${pathname}?${params.toString()}`);
    };

    // メッセージをクリアして state を normal にリセット
    const handleOk = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams);
        params.set('number', '');
        params.set('state', 'normal');
        replace(`${pathname}?${params.toString()}`);
    };

    // クエリパラメータの状態に基づきメッセージを更新
    useEffect(() => {
        const state = searchParams.get('state');
        if (state === 'register') {
            setMessage('この本を登録しました');
            setCurrentStatus('register');
        } else if (state === 'cancel') {
            setMessage('この本の登録をキャンセルしました');
            setCurrentStatus('cancel');
        } else {
            setMessage('');
            setCurrentStatus('normal');
        }
    }, [searchParams]);


    return (
        <div className="flex gap-4 mt-4">
            {/* メッセージと OK ボタンの表示 */}
            {message && (
                <div className="text-center">
                    <p className="text-xl text-gray-700 mb-4">{message}</p>
                    <button onClick={handleOk} className="bg-blue-500 text-white px-4 py-2 rounded">
                        OK
                    </button>
                </div>
            )}
            {!message && (
                <div className="flex justify-center gap-4 mb-4">
                    <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 rounded w-24">
                        登録
                    </button>
                    <button onClick={handleCancel} className="bg-red-500 text-white px-4 py-2 rounded w-24">
                        キャンセル
                    </button>
                </div>
            )}

        </div>
    );
}

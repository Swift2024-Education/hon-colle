'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { registerBookNumber } from '@/app/lib/data';



type Book = {
    book_number: bigint;
    title: string | null;
    isbn: bigint | null;
    title_kana: string | null;
    author_kana: string | null;
};

export default function RegisterButtons({ result }: { result: Book | null }) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const [message, setMessage] = useState('');
    const [currentStatus, setCurrentStatus] = useState('');  // 状態管理用


    // 登録ボタンの処理
    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (result) {

            const id = searchParams.get('id'); // クエリパラメータからidを取得

            if (id) {
                const params = new URLSearchParams(searchParams);
                params.set('state', 'register');
                replace(`${pathname}?${params.toString()}`);

                //console.log('登録されました:', result.title);
            }
        }
    };

    // キャンセルボタンの処理
    const handleCancel = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams);
        params.set('state', 'cancel');
        replace(`${pathname}?${params.toString()}`);
        console.log('キャンセルしました');
    };

    // メッセージをクリアして state を normal にリセット
    const handleOk = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams(searchParams);
        params.set('number', '');
        params.set('state', '');
        params.set('id', '');
        replace(`${pathname}?${params.toString()}`);
    };

    // クエリパラメータの状態に基づきメッセージを更新
    useEffect(() => {
        const state = searchParams.get('state');
        if (state === 'register') {
            setMessage('この本を登録しました');
            //setCurrentStatus('register');
        } else if (state === 'cancel') {
            setMessage('この本の登録をキャンセルしました');
            //setCurrentStatus('cancel');
        } else {
            setMessage('');
            //setCurrentStatus('');
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

'use client';

import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function HandleReset() {
    const [confirmReset, setConfirmReset] = useState(false); // 確認ボタンの状態
    const [resetDone, setResetDone] = useState(false); // リセット完了メッセージの状態
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleReset = (e: React.FormEvent) => {
        e.preventDefault();

        // 確認メッセージのボタンが押された場合にリセットを実行
        if (confirmReset) {
            const params = new URLSearchParams(searchParams);
            params.set('state', 'reset');
            replace(`${pathname}?${params.toString()}`);
            setConfirmReset(false); // 確認状態をリセット
            setResetDone(true); // リセット完了状態にする
        } else {
            setConfirmReset(true); // 確認ボタンを表示
        }
    };

    const handleOk = () => {
        const params = new URLSearchParams(searchParams);
        params.set('state', ''); // state を null に設定
        replace(`${pathname}?${params.toString()}`);
        setResetDone(false); // 完了状態をリセット
    };

    return (
        <div>
            {!confirmReset && !resetDone && (
                // 初回のリセットボタン
                <button onClick={handleReset} className="bg-red-500 text-white px-4 py-2 rounded mb-4">
                    リセット
                </button>
            )}

            {confirmReset && !resetDone && (
                // 確認メッセージと確認ボタン
                <div className="flex flex-col items-center">
                    <p className="mb-2 text-gray-700">本当にリセットしますか？</p>
                    <button onClick={handleReset} className="bg-yellow-500 text-white px-4 py-2 rounded">
                        確認してリセット
                    </button>
                    <button
                        onClick={() => setConfirmReset(false)} // 確認をキャンセル
                        className="mt-2 text-gray-600 underline"
                    >
                        キャンセル
                    </button>
                </div>
            )}

            {resetDone && (
                // リセット完了メッセージと OK ボタン
                <div className="flex flex-col items-center">
                    <p className="mb-2 text-gray-700">リセットされました。</p>
                    <button onClick={handleOk} className="bg-green-500 text-white px-4 py-2 rounded">
                        OK
                    </button>
                </div>
            )}
        </div>
    );
}

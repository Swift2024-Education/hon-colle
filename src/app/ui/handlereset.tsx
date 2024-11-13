'use client'

import { globalBooksArray } from '@/app/lib/difinitions';
import { useState } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';


export default function HandleReset() {
    const [refresh, setRefresh] = useState(0);

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleReset = (e: React.FormEvent) => {
        e.preventDefault();

        globalBooksArray.length = 0; // 配列をリセット
        setRefresh((prev) => prev + 1); // 状態を更新して再レンダリングを強制

        const params = new URLSearchParams(searchParams);
        params.set('number', '');
        //params.set('state', 'reset');
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <div>
            <button onClick={handleReset} className="bg-red-500 text-white px-4 py-2 rounded mb-4">
                リセット
            </button>
        </div>

    )
}
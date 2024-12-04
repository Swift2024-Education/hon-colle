'use client'

import { useEffect } from 'react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function stateChange() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set('state', 'registered');
        replace(`${pathname}?${params.toString()}`, { scroll: false });
    }, [searchParams, pathname, replace]);

    return (
        <div className="text-center text-red-500">
            この本はすでに登録されています。
        </div>
    );
}

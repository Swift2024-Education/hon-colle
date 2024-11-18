'use client';

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useDebounce } from 'use-debounce';

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { data: session } = useSession();
  let name = ''
  if (session != null) {
    name = session.user?.name || 'UnknownUser'
  }

  const handlePage = useDebounce(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', '1');
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="text-gray-700 text-3xl text-center p-4">
      {name} さんのどくしょりれき
    </div>
  );
}

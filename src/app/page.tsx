//import Image from "next/image";
import Link from "next/link";
import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <div className="bg-sky-200 h-max min-h-screen">
        <h1 className='text-gray-700 text-5xl p-8 font-bold'>
          Top Page
        </h1>
        <h2 className="text-gray-700 pl-8 p-1 text-xl">
          Links to Other Pages:
        </h2>
        <ul className="text-gray-800 pl-8 p-1 text-xl">
          <li className="flex flex-row grow items-center gap-1 hover:text-blue-600 bg-neutral-200 rounded-md m-1 max-w-56 hover:bg-amber-50">
            <BookOpenIcon className="w-9"/>
            <Link href="/search">Search</Link>
          </li>
          <li className="flex flex-row grow items-center gap-1 hover:text-blue-600 bg-neutral-200 rounded-md m-1 max-w-56 hover:bg-amber-50">
            <BookOpenIcon className="w-9"/>
            <Link href="/categories">Categories</Link>
          </li>
          <li className="flex flex-row grow items-center gap-1 hover:text-blue-600 bg-neutral-200 rounded-md m-1 max-w-56 hover:bg-amber-50">
            <BookOpenIcon className="w-9"/>
            <Link href="/uploder">Uploder Page</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

//import Image from "next/image";
import Link from "next/link";
import { BookOpenIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <>
      <div className="bg-gradient-to-b from-white to-stone-300 h-dvh">
        <h1 className='text-gray-700 text-5xl p-8 font-bold'>
          Search Page
        </h1>
        <h2 className="text-gray-700 pl-8 p-1 text-xl">
          Links to Search Books:
        </h2>
        <ul className="text-gray-800 pl-8 p-1 text-xl">
          <li className="flex flex-row grow items-center gap-1 hover:text-blue-600 bg-neutral-400 rounded-md m-1 max-w-56 hover:bg-amber-50">
            <BookOpenIcon className="w-9"/>
            <Link href="/search/keywordsearch">Keyword Search</Link>
          </li>
          <li className="flex flex-row grow items-center gap-1 hover:text-blue-600 bg-neutral-400 rounded-md m-1 max-w-56 hover:bg-amber-50">
            <BookOpenIcon className="w-9"/>
            <Link href="/search/categorysearch">Category Search</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

//import Image from "next/image";
import Link from "next/link";
import { BookOpenIcon } from "@heroicons/react/24/outline";
import { fetchnews } from "./lib/data";

export default async function Home() {
  const news = await fetchnews();
  //const news={ news: "massage", date: "2024" }

  {news ? (
    <div key={news.date} className='text-center text-3xl font-bold'>
     {news.news} ({news.date})
    </div>):(
      <p>おしらせが見つかりません。</p>
    )}
  return (
    <>
      <div className="bg-sky-swift h-max min-h-screen">
       
        {news ? (      
        <div key={news.date} className='text-center text-3xl font-bold text-gray-700'>
         {news.news} ({news.date})
        </div>):(
          <p className="text-center text-xl text-gray-700">おしらせが見つかりません。</p>
        )}
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
          <li className="flex flex-row grow items-center gap-1 hover:text-blue-600 bg-neutral-200 rounded-md m-1 max-w-56 hover:bg-amber-50">
            <BookOpenIcon className="w-9"/>
            <Link href="/register">register</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

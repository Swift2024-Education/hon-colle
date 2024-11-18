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
        
      </div>
    </>
  );
}

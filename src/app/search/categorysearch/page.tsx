import Link from "next/link";
import { BookOpenIcon } from "@heroicons/react/24/outline";


const category: string[] = ['Alice', 'Bob', 'Charlie', 'Alice', 'Bob', 'Charlie', 'Alice', 'Bob', 'Charlie']


export default function Page() {
  return (
    <>
      <div className="bg-sky-200 h-max min-h-screen">
        <h1 className='text-gray-700 text-5xl p-8 font-bold'>Category Page</h1>
        <h2 className="text-gray-700 pl-8 p-1 text-xl">Links to Category:</h2>

        {/* Grid Container */}
        <div className="grid grid-cols-4 gap-x-4 gap-y-4 p-4">
          {/* Individual Category Links */}

          {category.map((category, index) => (
            <div key={index} className="flex flex-row items-center gap-3 hover:text-blue-600 bg-neutral-200 rounded-md m-1 max-w-full w-full h-48 hover:bg-amber-50">
              <BookOpenIcon className="w-9" />
              <Link href="/">{category}</Link>
            </div>
          ))}

          {/* Add additional category links as needed */}
        </div>
      </div>

    </>
  );
}
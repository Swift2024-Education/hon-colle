import Link from "next/link";
import { BookOpenIcon } from "@heroicons/react/24/outline";

interface Category{
  label: string;
  value: string;
}
{/*labelが表示名、valueがカテゴリを表す数字*/}


const category: Category[] = [
  { label: 'NARUTO', value: '0' },
  { label: 'BORUTO', value: '1' },
  { label: 'BLEACH', value: '2' },
  { label: '無職転生', value: '3' },
  { label: '探もし', value: '4' },
  { label: 'よう実', value: '5' },
  { label: 'だんまち', value: '6' },
  { label: '陰実', value: '7' },
  { label: '転スラ', value: '8' },
  { label: 'リコリコ', value: '9' },
];
{/*各カテゴリー用配列*/}


export default function Page() {
  return (
    <>
      <div className="bg-sky-200 h-max min-h-screen">
        <h1 className='text-gray-700 text-5xl p-8 font-bold'>Category Page</h1>
        <h2 className="text-gray-700 pl-8 p-1 text-xl">Links to Category:</h2>

        {/* Grid Container */}
        <div className="grid grid-cols-4 gap-x-4 gap-y-4 p-4">


          {category.map((category) => (
            <Link key={category.label} href={`/categories/${category.value}`}>
              {/*pathとqueryを渡している※"as"は使ってはいけない*/}
              <div className="flex flex-row items-center gap-3 hover:text-blue-600 bg-neutral-100 rounded-md m-1 max-w-full w-full h-48 hover:bg-amber-50" >
                {/*キーはvalueを使用*/}
                <BookOpenIcon className="w-9" />
                <span className="text-lg font-semibold text-red-500">{category.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

    </>
  );
}
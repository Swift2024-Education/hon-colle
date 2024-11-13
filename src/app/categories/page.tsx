import Link from "next/link";
//import { BookOpenIcon } from "@heroicons/react/24/outline";

interface Category{
  label: string;
  value: string;
}
{/*labelが表示名、valueがカテゴリを表す番号*/}


const category: Category[] = [
  { label: 'そうき', value: '0' },
  { label: 'てつがく', value: '1' },
  { label: 'れきし', value: '2' },
  { label: 'しゃかい', value: '3' },
  { label: 'しぜんかがく', value: '4' },
  { label: 'ぎじゅつ', value: '5' },
  { label: 'さんぎょう', value: '6' },
  { label: 'げいじゅつ', value: '7' },
  { label: 'げんご', value: '8' },
  { label: 'ぶんがく', value: '9' },
  { label: 'えほん', value: 'e' },//絵本
  { label: '千手の涯届かざる闇の御手映らざる天の射手光を落とす道火種を煽る風集いて惑うな我が指を見よ光弾・八身・九条・天経・疾宝・大輪・灰色の砲塔弓引く彼方皎皎として消ゆ', value: '10' },//その他
];
{/*各カテゴリー用配列*/}
{/*valueを変えたらdata.tsのfetchBooksByCategoryとfetchBookscountByCategoryも変える必要あり*/}


export default function Page() {
  return (
    <>
      <div className="bg-sky-swift h-max min-h-screen">
        <h1 className='text-gray-700 text-3xl p-8 font-medium text-center'>カテゴリから本をさがす</h1>

        {/* Grid Container */}
        <div className="grid grid-cols-4 gap-x-4 gap-y-4 p-4">


          {category.map((category) => (
            <Link key={category.label} href={`/categories/${category.value}`}>
              <div className="flex flex-row gap-3 bg-neutral-100 rounded-marukado m-1 max-w-full w-full h-48 hover:bg-amber-50" >
                {/*キーはlabel、カテゴリを囲う四角いボックスがこれ*/}
                <span className="text-2xl p-5 font-medium text-gray-700">
                  {category.label}</span>
                {/*各カテゴリ名*/}
              </div>
            </Link>
          ))}
        </div>
      </div>

    </>
  );
}
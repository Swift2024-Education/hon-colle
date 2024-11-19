import Link from "next/link";
import { endianness } from "os";

interface Category {
  label: string;
  value: string;
  subItems?: string[];
}

const category: Category[] = [
  { label: 'そうき', value: '0' ,subItems:['シリーズ・ぜんしゅう','ひゃっかじてん']},
  { label: 'てつがく', value: '1' ,subItems:['しゅうきょう','しんわ'] },
  { label: 'れきし', value: '2'  ,subItems:['にほんのれきし','せかいのれきし','でんき']},
  { label: 'まちのしくみ', value: '3'  ,subItems:['せいじ・ざいせい','みんぞくのぶんか・れきし']},
  { label: 'しぜんのふしぎ', value: '4'  ,subItems:['いきもの','しょくぶつ']},
  { label: 'ぎじゅつ', value: '5'  ,subItems:['のりもの','りょうり']},
  { label: 'さんぎょう', value: '6' ,subItems:['のうぎょう','えんげい','すいさんぎょう']},
  { label: 'げいじゅつ', value: '7'  ,subItems:['スポーツ','おりがみ']},
  { label: 'ことば', value: '8'  ,subItems:['えいご']},
  { label: 'ものがたり', value: '9'  ,subItems:['ものがたり']},
  { label: 'えほん', value: 'e' ,subItems:[''] }, // 絵本
  { label: 'そのほか', value: '10'  ,subItems:['かいだん',]}, // その他
];

// カテゴリごとの枠線の色の配列
const Colors = [
  "#E20615", "#1C208B", "#EA5415", "#2FA8E1", "#805021",
  "#FFE014", "#5A5655", "#73BB2B", "#910682", "#E5007F",
  "#45B8AC", "#EFC050",
];

export default function Page() {
  return (
    <>
      <div className="bg-sky-swift h-max min-h-screen">
        <h1 className='text-gray-700 text-5xl p-5 font-medium text-center'>カテゴリから本をさがす</h1>

        {/* Grid Container */}
        <div className="grid grid-cols-4 gap-x-4 gap-y-4 p-10">
          {category.map((category, index) => (
            <Link key={category.label} href={`/categories/${category.value}`}>
              {/* カテゴリを囲うボックス */}
              <div 
                className="flex gap-3 bg-white rounded-marukado m-1 max-w-full shadow-xl w-full h-48 hover:bg-amber-50 "
                style={{ borderColor: Colors[index % Colors.length] }}
              >
                {/* カテゴリ番号の丸 */}
                <div className="w-12 h-12 rounded-full m-3 text-white text-3xl font-semibold flex items-center justify-center"
                  style={{ backgroundColor: Colors[index % Colors.length] }}
                >
                  {category.value}
                </div>

                {/* カテゴリ名 */}
                <div className="flex flex-col justify-start pt-5">
                  <span className="text-2xl font-semibold text-gray-700">{category.label}</span>
                  {/* サブ項目 */}
                  <div className="text-l font-light text-gray-700 mt-2">
                    {category.subItems?.map((subItem, subIndex) => (
                      <div key={subIndex} className="p-1 text-gray-600 mt-1">
                        {subItem}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
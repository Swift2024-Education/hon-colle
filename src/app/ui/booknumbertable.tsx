import { fetchBookByBookNumber } from '@/app/lib/data';
//import Image from 'next/image';
import RegisterButtons from './registerbuttons';
import { checkRegisterdBook } from '@/app/lib/data';
import Image from 'next/image';
import StateChange from '@/app/ui/statechange';


type BookNumberTableProps = {
  number: string;
  id: string;
};

const bookNumberTable = async ({ number, id }: BookNumberTableProps) => {
  let result = number ? await fetchBookByBookNumber(number) : null;
  const checkResult = await checkRegisterdBook(number, id)//trueなら登録済み


  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center">

        <div className="h-96 w-96 border-4 border-gray-200 bg-zinc-100 text-gray-700 rounded-lg overflow-hidden p-4 shadow-md">
          {/*上*/}
          <div className="flex-1 text-center">
            {!number ? (
              <div className="text-gray-500 text-lg">
                <p>本をとうろくしてください</ p>
              </div>
            ) : (
              result ? (
                checkResult ? (
                  <div className="text-red-500">
                    <StateChange />
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center'>
                    {/*帰ってきた結果から、ひらがなのタイトルと著者名だけ選択して表示*/}
                    <div className="relative w-[125px] h-[200px]">
                      <Image
                        src={`https://www.books.or.jp/img/books_icon/${result.isbn}.jpg`}
                        alt={`${result.title_kana}の表紙の画像`}
                        width={125}
                        height={175
                        }
                        layout="intrinsic"
                        className="object-cover" // coverで縦横比を保ちながら収める
                      />
                    </div>
                    {/* タイトルの配置 */}
                    <div className="flex-grow flex items-center justify-center mt-3 text-2xl font-medium text-center">
                      {result.title_kana}
                    </div>
                    {/* 著者名の配置 */}
                    <div className="mt-2 text-lg text-center">
                      {result.author_kana}
                    </div>
                  </div>
                )
              ) : (
                <div className="text-gray-500">本が見つかりません。</div>
              )
            )}
          </div>
        </div>

        {/*下*/}
        {result && !checkResult && (
          <div className="">
            <RegisterButtons result={result} />
          </div>
        )}

      </div>
    </div >
  );
}
export default bookNumberTable
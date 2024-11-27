import { fetchBookByBookNumber } from '@/app/lib/data';
//import Image from 'next/image';
import RegisterButtons from './registerbuttons';
import { checkRegisterdBook } from '@/app/lib/data';

type BookNumberTableProps = {
    number: string;
    id: string;
};

const bookNumberTable = async ({ number, id }: BookNumberTableProps) => {
    const result = number ? await fetchBookByBookNumber(number) : null;
    const checkResult = await checkRegisterdBook(number, id)//trueなら登録済み


    return (
        <div className="flex items-center justify-center bg-black ">
          <div className="flex flex-col items-center">

          <div className="h-80 w-56 border-4 border-gray-200 bg-zinc-100 text-gray-700 rounded-lg overflow-hidden p-4 shadow-md">
          {/*上*/}
                <div className="flex-1 text-center">
                  {result ? (
                    checkResult ? (
                      <div className="text-red-500">この本はすでに登録されています。</div>
                    ) : (
                      <div className="text-center">
                        <div className="text-lg font-semibold">{result.title}</div>
                        <div className="text-sm text-gray-500">{result.book_number}</div>
                        <div className="text-sm mt-2">{id}</div>
                      </div>
                    )
                  ) : (
                    <div className="text-gray-500">本が見つかりません。</div>
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
        </div>
      );
}
export default bookNumberTable
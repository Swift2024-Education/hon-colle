import { fetchBookByBookNumber } from '@/app/lib/data';
//import Image from 'next/image';
import RegisterButtons from './registerbuttons';
import { checkRegisterdBook } from '@/app/lib/data';

type BookNumberTableProps = {
    number: string;
    id: string;
};

const bookNumberTable = async ({ number, id }: BookNumberTableProps) => {
    let result = number ? await fetchBookByBookNumber(number) : null;
    const checkResult = await checkRegisterdBook(number, id)//trueなら登録済み


    return (
        <div className="flex items-center justify-center">
            <div className="flex gap-6 justify-items-center">
                {result ? (
                    checkResult ? (
                        //登録済みの場合
                        <div className="text-center text-red-500">
                            この本はすでに登録されています。
                        </div>
                    ) : (
                        //未登録の場合の本の情報表示
                        <div className="flex flex-col items-center h-80 w-40">
                            <div className="h-60 w-full border-solid border-4 bg-zinc-100 border-gray-200 text-gray-700 rounded-xl overflow-hidden p-4">
                                <div className="text-center">
                                    <div className="text-lg">{result.title}</div>
                                    <div className="text-lg">{result.book_number}</div>
                                    {id}
                                </div>
                            </div>
                            {/*RegisterButtonsを配置*/}
                            <RegisterButtons result={result} />
                        </div>
                    )
                ) : (
                    //本が見つからない場合
                    <div className="text-center text-gray-500">本が見つかりません。</div>
                )}
            </div>
        </div>
    );
}
export default bookNumberTable
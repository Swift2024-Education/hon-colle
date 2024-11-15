import { fetchBookByBookNumber } from '@/app/lib/data';
//import Image from 'next/image';
import BooksHistory from '@/app/ui/bookshistory';
import RegisterButtons from './registerbuttons';

export default async function isbnTable({ number }: { number: string }) {
    const result = number ? await fetchBookByBookNumber(number) : null;



    return (
        <div className="flex items-center justify-center">
            <div className="flex gap-6 justify-items-center">
                {result ? (
                    <div className="flex flex-col items-center h-80 w-40">
                        {/* 本の情報を表示する枠 */}
                        <div className="h-60 w-full border-solid border-4 bg-zinc-100 border-gray-200 text-gray-700 rounded-xl overflow-hidden p-4">
                            <div className="text-center">
                                <div className="text-lg">{result.title}</div>
                                <div className="text-lg">{result.book_number}</div> {/* bigintを文字列に変換 */}
                            </div>
                        </div>
                        {/* RegisterButtons を配置 */}
                        <RegisterButtons result={result} />
                    </div>
                ) : (
                    <div className="text-center text-gray-500">本が見つかりません。</div>
                )}
            </div>
        </div>
    );
}
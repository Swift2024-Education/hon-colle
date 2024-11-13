import { fetchBookByBookNumber } from '@/app/lib/data';
//import Image from 'next/image';
import { globalBooksArray } from '@/app/lib/difinitions';
import BooksHistory from '@/app/ui/bookshistory';
import RegisterButtons from './registerbuttons';

export default async function isbnTable({ number }: { number: string }) {
    const result = number ? await fetchBookByBookNumber(number) : null;

//    const handleRegister = () => {
//        // resultが見つかった場合のみglobalBooksArrayに追加
//        if (Array.isArray(result) && result.length > 0) {
//           // 配列内の各本の数字が既にglobalBooksArrayに存在しない場合のみ追加
//            result.forEach(book => {
//                if (!globalBooksArray.some(storedBook => storedBook.book_number === book.book_number)) {
//                    {/*既に登録されているかを数字でチェック*/ }
//                    globalBooksArray.push(book);
//                }
//            });
//        }
//    }



    //    if (!result) {
    //console.error("No book found with this ISBN");
    //        return <div>No book found</div>;  // エラー時の表示
    //    }

    return (
        <div className="flex items-center justify-center">
            <div className="flex gap-6 justify-items-center">
                {result && result.length > 0 ? (
                    result.map((book, index) => (
                        <div key={index} className="flex flex-col items-center h-80 w-40">
                            {/* 本の情報を表示する枠 */}
                            <div className="h-60 w-full border-solid border-4 bg-zinc-100 border-gray-200 text-gray-700 rounded-xl overflow-hidden p-4">
                                <div className="text-center">
                                    <div className="text-lg">{book.title}</div>
                                    <div className="text-lg">{book.book_number}</div> {/* bigintを文字列に変換 */}
                                </div>
                            </div>
                            {/* 各本ごとに RegisterButtons を配置 */}
                            <RegisterButtons result={book} />
                        </div>
                    ))
                ) : (
                    <div className="flex flex-col items-center h-80 w-40">
                        {/* 本の情報がない場合も枠を表示 */}
                        <div className="h-60 w-full border-solid border-4 bg-zinc-100 border-gray-200 text-gray-700 rounded-xl overflow-hidden p-4 flex items-center justify-center">
                            <div className="text-center text-xl text-gray-700">
                                No image available
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
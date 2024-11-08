import { fetchBookByISBN } from '@/app/lib/data';
//import Image from 'next/image';
import { globalBooksArray } from '@/app/lib/difinitions';

export default async function isbnTable({ isbn }: { isbn: string }) {
    const result = isbn ? await fetchBookByISBN(isbn) : null;

    // resultが見つかった場合のみglobalBooksArrayに追加（重複チェックあり）
    if (Array.isArray(result) && result.length > 0) {
        // 配列内の各本のISBNが既にglobalBooksArrayに存在しない場合のみ追加
        result.forEach(book => {
            if (!globalBooksArray.some(storedBook => storedBook.isbn === book.isbn)) {
                {/*既に登録されているかをisbnでチェック*/}
                globalBooksArray.push(book);
            }
        });
    }

    //    if (!result) {
    //console.error("No book found with this ISBN");
    //        return <div>No book found</div>;  // エラー時の表示
    //    }

    return (
        <div className='mx-28'>
            <div className="text-center text-xl text-gray-700 mb-4">
                Total Books Registered: {globalBooksArray.length}
                {/*配列の要素数*/}
            </div>
            {globalBooksArray.length > 0 ? (
                <div className="grid grid-cols-6 gap-6 justify-items-center">
                    {globalBooksArray.map((book, index) => (
                        <div key={index} className="h-60 w-40 border-solid border-4 bg-zinc-100 border-gray-200 text-gray-700 rounded-xl overflow-hidden p-4">
                            <div className="text-center">
                                <div className="text-lg">{book.title}</div>
                                <div className="text-lg">{book.isbn?.toString()}</div> {/* bigintを文字列に変換 */}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='text-center text-xl text-gray-700'>
                    No image available
                </div>
            )}
        </div>
    );
}
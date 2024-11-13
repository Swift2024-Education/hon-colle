'use client'

import { globalBooksArray } from '@/app/lib/difinitions';

export default function booksHistory() {
    //登録された本を6列で表示


    return (
        <div className='mx-28'>
            {/* ページのタイトル */}
            <div className="flex justify-center items-center bg-blue-500 text-white text-3xl font-bold rounded-full py-3 px-6 mb-6 mx-auto">
            花風紊れて花神啼き天風紊れて天魔嗤う
            {/*はなかぜみだれてかしんなき　てんぷうみだれててんまわらう*/}
            </div>
            {globalBooksArray.length > 0 ? (
                <div className="grid grid-cols-6 gap-6 justify-items-center">
                    {globalBooksArray.map((book, index) => (
                        <div key={index} className="h-60 w-40 border-solid border-4 bg-zinc-100 border-gray-200 text-gray-700 rounded-xl overflow-hidden p-4">
                            <div className="text-center">
                                <div className="text-lg">{book.title}</div>
                                <div className="text-lg">{book.book_number}</div> {/* bigintを文字列に変換 */}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='text-center text-xl text-gray-700'>
                    No image available
                </div>
            )}
            <div>
                要素数：{globalBooksArray.length}
            </div>
        </div>
    )
}
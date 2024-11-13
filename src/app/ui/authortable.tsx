import { fetchBookByAuthor } from "@/app/lib/data";

export default async function isbnTable({ author }: { author: string }) {
    const result = author ? await fetchBookByAuthor(author) : null;
    return (
        <div className="flex items-center justify-center">
            {/* 要素数を表示 */}
            <div className="text-xl font-bold mb-4 text-gray-700">
                Total Books: {result ? result.length : 0}
            </div>
            <div className="grid grid-cols-6 gap-6">
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

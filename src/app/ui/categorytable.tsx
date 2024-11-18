//import Image from 'next/image';
import { fetchBooksByCategory } from '../lib/data';
//キーワード検索のための関数をdataからインポート
import Image from 'next/image';


export default async function categoryTable({
    categoryNumber,
    currentPage,
}: {
    categoryNumber: string;
    currentPage: number;
}) {
    const results = await fetchBooksByCategory(categoryNumber, currentPage);
    //関数を使って本をキーワード検索

    return(
        <>
            <div className='mx-26'>
                {results.length > 0 ? (//帰ってきた結果が0以上の時にこれを表示
                <div className='grid grid-cols-3 mx-28 gap-4 flex-shrink-0 justify-items-center content-evenly items-center'>
                    {/*上の行は結果を3 * 3で並べるためのTailwindCSSの記述*/}
                    {results.map((books) => (
                    <div key={books.book_number} className='w-[120px] h-[400px] p-5 bg-white text-gray-700 rounded-marukado text-ellipsis overflow-hidden shadow-lg min-h-20 min-w-80 flex flex-col'>
                        {/*テキストと枠、背景の色、サイズ、テキストの折り返し設定(これ動いてるのかどうか不明)*/}
                        <div className='flex flex-col items-center justify-center'>
                            {/*帰ってきた結果から、ひらがなのタイトルと著者名だけ選択して表示*/}
                            <div className="relative w-[125px] h-[200px]">
                                    <Image
                                        src={`https://www.books.or.jp/img/books_icon/${books.isbn}.jpg`}
                                        alt={`${books.title_kana}の表紙の画像`}
                                        width={125}
                                        height={175
                                        }
                                        layout="intrinsic"
                                        className="object-cover" // coverで縦横比を保ちながら収める
                                    />
                                </div>
                            {/* タイトルの配置 */}
                            <div className="flex-grow flex items-center justify-center mt-3 text-2xl font-medium text-center">
                                    {books.title_kana}
                                </div>
                                {/* 著者名の配置 */}
                                <div className="mt-2 text-lg text-center">
                                    {books.author_kana}
                                </div>
                        </div>
                    </div>
                ))}
                </div>
            ) : (
            <p className='border-solid border-2 bg-zinc-100 border-gray-200 text-gray-700 rounded-marukado text-2xl text-center'>さがしている ほんは ありませんでした。</p>
            )}{/*見つからなかった時にだけ表示*/}
            </div>
        </>
    );
}
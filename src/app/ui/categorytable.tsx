//import Image from 'next/image';
import { fetchBooksByCategory } from '../lib/data';
//キーワード検索のための関数をdataからインポート

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
            <div className='mx-28'>
                {results.length > 0 ? (//帰ってきた結果が0以上の時にこれを表示
                <div className='grid grid-cols-3 gap-6 flex-shrink-0 justify-items-center'>
                    {/*上の行は結果を3 * 3で並べるためのTailwindCSSの記述*/}
                    {results.map((books) => (
                    <div key={books.book_number} className='border-solid border-4 bg-zinc-100 border-gray-200 text-gray-700 rounded-xl text-ellipsis overflow-hidden size-96'>
                        {/*テキストと枠、背景の色、サイズ、テキストの折り返し設定(これ動いてるのかどうか不明)*/}
                        <div className='text-center'>
                            {/*帰ってきた結果から、ひらがなのタイトルと著者名だけ選択して表示*/}
                            <div className='text-2xl'>{books.title_kana}</div>
                            <div className='text-lg'>{books.author_kana}</div>
                        </div>
                    </div>
                ))}
                </div>
            ) : (
            <p className='border-solid border-2 bg-zinc-100 border-gray-200 text-gray-700 rounded-xl text-2xl text-center'>さがしている ほんは ありませんでした。</p>
            )}
            </div>
            {/*3行上は見つからなかった時にだけ表示*/}
        </>
    );
}
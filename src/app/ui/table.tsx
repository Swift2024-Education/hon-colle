//import Image from 'next/image';
import { fetchBooksByQuery } from '../lib/data';
//キーワード検索のための関数をdataからインポート

export default async function BooksTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const books = await fetchBooksByQuery(query, currentPage);
    //関数を使って本をキーワード検索

    return(
        <>
            <div className='mx-32'>
                {books.length > 0 ? (//帰ってきた結果が0以上の時にこれを表示
                <div className='grid grid-cols-3 gap-6 flex-shrink-0 justify-items-center'>
                    {/*上の行は結果を3 * 3で並べるためのTailwindCSSの記述*/}
                    {books.map((books) => (
                    <div key={books.book_number} className='border-solid border-4 bg-zinc-100 border-gray-200 text-gray-700 rounded-xl text-ellipsis overflow-hidden size-128'>
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
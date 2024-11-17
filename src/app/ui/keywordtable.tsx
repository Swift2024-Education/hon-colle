import Image from 'next/image';
import { fetchBooksByQuery } from '../lib/data';
//キーワード検索のための関数をdataからインポート

export default async function KeywordTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const results = await fetchBooksByQuery(query, currentPage);
    //関数を使って本をキーワード検索

    return(
        <>
            <div className='mx-28'>
                {results.length > 0 ? (//帰ってきた結果が0以上の時にこれを表示
                <div className='grid grid-cols-3 gap-4 flex-shrink-0 justify-items-center content-evenly items-center'>
                    {/*上の行は結果を3 * 3で並べるためのTailwindCSSの記述*/}
                    {results.map((books) => (
                    <div key={books.book_number} className='border-solid border-4 bg-zinc-100 border-gray-200 text-gray-700 rounded-marukado text-ellipsis overflow-hidden min-h-80 min-w-56 w-results'>
                        {/*テキストと枠、背景の色、サイズ、テキストの折り返し設定(これ動いてるのかどうか不明)*/}
                        <div className='text-center items-center justify-center'>
                            {/*帰ってきた結果から、ひらがなのタイトルと著者名だけ選択して表示*/}
                            <Image
                                src={`https://www.books.or.jp/img/books_icon/${books.isbn}.jpg`}
                                width={125}
                                height={175}
                                alt={`${books.title_kana}の表紙の画像`}
                                className='m-auto mt-2'
                                //onError={() => src()}
                            />
                            {/*<div className='bg-slate-500 m-8 w-36 h-48'/>*/}
                            <div className='text-2xl'>{books.title_kana}</div>
                            <div className='text-lg'>{books.author_kana}</div>
                        </div>
                    </div>
                ))}
                </div>
            ) : (
            <p className='border-solid border-2 bg-zinc-100 border-gray-200 text-gray-700 rounded-marukado text-2xl text-center'>さがしている ほんは ありませんでした。</p>
            )}
            </div>
            {/*3行上は見つからなかった時にだけ表示*/}
        </>
    );
}
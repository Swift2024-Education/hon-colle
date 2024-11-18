import Image from 'next/image';
import { fetchHistoryByID } from '../lib/data';
//キーワード検索のための関数をdataからインポート

export default async function HistoryTable({
    id,
    currentPage,
}: {
    id: string;
    currentPage: number;
}) {
    const results = await fetchHistoryByID(id, currentPage);
    //関数を使って本をキーワード検索

    return(
        <>
            <div className='mx-16'>
                {results.length > 0 ? (//帰ってきた結果が0以上の時にこれを表示
                <div className='grid grid-cols-3 gap-y-4 justify-items-center content-evenly items-center bg-orange-400 p-[1.5vw] mx-2'>
                    {/*上の行は結果を3 * 3で並べるためのTailwindCSSの記述*/}
                    {results.map((books) => (
                    <div key={books.book_number} className='bg-orange-100 text-gray-700 text-ellipsis overflow-hidden h-80 w-[30vw]'>
                        {/*テキストと枠、背景の色、サイズ、テキストの折り返し設定(これ動いてるのかどうか不明)*/}
                        <div className='text-center items-center justify-center'>
                            {/*帰ってきた結果から、ひらがなのタイトルと著者名だけ選択して表示*/}
                            <Image
                                src={`https://www.books.or.jp/img/books_icon/${books.isbn}.jpg`}
                                width={125}
                                height={175}
                                alt={`${books.title_kana}の表紙の画像`}
                                layout='intrinsic'
                                className='object-cover m-auto pt-6 pb-2'
                                //onError={() => src()}
                            />
                            {/*<div className='bg-slate-500 m-8 w-36 h-48'/>*/}
                            <div className='text-2xl'>{books.title_kana}</div>
                            <div className='text-lg'>{books.author_kana}</div>
                            <div className='text-lg'>{books.book_number}</div>
                        </div>
                    </div>
                ))}
                </div>
            ) : (
            <p className='bg-orange-100 text-gray-700 rounded-marukado text-2xl text-center'>まだ よんだ 本が ありません。</p>
            )}
            </div>
            {/*3行上は見つからなかった時にだけ表示*/}
        </>
    );
}
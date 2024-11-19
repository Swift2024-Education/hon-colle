import Image from 'next/image';
import { fetchHistoryByID } from '../lib/data';
//キーワード検索のための関数をdataからインポート

//条件分岐に必要
import clsx from 'clsx';

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

                {results.length > 0 ? (//帰ってきた結果が0以上の時にこれを表示
                <div className='grid grid-cols-6 gap-y-4 justify-items-center content-evenly  bg-[#E5C089] p-[1.5vw] w-full '>
                    {/*上の行は結果を3 * 3で並べるためのTailwindCSSの記述*/}
                    {results.map((books) => (
                    <div key={books.book_number} className='bg-[#FFECCF] p-8 h-80 w-full items-center '>
                        <div className='text-center items-justify-center'>
                            <Image
                                src={`https://www.books.or.jp/img/books_icon/${books.isbn}.jpg`}
                                layout='responsive'
                                width={125}
                                height={175}
                                alt={`${books.title_kana}の表紙の画像`}
                                className='object-cover m-auto pt-3 max-w-[180px]'
                                //onError={() => src()}
                            />
                            {/*<div className='bg-slate-500 m-8 w-36 h-48'/>*/}
                        </div>
                    </div>
                ))}
                </div>
            ) : (
            <p className='bg-orange-100 text-gray-700 rounded-marukado text-2xl text-center'>まだ よんだ 本が ありません。</p>
            )}
            {/*3行上は見つからなかった時にだけ表示*/}
        </>
    );
}
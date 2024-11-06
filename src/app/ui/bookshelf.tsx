import React, { useEffect, useState } from 'react';

// fetchBooksByNumber関数をインポート
import { fecthBooksByNumber } from '@/app/lib/data'; // 適切なパスを指定

export default function Bookshelf({
    categoryNumber,
}: {
    categoryNumber: string;
}) {
    const [books, setBooks] = useState<any[]>([]); // 本を保存する状態

    useEffect(() => {
        const fetchBooks = async () => {
            const result = await fecthBooksByNumber(categoryNumber); // 本を取得
            setBooks(result); // 取得した本を状態に設定
        };

        fetchBooks(); // useEffect内で非同期処理を呼び出し
    }, [categoryNumber]);

    return (
        <div className='grid grid-cols-6 grid-rows-3 gap-6 flex-shrink-0 justify-items-center'>
            {books.map((book) => (
                <div key={book.book_number} style={{ padding: '10px', border: '1px solid #ccc', minWidth: '150px' }}>
                    <h3>{book.title}</h3>
                    <p>{book.author_kana}</p>
                </div>
            ))}
        </div>
    );
}

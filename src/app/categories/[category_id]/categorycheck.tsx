import { fetchBooksByCategory } from '@/app/lib/data';
// テスト用カテゴリ番号とタイトルを表示するコンポーネント

export  default async function categoryCheck(categoryNumber: string, currentPage: number) {
    // カテゴリ番号に基づいて本を取得
    const results = await fetchBooksByCategory(categoryNumber, currentPage);

    return (
        <div className="category-table">
            {results.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                    {results.map((books) => (
                        <div key={`${books.book_number}-${books.title}`} className="border p-4 rounded-lg">
                            <h3 className="text-lg">{books.title}</h3>
                            <p>カテゴリ番号: {books.category_number}</p>
                            {/* タイトル、カテゴリ番号を表示 */}
                        </div>
                    ))}
                </div>
            ) : (
                <p>該当する本は見つかりませんでした。</p>
            )}
        </div>
    );
}

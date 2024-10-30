import Pagination from "@/app/ui/pagenation";
import Search from "@/app/ui/search";
import { fetchSearchPages } from "@/app/lib/data";
import KeywordTable from "@/app/ui/keywordtable";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchSearchPages(query);

    return(
        <>
            <div className="bg-sky-200 h-max min-h-screen">
                <h1 className="text-center text-5xl text-extrabold p-5 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                    きーわーどけんさく の ぺーじ だよ
                    {/*お遊びでテキストをグラデーションにしてみた*/}
                </h1>
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 text-gray-700 mx-32 my-8">
                    <Search placeholder="ここに にゅうりょく して けんさく" />
                    {/*検索バーを表示、詳細な中身は/ui/search.tsx*/}
                </div>
                <KeywordTable query={query} currentPage={currentPage} />
                {/*キーワード検索の結果を整形して表示するための関数、中身は/ui/table.tsx*/}
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages} />
                    {/*件数に応じて1ページ目から遷移するためのもの、Next.jsのチュートリアルから流用したけどバグあり*/}
                </div>
            </div>
        </>
    );
}
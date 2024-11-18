import Pagination from "@/app/ui/pagenation";
import Search from "@/app/ui/search";
import { fetchSearchPages } from "@/app/lib/data";
import KeywordTable from "@/app/ui/keywordtable";

//export const runtime = 'edge';

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
            <div className=" bg-sky-swift h-max min-h-screen">
                <h1 className="text-center text-5xl text-extrabold text-gray-700 p-5 ">
                    本を けんさく </h1>
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 text-gray-700 mx-32 my-8">
                    <Search placeholder="ここに にゅうりょく して けんさく" />
                    {/*検索バーを表示、詳細な中身は/ui/search.tsx*/}
                </div>
                <KeywordTable query={query} currentPage={currentPage} />
                {/*キーワード検索の結果を整形して表示するための関数、中身は/ui/table.tsx*/}
                <div className="mt-5 flex w-full justify-center pb-10">
                    <Pagination totalPages={totalPages} />
                    {/*件数に応じて1ページ目から遷移するためのもの、Next.jsのチュートリアルから流用したけどバグあり*/}
                </div>
            </div>
        </>
    );
}
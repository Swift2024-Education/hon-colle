import Categorytable from "@/app/ui/categorytable";
import Pagination from "@/app/ui/pagenation";
import { fetchBookCountByCategory } from "@/app/lib/data";
//import CategoryCheck from "./categorycheck";//カテゴリ番号テスト用



export default async function Page({
    params,
    searchParams
}: {
    params: Promise<{ category_id: string }>;
    searchParams?: Promise<{ page?: string }>; // pageを含むsearchParamsを定義
}) {
    const category_id = (await params).category_id;
    const searchParamsObject = await searchParams; // searchParamsを待機
    const currentPage = Number(searchParamsObject?.page) || 1; // ページ番号を取得、存在しない場合は1をデフォルト
    const totalPages = await fetchBookCountByCategory(category_id);
    //const categoryCheck = await CategoryCheck(category_id, currentPage);//test

    return (
        <>
            <div className="bg-sky-200 h-max min-h-screen">
                <Categorytable categoryNumber={category_id} currentPage={currentPage} />
                <p>カテゴリー判別数字 : {category_id}</p>
                {/*{categoryCheck}*/}
                {/*テスト用*/}
            </div>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
                {/*件数に応じて1ページ目から遷移するためのもの、Next.jsのチュートリアルから流用したけどバグあり*/}
            </div>
        </>
    );
}


import Categorytable from "@/app/ui/categorytable";
import Pagination from "@/app/ui/pagenation";
import { fetchBookCountByCategory } from "@/app/lib/data";

//export const runtime = 'edge';

export default async function Page({
    params,
    searchParams
}: {
    params: Promise<{ category_id: string }>;
    searchParams?: Promise<{ page?: string }>; //pageを含むsearchParamsを定義
}) {
    const category_id = (await params).category_id;//カテゴリ番号
    const searchParamsObject = await searchParams; //searchParamsを待機
    const currentPage = Number(searchParamsObject?.page) || 1; //ページ番号を取得、存在しない場合は1をデフォルトに設定
    const totalPages = await fetchBookCountByCategory(category_id);

    return (
        <>
            <div className="bg-sky-swift h-max min-h-screen">
                <Categorytable categoryNumber={category_id} currentPage={currentPage} />
                {/*カテゴリごとで一覧表示*/}
                {/*<p>カテゴリー判別番号 : {category_id}</p>*/}
                {/*後で消す*/}
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages} />
                    {/*件数に応じて1ページ目から遷移するためのもの、Next.jsのチュートリアルから流用したけどバグあり*/}
                    {/*何ページか遷移するとエラー発生、どうやらkeyがユニークでないらしい*/}
                </div>
            </div>
        </>
    );
}


{/*こっちはもう使えない*/}
import { useSearchParams } from "next/navigation";
{/*クエリからパラメータを参照する*/}
import { fetchSearchPages } from "@/app/lib/data";
import Categorytable from "@/app/ui/categorytable";
import Pagination from "@/app/ui/pagenation";
import Search from "@/app/ui/search";



export default async function Page({
    params,
}: {
    params: Promise<{ category_id: string }>
}) {
    const category_id = (await params).category_id
    return (
        <div className="bg-sky-200 h-max min-h-screen" >
            <Categorytable categoryNumber='160' currentPage={100} />
            <p>カテゴリー判別数字 : {category_id}</p>
        </div >
    )
}
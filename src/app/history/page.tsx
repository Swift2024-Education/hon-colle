import Pagination from "../ui/pagenation";
import DisplayName from "../ui/displayName"
import { fetchHistoryPagesByID } from "../lib/data";
import HistoryTable from "../ui/historytable";
import { auth } from "../../../auth"

export default async function Page(props: {
    searchParams?: Promise<{
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const currentPage = Number(searchParams?.page) || 1;
    const data = await auth();
    let email = ''
    if (data != null) {
        email = data.user?.email || '';
    }
    let id = ''
    if (email != null && email != undefined) {
        id = email;
    }

    const totalPages = await fetchHistoryPagesByID(id);

    return (
        <>
            <div className = 'bg-sky-swift min-h-fit'>
                <DisplayName />
                <HistoryTable id={id} currentPage={currentPage} />
                <div className="mt-5 flex w-full justify-center pb-10">
                    <Pagination totalPages={totalPages} />
                    {/*件数に応じて1ページ目から遷移するためのもの、Next.jsのチュートリアルから流用したけどバグあり*/}
                </div>
            </div>
        </>
    )
}
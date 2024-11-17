import Pagination from "../ui/pagenation";
import DisplayName from "../ui/displayName"
import { fetchHistoryPagesByID } from "../lib/data";
import HistoryTable from "../ui/historytable";
import { auth } from "../../../auth"
import { fetchHistoryCountByID } from '../lib/data';

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
    const count = fetchHistoryCountByID(id)

    return (
        <>
            <div className='bg-sky-swift min-h-fit'>
                <DisplayName />
                {/*以下登録冊数表示*/}
                <div className="flex justify-center items-center mt-6">
                    <div className="border-4 border-gray-300 rounded-xl p-10 bg-white shadow-lg text-center w-96 mb-10">
                        <p className="text-xl font-semibold text-gray-700 leading-relaxed space-y-6">
                            <span className="block">
                                <span className="text-blue-500">{id}</span>
                                <span className="ml-2"> は</span>
                            </span>
                            <span className="block">
                                <span className="text-orange-500 text-7xl font-extrabold">{count}</span>
                                <span className="ml-2 text-xl"> さつ</span>
                            </span>
                            <span className="block">
                                よんだよ！
                            </span>
                        </p>
                    </div>
                </div>
                {/*ここまで登録冊数表示*/}
                <HistoryTable id={id} currentPage={currentPage} />
                <div className="mt-5 flex w-full justify-center pb-10">
                    <Pagination totalPages={totalPages} />
                    {/*件数に応じて1ページ目から遷移するためのもの、Next.jsのチュートリアルから流用したけどバグあり*/}
                </div>
            </div>
        </>
    )
}
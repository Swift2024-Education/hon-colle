import Pagination from "../ui/pagenation";
import { fetchHistoryPagesByID } from "../lib/data";
import HistoryTable from "../ui/historytable";
import { auth } from "../../../auth"
import { fetchHistoryCountByID } from '../lib/data';
import Image from "next/image";

//子どもたち
import boy_smile from '../ui/childrensImages/boy_smile.webp';
import girl_smile from '../ui/childrensImages/girl_smile.webp';

export const runtime = 'edge';

export default async function Page(props: {
    searchParams?: Promise<{
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const currentPage = Number(searchParams?.page) || 1;

    const data = await auth();
    let user_id = ''
    let user_name = ''
    if (data != null) {
        user_id = data.user?.email || '';
        user_name = data.user?.name || 'UnknownUser';
    }

    const totalPages = await fetchHistoryPagesByID(user_id);
    const count = fetchHistoryCountByID(user_id);

    return (
        <>
            <div className='bg-sky-swift h-max min-h-screen'>
                 {/* 画像と冊数のコンテナ */}
              <div className="flex justify-center items-center space-x-10 pt-8 mb-0">
                <div className="flex-shrink-0">
                <Image
                  src={girl_smile}
                  alt="smilesgirl"
                className="h-[350px] w-auto object-contain"
                />
            
            </div>
                {/*以下登録冊数表示*/}
                <div className="flex justify-center items-center ">
                    <div className="rounded-marukado p-10 bg-white shadow-lg text-center w-96 mb-10">
                        <p className="text-xl font-semibold text-gray-700 leading-relaxed space-y-6">
                            <span className="block">
                                {user_name ? (
                                    <span>{user_name}</span>
                                ):(
                                    <span>UnknownUser</span>
                                )}
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
                <div className="flex-shrink-3">
                <Image
                  src={boy_smile}
                  alt="smilesgirl"
                className="h-[350px] w-auto object-contain"
                />
            </div>

            </div>
                {/*ここまで登録冊数表示*/}
                <HistoryTable id={user_id} currentPage={currentPage} />
                <div className="mt-5 flex w-full justify-center pb-10">
                    <Pagination totalPages={totalPages} />
                    {/*件数に応じて1ページ目から遷移するためのもの、Next.jsのチュートリアルから流用したけどバグあり*/}
                </div>
            </div>
        </>
    )
}
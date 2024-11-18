import Pagination from "../ui/pagenation";
//import DisplayName from "../ui/displayName"
import { fetchHistoryPagesByID } from "../lib/data";
import HistoryTable from "../ui/historytable";
import { auth } from "../../../auth"
import { fetchHistoryCountByID } from '../lib/data';
import Image from "next/image";
import { fetchnews } from "../lib/data";

//子どもたち
import boy_smile from '../ui/childrensImages/boy_smile.png';
import girl_smile from '../ui/childrensImages/girl_smile.png';

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

    const news = await fetchnews();

    return (
        <>
            <div className='bg-sky-swift h-max min-h-screen '>

                {/* おしらせボックス */} 
                <div className=" flex items-center justify-center ">
                     <div className="w-[1200px] h-fit p-2 shadow-lg rounded-marukado bg-white">
                        <div className="flex items-center justify-start">
                            <div className="w-[230px] h-[55px] flex items-center justify-center rounded-marukado bg-[#E84F27]">
                                
                                <span className="text-white text-3xl font-medium">おしらせ</span>

                            </div>
                            {news ? (
                                <div key={news.date} className='text-3xl font-bold text-gray-700 pl-[30px]'>
                                    {news.news} ({news.date})
                                </div>):(
                                <p className="text-3xl text-gray-700 pl-[10vw]">おしらせが見つかりません。</p>
                            )}
                        </div>
                     </div>
                </div>

                 {/* 画像と冊数のコンテナ */}
              <div className="flex justify-center items-center space-x-10 mt-8 mb-0">
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
                                <span className="">{id}</span>
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
                <HistoryTable id={id} currentPage={currentPage} />
                <div className="mt-5 flex w-full justify-center pb-10">
                    <Pagination totalPages={totalPages} />
                    {/*件数に応じて1ページ目から遷移するためのもの、Next.jsのチュートリアルから流用したけどバグあり*/}
                </div>
            </div>
        </>
    )
}
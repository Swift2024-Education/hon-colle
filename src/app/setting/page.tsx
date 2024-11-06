import Search from "@/app/ui/search";
import Link from "next/link";

export default function Page() {
    return (
        <>
          <div className="bg-sky-200 h-max min-h-screen flex">
            <div className="bg-amber-300 min-h-48 h-fit my-20 mx-auto rounded-xl">
                <div className="bg-white m-8 rounded-xl">
                    <div className="p-4">

                        <h2 className="text-gray-700 pl-8 p-1 text-5xl tfont-bold ext-center">プロフィールシート</h2>

                        <div className="bg-amber-100 rounded-full w-fit ml-8">
                            <div className="text-gray-700 text-xl text-center mx-6">なまえ</div>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 text-gray-700 mx-32 my-8">
                            たんてい<Search placeholder="なまえ を にゅうりょく" />
                            {/*未完成，検索バーを表示、詳細な中身は/ui/search.tsx*/}
                        </div>

                        <div className="bg-amber-100 rounded-full w-fit ml-8">
                            <div className="text-gray-700 text-xl text-center mx-6">ログイン</div>
                        </div>

                        <h3 className="text-gray-700 pl-8 p-1 text-xl">googleアカウント表示予定（仮）</h3>

                        <div className="bg-orange-600 rounded-full w-fit ml-8">
                            <div className="text-gray-700 text-xl text-center mx-6">
                                <Link href="../">
                                    せってい を ほぞん
                                </Link>
                            </div>
                        </div>
                        {/*クリックでSearchに移動*/}
                        
                    </div>
                </div>
            </div>
          </div>
        </>
      );
}
import Search from "@/app/ui/search";
import Link from "next/link";

export default function Page() {
    return (
        <>
          <div className="bg-sky-200 h-max min-h-screen flex">
            <div className="bg-amber-300 min-h-48 h-fit my-20 mx-auto rounded-xl">
                <div className="bg-white m-8 rounded-xl">
                    <div className="p-4">

                        <h2 className="text-gray-700 pl-8 p-1 text-5xl tfont-bold text-center">プロフィールシート</h2>

                        <div className="bg-amber-100 rounded-full w-fit ml-8">
                            <div className="text-gray-700 text-xl text-center mx-6">なまえ</div>
                        </div>

                        <input className= "pl-8 p-1 max-w-md border-stone-950 rounded-xl placeholder-gray-500 border" placeholder="鈴木 悠太"></input>
                            {/*名前を入力*/}

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
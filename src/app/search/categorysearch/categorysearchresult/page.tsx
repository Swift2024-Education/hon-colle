'use client'

//import { useRouter } from "next/router";
{/*こっちはもう使えない*/}
import { useSearchParams} from "next/navigation";
{/*クエリからパラメータを参照する*/}


export default function page() {
    const searchParams = useSearchParams();
    const value = searchParams.get("value");
    {/*valueがカテゴリー数字*/}

    return (
        <div className="bg-sky-200 h-max min-h-screen" >
            <p>カテゴリー判別数字 : {value}</p>
        </div >
    )
}
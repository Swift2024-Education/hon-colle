import { LogInButton, LogOutButton } from "@/components/AuthButton";
import { auth } from "../../../auth";
import Image from "next/image";
import boy_smile from '@/app/ui/childrensImages/boy_smile.webp';

export default function Page() {

    const [inputText, setInputText] = useState('');
    const [submittedText, setSubmittedText] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value); // 入力のたびに状態を更新
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmittedText(inputText); // 入力内容を送信後に更新
        console.log(inputText); // 入力された内容を表示
    };

    const handleClick = () => {
        console.log(inputText);
    };

    const { data: session, status } = useSession();
    //console.log(session?.idToken); // ID トークンを sessionに格納できている


    return (
        <div className="bg-sky-swift h-max min-h-screen flex">
            <div className="bg-amber-300 h-fit w-[80vw] my-20 mx-auto rounded-xl flex items-center justify-center py-12">
                <div className="bg-white w-[90%] h-[90%] rounded-xl flex flex-col">
                    <h2 className="text-gray-700 p-4 text-4xl font-bold text-center">せってぃっひゃっひゃっひゃっひゃ</h2>

                    <div className="flex justify-center items-center h-max min-h-fut my-20 mx-auto">
                        {/*左側*/}
                        <div className="w-1/3 flex justify-center ml-16">
                            <div className="relative w-full h-full border-4 border-gray-500 rounded-lg overflow-hidden">
                                <Image
                                    src={boy_smile}
                                    alt="boy"
                                    className="max-w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>

                        {/*右側*/}
                        <div className="w-2/3 p-8 rounded-xl ml-8">
                            {/*名前入力部分*/}
                            <InputForm_user_name user_id={user_id}/>

                            {/*ログイン部分*/}
                            <div className="flex flex-col items-start mt-8">
                                <div className="bg-amber-100 rounded-full w-fit">
                                    <div className="text-gray-700 text-xl text-center mx-6">ログイン</div>
                                </div>

                                <div className="text-center mt-2">
                                    {!session && (
                                        <div>
                                            <p className="text-gray-700 text-lg font-base">ほんコレのきのうをつかうには、ログインしてください。</p>
                                            <div className="mt-2">
                                                <LogInButton />
                                            </div>
                                        </div>
                                    )}
                                    {session && (
                                        <div>
                                            <p className="text-gray-700 text-lg font-base">{session.user?.name} としてログインちゅう。</p>
                                            <div className="mt-2">
                                                <LogOutButton />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
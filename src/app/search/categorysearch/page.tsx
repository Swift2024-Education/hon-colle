import Link from "next/link";
import { BookOpenIcon } from "@heroicons/react/24/outline";


export default function Page() {
    return (
        <>
            <div className="bg-sky-200 h-max min-h-screen">
                <h1 className='text-gray-700 text-5xl p-8 font-bold'>Category Page</h1>
                <h2 className="text-gray-700 pl-8 p-1 text-xl">Links to Category:</h2>

                {/* Grid Container */}
                <div className="grid grid-cols-4 gap-x-4 gap-y-4 p-4">
                    {/* Individual Category Links */}
                    <div className="flex flex-row items-center gap-3 hover:text-blue-600 bg-neutral-200 rounded-md m-1 max-w-full w-full h-48 hover:bg-amber-50">
                        <BookOpenIcon className="w-9" />
                        <Link href="/">Jap</Link>
                    </div>

                    <div className="flex flex-row items-center gap-1 hover:text-blue-600 bg-neutral-400 rounded-md m-1 max-w-56 hover:bg-amber-50">
                        <BookOpenIcon className="w-9" />
                        <Link href="/">Kr</Link>
                    </div>

                    <div className="flex flex-row items-center gap-1 hover:text-blue-600 bg-neutral-400 rounded-md m-1 max-w-56 hover:bg-amber-50">
                        <BookOpenIcon className="w-9" />
                        <Link href="/">Chaina</Link>
                    </div>

                    <div className="flex flex-row items-center gap-1 hover:text-blue-600 bg-neutral-400 rounded-md m-1 max-w-56 hover:bg-amber-50">
                        <BookOpenIcon className="w-9" />
                        <Link href="/">Turkey</Link>
                    </div>

                    <div className="flex flex-row items-center gap-1 hover:text-blue-600 bg-neutral-400 rounded-md m-1 max-w-56 hover:bg-amber-50">
                        <BookOpenIcon className="w-9" />
                        <Link href="/">Italy</Link>
                    </div>

                    <div className="flex flex-row items-center gap-1 hover:text-blue-600 bg-neutral-400 rounded-md m-1 max-w-56 hover:bg-amber-50">
                        <BookOpenIcon className="w-9" />
                        <Link href="/">America</Link>
                    </div>

                    <div className="flex flex-row items-center gap-1 hover:text-blue-600 bg-neutral-400 rounded-md m-1 max-w-56 hover:bg-amber-50">
                        <BookOpenIcon className="w-9" />
                        <Link href="/">oooo</Link>
                    </div>

                    <div className="flex flex-row items-center gap-1 hover:text-blue-600 bg-neutral-400 rounded-md m-1 max-w-56 hover:bg-amber-50">
                        <BookOpenIcon className="w-9" />
                        <Link href="/">NARUTO</Link>
                    </div>

                    <div className="flex flex-row items-center gap-1 hover:text-blue-600 bg-neutral-400 rounded-md m-1 max-w-56 hover:bg-amber-50">
                        <BookOpenIcon className="w-9" />
                        <Link href="/">BLEACH</Link>
                    </div>

                    {/* Add additional category links as needed */}
                </div>
            </div>

        </>
    );
}
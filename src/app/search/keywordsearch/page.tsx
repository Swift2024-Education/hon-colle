import Pagination from "@/app/ui/pagenation";
import Search from "@/app/ui/search";
import { fetchSearchPages } from "@/app/lib/data";
import Table from "@/app/ui/table";

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchSearchPages('query');

    return(
        <>
            <div className="bg-gradient-to-b from-white to-stone-300 h-dvh">
                <h1 className="text-center text-gray-700 text-3xl text-bold p-5">
                    Search Page
                </h1>
                <div className="mt-4 flex items-center justify-between gap-2 md:mt-8 text-gray-700">
                    <Search placeholder="Search books..." />
                </div>
                <Table query={query} currentPage={currentPage} />
                <div className="mt-5 flex w-full justify-center">
                    <Pagination totalPages={totalPages} />
                </div>
            </div>
        </>
    );
}
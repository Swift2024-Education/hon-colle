//import Image from 'next/image';
import { fetchBooksByQuery } from '../lib/data';

export default async function BooksTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    const books = await fetchBooksByQuery(query, currentPage);

    return(
        <div className='mt-6 flow-root'>
            <div className='inline-block min-w-full align-middle'>
                <div className='rounded-lg bg-gray-50 p-2 md:-pt-0'>
                    <div className='md:hidden'>
                        {books?.map((book) => (
                            <div
                                key={book.title}
                                className='mb-2 w-full rounded-md bg-white p-4'
                            >
                                <div className='flex items-center justify-between border-b pb-4'>
                                    <div>
                                        <p>{book.title}</p>
                                        {/*<p>{book.title_kana}</p>*/}
                                    </div>
                                </div>
                                <div className='flex items-center justify-between border-b pb-4'>
                                    <div>
                                        {/*<p>{book.auther}</p>
                                        <p>{book.auther_kana}</p>*/}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
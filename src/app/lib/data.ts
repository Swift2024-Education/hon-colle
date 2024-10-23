import prisma from "../lib/prisma";

const ITEMS_PER_PAGE = 6;
export async function fetchSearchPages(query: string) {
    const count = await prisma.books.count({
        where: {
            title: {
                contains: query,
            },
        },
    })
    const totalPages = Math.ceil(Number(count / ITEMS_PER_PAGE));
    return totalPages;
}

export async function fetchBooksByQuery(
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const books = await prisma.books.findMany({
        skip: offset,
        take: ITEMS_PER_PAGE,
        where: {
            title: {
                contains: query,
            },
        },
        select: {
            title: true,
        },
    })
    return books;
}
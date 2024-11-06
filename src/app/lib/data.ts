import prisma from "../lib/prisma";

const ITEMS_PER_PAGE = 9;//1ページに表示したい検索結果の最大数
export async function fetchSearchPages(query: string) {
    //検索ワードを含む本の件数を取得する件数
    const count = await prisma.books.count({
        //件数を取得したいので、.countを使う
        where: {
            OR: [
                {
                    title: {
                        contains: query,
                    },
                },
                {
                    title_kana: {
                        contains: query,
                    },
                },
                {
                    author: {
                        contains: query,
                    },
                },
                {
                    author_kana: {
                        contains: query,
                    },
                },
            ]
        },
        //whereは、SQL文のWHEREと同じく、一致する情報の入った項目を書いておく
        //ORで複数選択している
    })
    //タイトル、著者名とそれぞれのひらがな版の項目から検索
    const totalPages = Math.ceil(Number(count / ITEMS_PER_PAGE));
    return totalPages;
    //検索結果の画面で1ページあたりに表示したい最大数で割った数を返す
}


export async function fetchBooksByQuery(
    //検索ワードを含む本の情報を取得する関数
    query: string,
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
    const books = await prisma.books.findMany({
        //検索ワードに一致する情報をたくさん取得したいので、.findMany
        skip: offset,
        take: ITEMS_PER_PAGE,
        where: {
            OR: [
                {
                    title: {
                        contains: query,
                    },
                },
                {
                    title_kana: {
                        contains: query,
                    },
                },
                {
                    author: {
                        contains: query,
                    },
                },
                {
                    author_kana: {
                        contains: query,
                    },
                },
            ]
        },
        //whereの中身は上の件数の取得関数と同じなので略
        select: {
            book_number: true,
            title: true,
            title_kana: true,
            author_kana: true,
            isbn: true,
        },
        //返却する情報の種類を選択
    })
    return books;
}
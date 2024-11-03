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

export async function fetchBooksByCategory(
    //カテゴリ番号が一致する本を取得する関数
    categoryNumber: string,  //1桁の数字（カテゴリ番号）や'e'などカテゴリ番号を区別する
    currentPage: number,
) {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;

    //まず全ての本を取得
    const allBooks = await prisma.books.findMany({
        orderBy: {
            category_number: 'asc',  //category_numberで昇順に並べ替え（descに変えると降順になる）
        },
        select: {
            book_number: true,
            title: true,
            title_kana: true,
            author_kana: true,
            category_number: true,
            isbn: true,
        },
    });

    //取得した全ての本をフィルタリング
    const filteredBooks = allBooks.filter((book) => {
        if (categoryNumber === 'e') {
            //categoryNumberが'e'の場合、category_numberが'E'から始まる本を取得
            return book.category_number?.startsWith('E');
        }

        if (categoryNumber === '10') {
            //categoryNumberが'10'の場合、category_numberが'R'、'怪'、'戦'で始まるか、nullの本を取得
            return (
                book.category_number === null ||
                book.category_number.startsWith('R') ||
                book.category_number.startsWith('怪') ||
                book.category_number.startsWith('戦')
            );
        }

        if (categoryNumber !== '10') {
            //通常のカテゴリ番号（1桁の数字）でフィルタリング
            if (book.category_number) {
                const isLengthValid = (categoryNumber === '0' && book.category_number.length === 2) ||
                                      (categoryNumber !== '0' && book.category_number.length === 3);
                                      //まずcategory_numberが2桁の数字か3桁の数字かでフィルタリング
                const lowerBound = (parseInt(categoryNumber) * 100).toString();//下限
                const upperBound = (parseInt(categoryNumber) * 100 + 99).toString();//上限

                return isLengthValid && book.category_number >= lowerBound && book.category_number <= upperBound;
                //上限と下限を設定し（categoryNumberが1なら100-199の範囲で）フィルタリング
            }
            return false;
        }
    });

    //ページネーションを考慮
    const pagenationedBooks = filteredBooks.slice(offset, offset + ITEMS_PER_PAGE);

    return pagenationedBooks;
}



export async function fetchBookCountByCategory(categoryNumber: string){
    //指定されたカテゴリ番号に基づいて本の件数を取得
    //fetchBooksByCategory関数とおおよそ同様
    const lowerBound = (parseInt(categoryNumber) * 100).toString() //カテゴリ番号の下限
    const upperBound = (parseInt(lowerBound) + 99).toString() //カテゴリ番号の上限


    const books = await prisma.books.findMany({
        orderBy: {
            category_number: 'desc',  //category_numberで降順に並べ替え
        },
        select: {
            book_number: true,
            title: true,
            title_kana: true,
            author_kana: true,
            category_number: true,
            isbn: true,
        },
    });

    //取得した本をフィルタリング
    const filteredBooks = books.filter((book) => {
        if (categoryNumber === 'e') {
            //categoryNumberが'e'の場合、category_numberが'E'から始まる本を取得
            return book.category_number?.startsWith('E');
        }

        if (categoryNumber === '10') {
            //categoryNumberが'10'の場合、category_numberが'R'、'怪'、'戦'で始まるか、nullの本を取得
            return (
                book.category_number === null ||
                book.category_number.startsWith('R') ||
                book.category_number.startsWith('怪') ||
                book.category_number.startsWith('戦')
            );
        }

        if (categoryNumber !== '10') {
            //通常のカテゴリ番号（1桁の数字）でフィルタリング
            if (book.category_number) {
                const isLengthValid = (categoryNumber === '0' && book.category_number.length === 2) ||
                                      (categoryNumber !== '0' && book.category_number.length === 3);
                return isLengthValid && book.category_number >= lowerBound && book.category_number <= upperBound;
            }
            return false;
        }
    });

    //フィルタリングされた本の件数を取得
    const count = filteredBooks.length;
    const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
    return totalPages; //ページ数を返す
}
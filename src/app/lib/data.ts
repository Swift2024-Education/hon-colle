'use server';

import prisma from "../lib/prisma";

const ITEMS_PER_PAGE = 9;//1ページに表示したい検索結果の最大数\
const ITEMS_PER_PAGE_FOR_HISTORY = 18; //本棚の最大数

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
    categoryNumber: string,  //1桁の数字（カテゴリ番号）や'e'などカテゴリを区別する
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



export async function fetchBookCountByCategory(categoryNumber: string) {
    //指定されたカテゴリ番号に基づいて本の件数を取得
    //fetchBooksByCategory関数とおおよそ同様
    const lowerBound = (parseInt(categoryNumber) * 100).toString() //カテゴリ番号の下限
    const upperBound = (parseInt(lowerBound) + 99).toString() //カテゴリ番号の上限


    const books = await prisma.books.findMany({
        orderBy: {
            category_number: 'asc',  //category_numberで昇順に並べ替え
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
    return totalPages;
}


export async function fetchnews() {
    const NEWS = prisma.news.findFirst({
        orderBy: {
            date: 'desc',
        },
    })
    return NEWS
}


export async function fetchBookByBookNumber(number: string) {
    const book = await prisma.books.findFirst({
        where: {
            book_number: {
                equals: BigInt(number), // 引数の数字と一致する本を検索
            },
        },
        select: {
            book_number: true,
            title: true,
            title_kana: true,
            author_kana: true,
            isbn: true,
        },
    });

    // numberに一致する本が見つからなければ、nullを返す
    if (book) {
        return book;
    } else {
        return null;
    }
}


//本の登録
export async function registerBookNumber(book_number: string, user_id: string) {
    try {
        if (book_number && user_id) {
            const History = await prisma.history.create({
                data: {
                    book_number: BigInt(book_number),
                    user_id: user_id,
                    date: new Date().toISOString(),
                },
            });
            //console.log('History:', History);
        } else {
            console.log('Invalid input: One or more values are null or undefined.');
        }
    } catch (error) {
        console.error('Error registering book number:', error);
    }
}

//user_idが一致するレコードを削除
export async function deleteRecordsByUserId(user_id: string, state: string) {
    if (state == 'reset') {
        try {
            if (user_id) {
                const deletedRecords = await prisma.history.deleteMany({
                    where: {
                        user_id: user_id,
                    },
                });

                console.log(`${deletedRecords.count} record(s) deleted for user_id: ${user_id}`);
            } else {
                console.log('Invalid input: user_id is null or undefined.');
            }
        } catch (error) {
            console.error('Error deleting records:', error);
        }
    }
}

export async function fetchHistoryCountByID(user_id: string) {
    //book_number毎にグループを作って配列として取得
    //book_numberの重複があってもカウントされない
    const uniqueBooks = await prisma.history.groupBy({
        by: ['book_number'],
        where: {
            user_id: user_id,
        },
    });

    return uniqueBooks.length;
}

export async function fetchHistoryPagesByID(user_id: string) {
    const count = await prisma.history.count({
        where: {
            user_id: user_id,
        },
    });
    const totalPages = Math.ceil(Number(count / ITEMS_PER_PAGE_FOR_HISTORY));
    return totalPages;
}

export async function fetchHistoryByID(
    user_id: string,
    currentPage: number,
) {
    const historyRecords = await prisma.history.findMany({
        where: {
            user_id: user_id,
        },
        select: {
            book_number: true,
            date: true,
        },
        orderBy: {
            date: 'desc',
        }
    });

    const bookNumberList = historyRecords.map((record) => record.book_number);

    const offset = (currentPage - 1) * ITEMS_PER_PAGE_FOR_HISTORY;
    const books = await prisma.books.findMany({
        skip: offset,
        take: ITEMS_PER_PAGE_FOR_HISTORY,
        where: {
            book_number: { in: bookNumberList },
        },
        select: {
            title_kana: true,
            author_kana: true,
            isbn: true,
            book_number: true,
        },
    });

    //'books'を'bookNumberList'の順序に並び替える
    const sortedBooks = bookNumberList.map((number) =>
        books.find((book) => book.book_number === number)
    ).filter((book) => book !== undefined); //nullとundefinedを除外

    return sortedBooks;
}

export async function checkRegisterdBook(
    number: string,
    user_id: string,
) {
    const existingRecord = await prisma.history.findFirst({
        where: {
            user_id: user_id,
            book_number: BigInt(number),
        },
    });
    //レコードが存在する場合はtrue存在しない場合はfalseを返す
    return existingRecord !== null;
}

export async function fetchUserName(
    user_id: string,
) {
    const user_name = await prisma.user.findUnique({
        where: {
            id: user_id,
        },
        select: {
            name: true,
        },
    });
    //Userテーブルから、idと一致するユーザーの名前を返却
    return user_name;
}

import { registerBookNumber } from '@/app/lib/data';

type RegisterBooksProps = {
    bookNumber: string
    id: string
    state: string
};

const RegisterBooks = async ({ bookNumber, id, state }: RegisterBooksProps) => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;
    //const message = ''

    try {
        if (state == 'register') {
            await registerBookNumber(bookNumber, id, formattedDate);
            console.log('登録しました')
            //let message = '登録しました'
        }
    } catch (error) {
        console.error('登録中にエラーが発生しました:', error);
        //let message = 'エラー'
    }

    return (
        <></>
    )
}
export default RegisterBooks
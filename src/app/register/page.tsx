import InputForm from '@/app/ui/inputform';
import BookNumberTable from '@/app/ui/booknumbertable';
import HandleReset from '@/app/ui/handlereset';
import { globalBooksArray } from '@/app/lib/difinitions';
import BooksHistory from '@/app/ui/bookshistory';



export default async function Page(props: {
  searchParams?: Promise<{ number?: string; state: string; id?: string}>;
}) {
  const searchParams = await props.searchParams;
  const number = searchParams?.number || '';
  const state = searchParams?.state || 'normal';
  const id = searchParams?.id || '';


  return (
    <div className=" bg-sky-swift h-max min-h-screen">
      <div>
        <InputForm placeholder="数字を入力" />
        {/*入力フォーム*/}
      </div>
      <HandleReset />
      {/*機能しないリセットボタン*/}
      <div>
        数字は[{number ? number : "null"}]
        {/*後で消す*/}
      </div>
      <div>
        <BookNumberTable number={number} />
        {/*本の取得と表示*/}
      </div>
      <div>
        <BooksHistory />
        {/*本の取得と表示*/}
      </div>
    </div>
  );
};


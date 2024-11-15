import BooksHistory from '@/app/ui/bookshistory';
import AuthorTable from '@/app/ui/authortable';
import InputForm from '@/app/ui/inputform';


export default async function Page(props: {
  searchParams?: Promise<{ number?: string; state?: string}>;
}) {
  const searchParams = await props.searchParams;
  const author = searchParams?.number || '';
  const state = searchParams?.state || 'normal';

    return(
      <div className=" bg-sky-swift h-max min-h-screen">
      <div>
        <InputForm placeholder="著者を入力" />
        {/*入力フォーム*/}
      </div>
      <div>
        著者は[{author ? author : "null"}]
        {/*後で消す*/}
      </div>
      <AuthorTable author={author} />
    </div>
    )
}
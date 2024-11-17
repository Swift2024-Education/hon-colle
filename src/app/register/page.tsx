import InputForm from '@/app/ui/inputform';
import BookNumberTable from '@/app/ui/booknumbertable';
import HandleReset from '@/app/ui/handlereset';
import RegisterBooks from '@/app/ui/registerbooks';
import { deleteRecordsByUserId } from '@/app/lib/data';




export default async function Page(props: {
  searchParams?: Promise<{ number?: string; state: string; id?: string}>;
}) {
  const searchParams = await props.searchParams;
  const number = searchParams?.number || '';
  const state = searchParams?.state || '';
  //const id = searchParams?.id || '';
  //await deleteRecordsByUserId('sutou', state);
  const id = 'sutou' //一旦sutouにしときました！！



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
        idは[{id ? id : "id"}]
        {/*後で消す*/}
        <RegisterBooks bookNumber={number} id={id} state={state}/>
      </div>
      <div>
        <BookNumberTable number={number} id={id}/>
        {/*本の取得と表示*/}
      </div>
    </div>
  );
};


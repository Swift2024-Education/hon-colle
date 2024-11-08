import InputForm from '@/app/ui/inputform';
import IsbnTable from '@/app/ui/isbntable';

export default async function Page(props: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const searchParams = await props.searchParams;
  const isbn = searchParams?.query || '';


  return (
    <div className="bg-sky-200 h-max min-h-screen">
      <div>
        <InputForm placeholder="isbnを入力" />
        {/*入力フォーム*/}
      </div>
      <div>
      isbnは[{isbn ? isbn : "null"}]
      {/*後で消す*/}
      </div>
      <div>
        <IsbnTable isbn={isbn} />
        {/*本の取得と表示*/}
      </div>
    </div>
  );
};


import Link from 'next/link'

//export const runtime = 'edge';

export default function NotFound() {
  return (
    <div className='bg-sky-swift h-fit w-screen'>
      <h2 className='text-red-800 text-5xl text-center p-4'>404: Not Found</h2>
      <p className='text-gray-700 text-2xl text-center p-2'>さがしているぺーじは見つかりませんでした</p>
      <p className='text-gray-700 text-2xl text-center p-2'>URLなどに間違いがないか、もういちどかくにんしてください。</p>
      <Link href="/">
        <div className='text-blue-900 underline text-2xl text-center p-2'>トップページにもどる</div>
      </Link>
    </div>
  )
}
import Head from 'next/head'
import Link from 'next/link';

export default function Index({ data }) {

  return (
    <div className='catalog__section'>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Link href="/catalog">
        <a>Open catalog</a>
      </Link>
    </div>
  )
}





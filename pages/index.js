import Head from 'next/head'
import Link from 'next/link';

export default function Index({ data }) {

  return (
    <div>
      <Head>
        <title>Test task</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      </Head>
      <Link href="/catalog">
        <a>Open catalog</a>
      </Link>
    </div>
  )
}





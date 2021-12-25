import Head from 'next/head';
import Search from '../Components/search';




export default function Home() {

  return (
    <div>
      <Head>
        <link rel='icon' href='/favicon.png' />
        <title>Weather App</title>
      </Head>

      <div>
        <Search/>
      </div>
    </div>
  )
}

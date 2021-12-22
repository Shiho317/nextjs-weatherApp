import Head from 'next/head';
import SearchBox from '../Components/searchBox';




export default function Home() {

  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>

      <div>
        <SearchBox/>
      </div>
    </div>
  )
}

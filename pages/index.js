import Head from 'next/head';
import styles from '../styles/utility.module.css';
import Search from './Components/Search';




export default function Home() {

  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>

      <div>
        <Search/>
      </div>
    </div>
  )
}

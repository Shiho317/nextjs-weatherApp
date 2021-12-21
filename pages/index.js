import Head from 'next/head';
import styles from '../styles/utility.module.css';
import App from './Components/weather-app';



export default function Home() {

  return (
    <div>
      <Head>
        <title>Weather App</title>
      </Head>

      <div>
        <App/>
      </div>
    </div>
  )
}

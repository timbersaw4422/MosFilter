import LandingHeader from "../components/landing/landingHeader";
import LandingAkcii from "../components/landing/landingAkcii";
import LandingModelRow from "../components/landing/landingModelRow";
import Calculator from "../components/landing/calculator/calculator";
import Head from "next/head";


export default function Geizer(){
  return(
    <div className="landing" style={{background:"#F9FAFC"}}>
      <Head>
        <title>Мос - фильтр | Главная</title>
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Описание страницы сайта." />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <LandingHeader name = "Гейзер"/>
      <LandingAkcii />
      <LandingModelRow />
      <div className="landing-wrapper">
        <Calculator />
      </div>

   </div>

  )
}

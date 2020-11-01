import LandingHeader from "../components/landing/landingHeader";
import LandingAkcii from "../components/landing/landingAkcii";
import LandingModelRow from "../components/landing/landingModelRow";
import Calculator from "../components/landing/calculator/calculator";
import LandingCatalog from "../components/landing/landingCatalog";
import Head from "next/head";

// export async function getServerSideProps(context) {
//   const res = await fetch('https://mosfilt.firebaseio.com/goods.json?orderBy="categoryId"&equalTo=3');
//   const data = await res.json();
//   return {
//     props: {data}
//   }
// }

export default function Geizer(){

  return(
    <div className="landing" style={{background:"#F9FAFC"}}>
      <Head>
        <title>Мос - фильтр | Главная</title>
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Описание страницы сайта." />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <LandingHeader name = "Гейзер"/>
      <LandingAkcii />
      <LandingModelRow />
      <div className="landing-wrapper">
        <Calculator />
        <LandingCatalog />
      </div>


   </div>

  )
}

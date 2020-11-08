import LandingHeader from "../components/landing/landingHeader";
import LandingAkcii from "../components/landing/landingAkcii";
import LandingModelRow from "../components/landing/landingModelRow";
import Calculator from "../components/landing/calculator/calculator";
import LandingCatalog from "../components/landing/landingCatalog";
import LandingServices from "../components/landing/landingServices";
import LandingCallToAction from "../components/landing/landingCallToAction";
import LandingReviews from "../components/landing/landingReviews";
import LandingWorks from "../components/landing/landingWorks";
import LandingAbout from "../components/landing/landingAbout";
import LandingContacts from "../components/landing/landingContacts";
import LandingFooter from "../components/landing/landingFooter";
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
        <title>Мос - фильтр | Гейзер. Услуги</title>
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Описание страницы сайта." />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      </Head>

      <LandingHeader name = "Гейзер"/>
      <LandingAkcii />
      <LandingModelRow />
      <div className="landing-wrapper">
        <Calculator />
        <LandingCatalog />
        <LandingServices />
      </div>
      <LandingCallToAction />
      <LandingReviews />
      <LandingWorks />
      <LandingAbout />
      <LandingContacts />
      <LandingFooter />

   </div>

  )
}

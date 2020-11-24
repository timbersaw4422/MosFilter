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
import Modal from "../components/landing/rModal/rModal";
import Quiz from "../components/landing/quiz";
import GoodModal from "../components/landing/goodModal.js";
import {useState} from "react";
import Head from "next/head";

export async function getServerSideProps(context) {
  const res = await fetch('https://mosfilt.firebaseio.com/goods.json?orderBy="categoryId"&equalTo=3');
  const data = await res.json();
  return {
    props: {data}
  }
}

export default function Geizer(
  {data}
){

  // const data = {data:{"1":{id:1, title:"Гейзер Какой то", subtitle:"Комплект картриджей", price:1488, img:"/img/landing/geizer-stock1.png",
  //                     discount:10},
  //                     "2":{id:2, title:"Гейзер Другой", subtitle:"Комплект картриджей", price:1488, img:"/img/landing/geizer-stock1.png"},
  //                     "3":{id:3, title:"Гейзер Третий", subtitle:"Комплект картриджей", price:1488, img:"/img/landing/geizer-stock1.png"}}}

  const goods = Object.keys(data).map(good => data[good]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("QUIZ");
  const [activeGood, setActiveGood] = useState(null);
  const [modalPayload, setModalPayload] = useState(null);

  const [type, setType] = useState(3);

  let modalContent;
  let modalMaxWidth;

  switch (modalType){
    case "QUIZ":{
      modalMaxWidth = "1150px";
      modalContent = <Quiz setModalOpen={setModalOpen} goods = {goods}/>;
      break;
    }

    case "GOOD/SERVICE":{
      modalMaxWidth = "950px";
      modalContent = <GoodModal good={activeGood} modalPayload={modalPayload}/>;
      break;
    }

    case "JUST-NUMBER":{
      modalMaxWidth = "480px";
      modalContent = <GoodModal good={goods[0]} startTranslate={1} modalPayload={modalPayload}/>;
      break;
    }

    default:break;
  }

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

      <LandingHeader name = "Гейзер" setModalOpen = {setModalOpen} setModalType = {setModalType}/>
      <LandingAkcii goods = {goods}/>
      <LandingModelRow setType={setType}/>
      <div className="landing-wrapper">
        <Calculator
            setModalPayload = {setModalPayload}
            isOption4={false}
            initialOption1={goods[0].title}
            goods={goods}
            setModalOpen={setModalOpen}
            setModalType={setModalType}/>
        <LandingCatalog
              setModalPayload = {setModalPayload}
              setModalOpen = {setModalOpen}
              setModalType = {setModalType}
              setActiveGood={setActiveGood}
              goods={goods}
              type={type}
              setType={setType}/>
        <LandingServices />
      </div>
      <LandingCallToAction goods = {goods}/>
      <LandingReviews />
      <LandingWorks />
      <LandingAbout />
      <LandingContacts setModalOpen={setModalOpen} setModalType={setModalType}/>
      <LandingFooter />

      {isModalOpen &&
          <Modal
            isModalOpen={isModalOpen}
            setModalOpen = {setModalOpen}
            overlaySpeed = {200}
            modalSpeed = {500}
            timingFunction = "ease-in"
            animate = "fromDown"
            maxWidth={modalMaxWidth}
            padding="0 0">
            {modalContent}
          </Modal>
        }

   </div>

  )
}

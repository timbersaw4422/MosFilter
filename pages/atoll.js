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
import LandingNav from "../components/landing/landingNav";
import {useState} from "react";
import Head from "next/head";

export async function getServerSideProps(context) {
  const res = await fetch('https://mosfilt.firebaseio.com/goods.json?orderBy="categoryId"&equalTo=2');
  const data = await res.json();
  return {
    props: {data}
  }
}

export default function Atoll(
  {data}
){
  const globalBrand="Atoll";

  // const data = {"1":{id:1, title:"Гейзер Какой то", subtitle:"Комплект картриджей", price:1488, img:"/img/landing/geizer-stock1.png",
  //                     discount:10},
  //                     "2":{id:2, title:"Гейзер Другой", subtitle:"Комплект картриджей", price:1488, img:"/img/landing/geizer-stock1.png"},
  //                     "3":{id:3, title:"Гейзер Третий", subtitle:"Комплект картриджей", price:1488, img:"/img/landing/geizer-stock1.png"}}

  let goods = Object.keys(data).map(good => data[good]);
  const catalogGoods = [...goods];
  goods = goods.filter(good =>{
    return (good.id !== 201 && good.id !== 202 && good.id !== 204)
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("QUIZ");
  const [activeGood, setActiveGood] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [modalPayload, setModalPayload] = useState(null);

  const [type, setType] = useState(3);

  let modalContent;
  let modalMaxWidth;

  switch (modalType){
    case "QUIZ":{
      modalMaxWidth = "1150px";
      modalContent = <Quiz setModalOpen={setModalOpen} goods = {goods} globalBrand={globalBrand}/>;
      break;
    }

    case "GOOD":{
      modalMaxWidth = "950px";
      modalContent = <GoodModal good={activeGood} modalPayload={modalPayload} globalBrand={globalBrand}/>;
      break;
    }

    case "SERVICE":{
      modalMaxWidth = "950px";
      modalContent = <GoodModal good={goods[0]} modalPayload={modalPayload} service={true} globalBrand={globalBrand}/>;
      break;
    }

    case "JUST-NUMBER":{
      modalMaxWidth = "480px";
      modalContent = <GoodModal good={goods[0]} startTranslate={1} modalPayload={modalPayload} globalBrand={globalBrand}/>;
      break;
    }

    case "REVIEW":{
      modalMaxWidth = "325px";
      modalContent = <img src={`/img/reviews/screen${modalPayload}.png`} alt="Отзыв"/>;
      break;
    }

    default:break;
  }

  const stocks = [
    {id:1, subtitle:"Комплект картриджей", title:"Atoll A550 | 560 STD", oldPrice:3900, newPrice:3300, img:"/img/landing/atoll-stock1.png", discount:"-15%"}
  ];

  const modelRowImgs=["/img/landing/atoll1.png", "/img/landing/atoll2.png"];

  return(
    <div className="landing" style={{background:"#F9FAFC"}}>
      <Head>
        <title>Мос - Фильтр | Покупка, замена, установка картриджей для фильтров Атолл в Москве</title>
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      </Head>

      <LandingNav globalBrand={globalBrand}/>
      <LandingHeader name = "Атолл" setModalOpen = {setModalOpen} setModalType = {setModalType} globalBrand={globalBrand}/>
      <LandingAkcii goods = {goods} stocks={stocks} globalBrand={globalBrand}/>
      <LandingModelRow setType={setType} imgs = {modelRowImgs} bottom="-30px"/>
      <div className="landing-wrapper">
        <Calculator
              setModalPayload = {setModalPayload}
              isOption4={false}
              initialOption1={goods[0].title}
              goods={goods}
              setModalOpen={setModalOpen}
              setModalType={setModalType}
              globalBrand={globalBrand}
              />
        <LandingCatalog
              setModalPayload = {setModalPayload}
              setModalOpen = {setModalOpen}
              setModalType = {setModalType}
              setActiveGood={setActiveGood}
              goods={catalogGoods}
              type={type}
              setType={setType}
              />
        <LandingServices
              setActiveService={setActiveService}
              setModalOpen={setModalOpen}
              setModalType={setModalType}
              setModalPayload={setModalPayload}
              />
      </div>
      <LandingCallToAction goods = {goods} globalBrand={globalBrand}/>
      <LandingReviews
              setModalType={setModalType}
              setModalOpen={setModalOpen}
              setModalPayload={setModalPayload}/>
      <LandingWorks />
      <LandingAbout />
      <LandingContacts
              setModalOpen={setModalOpen}
              setModalType={setModalType}
              setModalPayload={setModalPayload}/>
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

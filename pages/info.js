import Head from "next/head";
import Header from "../components/header/header";
import MainNav from "../components/mainNav/mainNav";
import AsideNav from "../components/asideNav/asideNav";
import WhatsApp from "../components/whatsApp";
import Footer from "../components/footer/footer";
import Path from "../components/path";
import Router from "next/router";

export default function postsPage(){

  const policyBtnClick = () => {
    Router.push('/privacy')
  }

  const offerBtnClick = () => {
    Router.push('/publicoffer')
  }

  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | Правовая информация</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        </Head>

        <Header />
        <MainNav activeLink={"Правовая информация"}/>

        <section className="content-block ">
            <div className="content-left">
                <AsideNav />
                <WhatsApp marginTop="6rem"/>
            </div>
            <div className="content-right">
               <Path  category="info"/>
               <h1 className="title">«Мос — фильтр»  |  Правовая информация</h1>
               <div className="info">
               <div className="info-item">
                  <p className="info-item__title">Политика конфиденциальности сайта mos-filter.ru</p>
                  <div className="info-item__btn" onClick={policyBtnClick}><span>Читать</span></div>
               </div>
               <div className="info-item">
                  <p className="info-item__title">Публичная оферта</p>
                  <div className="info-item__btn" onClick={offerBtnClick}><span>Читать</span></div>
               </div>
               </div>
            </div>
        </section>

        <style jsx>{`
          .title{
            font-weight: 600;
            font-size: 24px;
            margin:4rem 0;
            color: #424242;
          }

          .info{
            display:flex;
            align-items:center;
            justify-content:Space-between;
          }

          .info-item{
            background: #FFFFFF;
            border: 1px solid #EEEEEE;
            box-sizing: border-box;
            border-radius: 0.5rem;
            padding:4rem;
            width:calc(50% - 1rem);
            margin-bottom:2rem;
          }

           .info-item__title{
             font-weight: 600;
             font-size: 14px;
             line-height: 19px;
             color: #424242;
             margin-top:0;
             height:50px;
           }

           .info-item__btn{
             font-weight: 600;
             font-size: 12px;
             line-height: 16px;
             display:flex;
             align-items:center;
             justify-content:center;
             width:20rem;
             height:4rem;
             border: 2px solid #4862D2;
             border-radius: 2rem;
             cursor:pointer;
             position:relative;
           }

           .info-item__btn span{
             position:relative;
             z-index:2;
             color: #424242;
             transition:0.3s;
           }

           .info-item__btn:after{
             content:"";
             position:absolute;
             top:-1px;
             left:-1px;
             right:-1px;
             bottom:-1px;
             background:#4862D2;
             z-index:1;
             transition:0.3s;
             border-radius: 2rem;
             opacity:0;
           }

           @media(hover:hover){
             .info-item__btn:hover:after{
                opacity:1;
             }
             .info-item__btn:hover span{
                color:#fff;
             }
           }

           @media screen and (max-width:800px){
             .info{
               flex-direction:column;
             }
             .info-item{
               width:100%;
               height:auto;
               margin-bottom:30px;
             }
           }
        `}</style>
    </div>

    <Footer />
   </>
  )
}

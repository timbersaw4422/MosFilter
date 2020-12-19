import Head from "next/head";
import Header from "../../components/header/header";
import MainNav from "../../components/mainNav/mainNav";
import AsideNav from "../../components/asideNav/asideNav";
import WhatsApp from "../../components/whatsApp";
import Footer from "../../components/footer/footer";
import GoodPath from "../../components/good/goodPath";
import GoodMain from "../../components/good/goodMain";
import GoodBottom from "../../components/good/goodsBottom";
import cookies from 'next-cookies';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

export async function getServerSideProps(ctx) {
  const id = +ctx.params.id;
  const res = await fetch(`https://mosfilt.firebaseio.com/fullgoods/${id}.json`);
  const good = await res.json();

  return {
    props: {good}
  }
}

export default function Goods({good}){

  const options = {
    timeout: 3000,
    position: positions.BOTTOM_RIGHT,
    type:"success"
  };

  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | {good.title}</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Описание страницы сайта." />
          <link rel="preload" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" as="style"
          onload="this.rel='stylesheet'" media="all"
          integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
          crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        </Head>

        <Header />
        <MainNav />



          <section className="content-block">
              <div className="content-left">
                  <AsideNav />
                  <WhatsApp marginTop="6rem"/>
              </div>
              <div className="content-right">
                  <GoodPath categoryName={good.categoryName}
                            categoryId={good.categoryId}
                            goodTitle={good.title}
                            goodSubtitle={good.subtitle}/>
                  <Provider template={AlertTemplate} {...options}>
                    <GoodMain good={good}/>
                  </Provider>
                  <GoodBottom good={good} />
              </div>
          </section>





        <style jsx>{`
          .about__brands{
            font-weight: 600;
            font-size: 20px;
            line-height: 27px;
            color: #424242;
            margin-top:10rem;
          }

          .horizontal-shape{
            background: #F0F0F0;
            width:100%;
            height:1px;
            margin-top:3rem;
          }


        `}</style>

    </div>

    <Footer />
   </>
  )
}

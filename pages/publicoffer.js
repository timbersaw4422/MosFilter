import Head from "next/head";
import Header from "../components/header/header";
import MainNav from "../components/mainNav/mainNav";
import AsideNav from "../components/asideNav/asideNav";
import WhatsApp from "../components/whatsApp";
import Footer from "../components/footer/footer";
import Path from "../components/path";

export default function postsPage(){

  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | Публичная оферта</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        </Head>

        <Header />
        <MainNav activeLink={"Статьи"}/>

        <section className="content-block ">
            <div className="content-left">
                <AsideNav />
                <WhatsApp marginTop="6rem"/>
            </div>
            <div className="content-right">
              <Path  category="publicoffer"/>
              <div className="title" style={{fontSize: 24, color: '#424242', fontWeight: '600', marginBottom: '40px', marginTop: '20px'}}>Публичная оферта</div>
              <p className="offer" style={{fontSize: 16, lineHeight: "150%", color: '#424242'}}>Информация о технических характеристиках, комплекте поставки, стране изготовления, внешнем виде и цвете товара носит справочный характер
                  и основывается на последних доступных к моменту публикации сведениях.
                  Информация на сайте не является публичной офертой. В зависимости
                  от модели и партии товары могут отличаться по виду от изображенных на сайте.
              </p>
            </div>
        </section>
    </div>

    <Footer />
   </>
  )
}

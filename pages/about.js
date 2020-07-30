import Head from "next/head";
import Header from "../components/header/header";
import MainNav from "../components/mainNav/mainNav";
import AsideNav from "../components/asideNav/asideNav";
import BrandSlider from "../components/brandSlider/brandsSlider";
import WhatsApp from "../components/whatsApp";
import Footer from "../components/footer/footer";
import Path from "../components/path";
import AboutInner from "../components/about/about";
import Last2Rewiews from "../components/reviews/last2Reviews";

export default function About(){


  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | О компании</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Описание страницы сайта." />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        </Head>

        <Header />
        <MainNav />

        <section className="content-block">
            <div className="content-left">
                <AsideNav />
                <WhatsApp marginTop="6rem"/>
            </div>
            <div className="content-right">
                <Path  category="about"/>
                <AboutInner />
                <Last2Rewiews />
                <h2 className="about__brands">Бренды</h2>
                <div className="horizontal-shape"></div>
                <BrandSlider />
            </div>
        </section>





        <style jsx>{`
          .content-block{
            display:flex;
            justify-content:space-between;
            margin-bottom:5rem;
          }

          .content-left{
            width:20%;
          }

          .content-right{
            width:78%;
          }

          .with-border{
            border-right:1px solid #E3E3E3;
          }

          .with-margin{
            margin-top:7.8rem;
          }

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

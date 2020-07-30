import Head from "next/head";
import Header from "../components/header/header";
import MainNav from "../components/mainNav/mainNav";
import AsideNav from "../components/asideNav/asideNav";
import Brands from "../components/brands";
import WhatsApp from "../components/whatsApp";
import Footer from "../components/footer/footer";
import Path from "../components/path";
import AllReviews from "../components/reviews/allReviews";

export default function forBusiness(){
  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | Для бизнеса</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Описание страницы сайта." />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        </Head>

        <Header />
        <MainNav />

        <section className="content-block">
            <div className="content-left">
                <AsideNav />
                <WhatsApp marginTop="6rem"/>
            </div>
            <div className="content-right">
                <Path  category="reviews"/>
                <AllReviews />
                <div className="horizontal-shape"></div>
                <Brands />
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

          .horizontal-shape{
            background: #F0F0F0;
            width:100%;
            height:1px;
            margin-top:9rem;
          }

        `}</style>

    </div>

    <Footer />
   </>
  )
}

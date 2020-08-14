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

export async function getServerSideProps(ctx) {
  const id = +ctx.params.id;
  const res = await fetch(`https://mosfilt.firebaseio.com/goods/${id}.json`);
  const good = await res.json();

  return {
    props: {good}
  }
}

export default function Goods({good}){


  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | О компании</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Описание страницы сайта." />
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

                <GoodMain good={good}/>
                <GoodBottom good={good} />
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

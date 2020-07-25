import Head from "next/head";
import Header from "../../components/header/header";
import MainNav from "../../components/mainNav/mainNav";
import AsideNav from "../../components/asideNav/asideNav";
import Advantages from "../../components/advantages/advantages";
import Footer from "../../components/footer/footer";
import { useRouter } from 'next/router';
import WhatsApp from "../../components/whatsApp";
import Path from "../../components/path";
import Categories from "../../components/categories/categories";

export default function Category(){

  const router = useRouter();
  let category = router.query.category;
  if (category) category = category.charAt(0).toUpperCase() + category.substr(1);

  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | Atoll</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Описание страницы сайта." />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        </Head>

        <Header />
        <MainNav />

        <section className="content-block">
            <div className="content-left">
                <AsideNav />
                <WhatsApp />
            </div>
            <div className="content-right">
                <Path category={category}/>
                <Categories title={category}/>

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

        `}</style>

    </div>

    <Footer />
   </>
  )
}

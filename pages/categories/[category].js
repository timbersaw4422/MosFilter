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
import AboutBrand from "../../components/aboutBrands/aboutBrand";

export default function Category(){

  const router = useRouter();
  let category = router.query.category;
  if (category) category = category.charAt(0).toUpperCase() + category.substr(1);

  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | {category}</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
                {category ? <Path category={category}/> : null}
                {category ? <Categories title={category}/> : null}
                <Advantages />
                <div className="horizontal-shape"></div>
            </div>
        </section>

        <section className="content-block">
            <div className="content-left">
            </div>
            <div className="content-right">
                {category ? <AboutBrand category={category}/> : null}
            </div>
        </section>

    </div>

    <Footer />

     <style jsx>{`
       @media screen and (max-width:700px){
         .horizontal-shape{
           display:none;
         }
       }
      `}</style>

   </>
  )
}

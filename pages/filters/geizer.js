import Head from "next/head";
import Header from "../../components/header/header";
import MainNav from "../../components/mainNav/mainNav";
import AsideNav from "../../components/asideNav/asideNav";
import Advantages from "../../components/advantages/advantages";
import Footer from "../../components/footer/footer";
import WhatsApp from "../../components/whatsApp";
import Link from "next/link";
import Catalog from "../../components/catalog/catalog";
import AboutFiltersGeizer from "../../components/aboutBrands/aboutFiltersGeizer";


export async function getServerSideProps(context) {
  const res = await fetch('https://mosfilt.firebaseio.com/goods.json?orderBy="categoryId"&equalTo=1');
  const data = await res.json();
  return {
    props: {data}
  }
}

export default function filtersAtoll({data}){

  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | Фильтры Гейзер</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
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
                 <div className="path2">
                     <Link href="/"><a className="active">Главная </a></Link>
                     /
                     <Link href="/categories/[category]" as="/categories/geizer"><a className="active"> Гейзер </a></Link>
                     /
                     Фильтры для воды
                 </div>
                 <h2 className="filters__title">Фильтры для воды Гейзер</h2>

                 <Catalog goods={data} />
                 <Advantages marginTop="7rem"/>
                 <div className="horizontal-shape" style={{marginBottom:"9rem"}}></div>
                 <AboutFiltersGeizer />


            </div>
        </section>




        <style jsx>{`

          .active{
            color: #4862D2;
            text-decoration:none;
          }

          .filters__title{
            font-weight: 600;
            font-size: 24px;
            color: #424242;
            margin:4rem 0;
          }

        `}</style>

    </div>

    <Footer />
   </>
  )
}

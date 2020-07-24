import Head from "next/head";
import Header from "../components/header/header";
import MainNav from "../components/mainNav/mainNav";
import AsideNav from "../components/asideNav/asideNav";
import Slider from "../components/slider/slider";
import Advantages from "../components/advantages/advantages";
import Calculator from "../components/calculator/calculator";

export default function Index(){
  return(
    <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | Главная</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Описание страницы сайта." />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
        </Head>

        <Header />
        <MainNav />

        <section className="content-block">
            <div className="content-left">
                <AsideNav />
            </div>
            <div className="content-right">
                <Slider />
                <Advantages />
            </div>
        </section>

        <section className="content-block">
            <div className="content-left">

            </div>
            <div className="content-right">
                <Calculator />
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
        `}</style>
    </div>
  )
}

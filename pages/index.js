import Head from "next/head";
import Header from "../components/header/header";
import MainNav from "../components/mainNav/mainNav";
import AsideNav from "../components/asideNav/asideNav";
import Slider from "../components/slider/slider";
import Advantages from "../components/advantages/advantages";
import Calculator from "../components/calculator/calculator";
import WorkTime from "../components/worktime";
import PopularCategories from "../components/popularCategories/popularCategories";
import Posts from "../components/posts";
import TopGoods from "../components/topgoods/topgoods";
import Subscribe from "../components/subscribe";

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
            <div className="content-left with-border with-margin with-padding">
                <WorkTime />
            </div>
            <div className="content-right">
                <Calculator />
            </div>
        </section>

        <section className="content-block">
            <div className="content-left with-border with-margin with-padding">
                <Posts />
            </div>
            <div className="content-right">
                <PopularCategories />
            </div>
        </section>

        <section className="content-block">
            <div className="content-left">
                <Subscribe />
            </div>
            <div className="content-right">
                <TopGoods />
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
  )
}

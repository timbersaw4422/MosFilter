import Head from "next/head";
import Header from "../components/header";
import MainNav from "../components/mainNav";

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


    </div>
  )
}

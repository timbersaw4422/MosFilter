import Head from "next/head";
import Header from "../components/header/header";
import MainNav from "../components/mainNav/mainNav";
import AsideNav from "../components/asideNav/asideNav";
import WhatsApp from "../components/whatsApp";
import Footer from "../components/footer/footer";
import CartMain from "../components/cart/cartMain";
import EmptyCart from "../components/cart/emptyCart";
import CartTop from "../components/cart/cartTop";
import Link from "next/link";
import cookies from 'next-cookies';
import {useState} from "react";


export async function getServerSideProps(ctx) {
  let { goods } = cookies(ctx);
  const promises=[];

  if (!goods) goods = [];
  else {
    for (let good of goods){
      promises.push(fetch(`https://mosfilt.firebaseio.com/goods/${good.id}.json`));
    }
  }

  const responses = await Promise.all(promises);
  const goodsFullInfo = await Promise.all(responses.map(r => r.json()));
  await goodsFullInfo.map((item,index) => goodsFullInfo[index].count = goods[index].count);

  return {
    props: {goods:goodsFullInfo}
  }
}




export default function cartPage({goods}){

  const [cartCount, setCartCount] = useState(goods.length);

  let countSuffix;
  if (cartCount === 1) countSuffix = "товар";
  else if (cartCount >=2 && cartCount <=4) countSuffix = "товара";
  else countSuffix = "товаров";


  return(
    <>
     <div className="content-wrapper">

        <Head>
          <title>Мос - фильтр | Корзина</title>
          <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
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
                <div className="path-cart">
                  <Link href="/"><a className="active">Главная / </a></Link> Корзина
                </div>

                {cartCount
                  ? <>
                      <CartTop cartCount = {cartCount} countSuffix = {countSuffix} setCartCount={setCartCount}/>
                      <CartMain goods = {goods} setCartCount={setCartCount}/>
                    </>
                  : <EmptyCart />
                }


            </div>
        </section>





        <style jsx>{`

          .horizontal-shape{
            background: #F0F0F0;
            width:100%;
            height:1px;
            margin-top:3rem;
          }

          .path-cart{
            margin-top:3.7rem;
            font-size: 12px;
            line-height: 16px;
            color: #424242;
            border-bottom:1px solid #DDDDDD;
            padding-bottom:1.8rem;
          }

          .active{
            color: #4862D2;
            text-decoration:none;
          }

          @media screen and (max-width:1100px){
            .path-cart{
              margin-top:0;
            }
          }


        `}</style>

    </div>

    <Footer />
   </>
  )
}

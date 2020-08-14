import Head from "next/head";
import Header from "../components/header/header";
import MainNav from "../components/mainNav/mainNav";
import AsideNav from "../components/asideNav/asideNav";
import WhatsApp from "../components/whatsApp";
import Footer from "../components/footer/footer";
import CartMain from "../components/cart/cartMain";
import EmptyCart from "../components/cart/emptyCart";
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
  /////надо соединить массив из базы с массивом из куки

  return {
    props: {goods, goodsFullInfo}
  }
}




export default function cartPage({goods, goodsFullInfo}){
  console.log(goods)
  console.log(goodsFullInfo)

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
                <div className="path-cart">
                  <Link href="/"><a className="active">Главная / </a></Link> Корзина
                </div>

                {goods.length
                  ? <>
                      <div className="cart-flex">
                         <p className="cart-flex__info">В корзине {cartCount} {countSuffix}</p>
                         <div className="cart-flex__clear-btn">Очистить корзину</div>
                      </div>
                      <CartMain goodsFullInfo = {goodsFullInfo}/>
                    </>
                  : <EmptyCart />
                }


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

          .cart-flex{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-top:1rem;
          }

          .cart-flex__info{
            height:5rem;
            background: #F5F5F5;
            font-weight: 600;
            font-size: 15px;
            display: flex;
            align-items: center;
            color: #424242;
            padding-left:1.7rem;
            flex-grow:1;
          }

          .cart-flex__clear-btn{
            margin-left:1.5rem;
            width:20rem;
            height:5rem;
            border: 1px solid #4862D2;
            display: flex;
            align-items: center;
            justify-content:center;
            font-weight: 600;
            font-size: 15px;
            color: #424242;
            cursor:pointer;
          }
        `}</style>

    </div>

    <Footer />
   </>
  )
}

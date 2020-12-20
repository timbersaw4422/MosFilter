import NextNprogress from 'nextjs-progressbar';
import 'react-phone-number-input/style.css';
import Preloader from "../components/preloader";
import {Component} from "react";
import Cookies from "js-cookie";
import cookies from 'next-cookies';
import {useEffect} from "react";

import '../normalize.css';
import '../global.css';
import "../media.css";

export async function getServerSideProps(ctx) {
  let { isLoaderShowed } = cookies(ctx);
  return {
    props: {isLoaderShowed}
  }
}

export default function MyApp({ Component, pageProps, isLoaderShowed }) {

  // <--Метрика-->

  // useEffect(()=>{
  //     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
  //    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
  //    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  //
  //    ym(70667698, "init", {
  //         clickmap:true,
  //         trackLinks:true,
  //         accurateTrackBounce:true,
  //         webvisor:true
  //    });
  // } ,[])

  // <--Метрика-->

  return (
    <>
      {
        !isLoaderShowed ? <Preloader /> :null
      }
      <NextNprogress
        color="#4862D2"
        height="3"
      />
      <Component {...pageProps} />
    </>
  )
}

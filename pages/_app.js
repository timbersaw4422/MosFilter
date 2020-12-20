import NextNprogress from 'nextjs-progressbar';
import 'react-phone-number-input/style.css';
import Preloader from "../components/preloader";
import {Component} from "react";
import Cookies from "js-cookie";
import cookies from 'next-cookies';
import {useEffect} from "react";

import { YMInitializer } from 'react-yandex-metrika';
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

  <YMInitializer accounts={[70667698]} options={{webvisor: true}}/>

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

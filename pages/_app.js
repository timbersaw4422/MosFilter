import NextNprogress from 'nextjs-progressbar';
import 'react-phone-number-input/style.css';
import Preloader from "../components/preloader";
import {Component} from "react";
import Cookies from "js-cookie";
import cookies from 'next-cookies';
import Head from "next/head";

import '../normalize.css';
import '../global.css';
import "../media.css";

import Router from "next/router";
import withYM from "next-ym";
// import { YMInitializer } from 'react-yandex-metrika';

export async function getServerSideProps(ctx) {
  let { isLoaderShowed } = cookies(ctx);
  return {
    props: {isLoaderShowed}
  }
}

const MyApp = ({ Component, pageProps, isLoaderShowed }) => {

  return (
    <>
      <Head>
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Компания «Мос - Фильтр» занимается продажей, заменой, установкой и ремонтом картриджей и фильтров для воды в Москве" />
        <meta name="keywords" content="Мос - Фильтр, картриджи для воды, фильтры для воды, Атолл, Гейзер" />
      </Head>

      {
        // <YMInitializer accounts={[70667698]}
        // options={{
        //   clickmap:true,
        //   trackLinks:true,
        //   accurateTrackBounce:true,
        //   webvisor:true
        // }}/>
      }


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

export default withYM("70667698", Router)(MyApp)

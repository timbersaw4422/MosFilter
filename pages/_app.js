import NextNprogress from 'nextjs-progressbar';
import 'react-phone-number-input/style.css';
import Preloader from "../components/preloader";
import {Component} from "react";
import Cookies from "js-cookie";
import cookies from 'next-cookies';

import '../global.css';
import "../media.css";

export async function getServerSideProps(ctx) {
  let { isLoaderShowed } = cookies(ctx);
  return {
    props: {isLoaderShowed}
  }
}

export default function MyApp({ Component, pageProps, isLoaderShowed }) {
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

// export default class MyApp extends Component{
//   state={
//     loader:false
//   }
//
//   componentDidMount(){
//     if (!sessionStorage.getItem("isLoadingShowed")) this.setState({loader:true})
//   }
//
//   render(){
//     return (
//       <>
//         {
//           this.state.loader ? <Preloader /> : null
//         }
//         <NextNprogress
//           color="#4862D2"
//           height="3"
//         />
//         <this.props.Component {...this.props.pageProps} />
//       </>
//     )
//   }
// }

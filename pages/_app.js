import NextNprogress from 'nextjs-progressbar';
import '../global.css';
import 'react-phone-number-input/style.css';

export default function MyApp({ Component, pageProps }) {


  return (
    <>
      <NextNprogress
        color="#4862D2"
        height="3"
      />
      <Component {...pageProps} />
    </>
  )
}

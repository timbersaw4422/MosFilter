import {Component} from "react";
import Cookies from "js-cookie";

class Preloader extends Component{
  constructor(props){
    super(props);

    this.state={
      loading:0,
      scale:0,
      time:2000
    }

    this.loadShape = React.createRef();
  }

  componentDidMount(){
    setTimeout(() => {
      document.querySelector(".preloader").style.opacity="0";
    },2500)
    setTimeout(() => {
      document.querySelector(".preloader").style.zIndex="-1000";
    },2500);
    Cookies.set('isLoaderShowed', "1");
  }

  render(){
    if (this.loadShape.current) this.loadShape.current.style.transform = "scaleX(1)";
    const timeout = setTimeout(() => {
      if (this.state.loading < 100) this.setState(prev => ({...prev, loading:prev.loading+1}));
    }, 20);

    return(
      <>
      <div ref = {this.loadShape} className="preloader">
         <div className="preloader__inner">

           <div className="preloader__flex">
             <div className="preloader__text">
                <h2 className="preloader__title">Мос-фильтр</h2>
                <h3 className="preloader__subtitle">Картриджи и фильтры для воды</h3>
             </div>
             <svg width="78" height="90" viewBox="0 0 78 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.9792 1.22055C35.1776 2.0187 34.7285 3.09178 34.7285 4.20941C34.7285 5.32704 35.1776 6.40012 35.9792 7.19827L60.4792 31.1091C64.5769 35.1267 67.4066 40.208 68.6319 45.7491C69.8572 51.2902 69.4267 57.0582 67.3914 62.3675C65.3562 67.6768 61.8018 72.3042 57.1507 75.6997C52.4997 79.0952 46.9475 81.1161 41.1541 81.5222C35.3606 81.9283 29.5696 80.7024 24.4691 77.9904C19.3686 75.2784 15.1731 71.1942 12.3814 66.2232C9.58966 61.2522 8.31896 55.6035 8.72037 49.9484C9.12179 44.2932 11.1785 38.8695 14.6459 34.3217L20.9792 40.2587C18.0997 44.626 16.9676 49.8747 17.7988 55.0043C18.6301 60.1339 21.3664 64.7856 25.4862 68.0726C29.606 71.3596 34.8213 73.0519 40.1376 72.8271C45.4539 72.6023 50.4995 70.4759 54.3125 66.8535C56.332 64.8957 57.9347 62.5674 59.0283 60.0026C60.122 57.4378 60.6851 54.6872 60.6851 51.9092C60.6851 49.1311 60.122 46.3806 59.0283 43.8158C57.9347 41.251 56.332 38.9227 54.3125 36.9649L42.0625 25.0094C41.6604 24.6169 41.1829 24.3056 40.6575 24.0932C40.132 23.8807 39.5688 23.7714 39 23.7714C38.4313 23.7714 37.8681 23.8807 37.3426 24.0932C36.8171 24.3056 36.3397 24.6169 35.9375 25.0094C35.5354 25.4019 35.2163 25.8679 34.9987 26.3807C34.781 26.8936 34.669 27.4432 34.669 27.9983C34.669 28.5534 34.781 29.103 34.9987 29.6159C35.2163 30.1287 35.5354 30.5947 35.9375 30.9872L48.1875 42.9426C50.4945 45.346 51.7535 48.5307 51.6985 51.8235C51.6435 55.1164 50.2787 58.2593 47.8927 60.588C45.5066 62.9167 42.2862 64.2487 38.9122 64.3024C35.5383 64.3561 32.2751 63.1273 29.8125 60.8758C27.3877 58.4916 26.0269 55.2685 26.0269 51.9092C26.0269 48.5499 27.3877 45.3268 29.8125 42.9426C30.2355 42.5618 30.573 42.0996 30.8038 41.5852C31.0347 41.0708 31.1539 40.5153 31.1539 39.9537C31.1539 39.3921 31.0347 38.8367 30.8038 38.3222C30.573 37.8078 30.2355 37.3457 29.8125 36.9649L17.5625 25.0094C17.1668 24.6153 16.6931 24.3039 16.1702 24.0942C15.6473 23.8845 15.0862 23.7808 14.5209 23.7895C13.3703 23.7926 12.2655 24.2297 11.4375 25.0094C5.97912 30.3309 2.26061 37.1129 0.752425 44.4973C-0.75576 51.8818 0.0141601 59.5369 2.96476 66.4942C5.91536 73.4515 10.9141 79.3984 17.3285 83.5826C23.7429 87.7667 31.2848 90 39 90C46.7153 90 54.2572 87.7667 60.6716 83.5826C67.086 79.3984 72.0846 73.4515 75.0352 66.4942C77.9858 59.5369 78.7558 51.8818 77.2476 44.4973C75.7394 37.1129 72.0209 30.3309 66.5625 25.0094L42.1042 1.22055C41.2864 0.43821 40.1868 0 39.0417 0C37.8965 0 36.797 0.43821 35.9792 1.22055Z" fill="#0F4C81"/>
                <path d="M27.6458 20.3325L28.4791 20.0885L29.2291 19.6818L29.5624 19.4378C29.6699 19.3535 29.7676 19.258 29.8541 19.1532L30.1458 18.8685C30.2432 18.7563 30.3271 18.6335 30.3957 18.5025C30.5576 18.2861 30.6972 18.0545 30.8124 17.8112L31.0624 16.9979C31.0624 16.9979 31.0624 16.7133 31.0624 16.5913C31.0829 16.4565 31.0829 16.3195 31.0624 16.1846C31.0624 15.1061 30.6234 14.0718 29.842 13.3092C29.0607 12.5466 28.0009 12.1182 26.8958 12.1182H26.4791H26.0624C25.7732 12.1558 25.4919 12.2382 25.2291 12.3622L24.4792 12.7281L24.1458 12.9721L23.8125 13.2568L23.5625 13.5821C23.4536 13.6693 23.3678 13.7809 23.3125 13.9074C23.1579 14.1425 23.0187 14.387 22.8959 14.6394C22.7752 14.884 22.691 15.1442 22.6459 15.412C22.6459 15.412 22.6459 15.6967 22.6459 15.8593V16.6726C22.6459 16.6726 22.6459 16.9573 22.6459 17.0793C22.6905 17.3603 22.7746 17.634 22.8959 17.8926C23.0111 18.1358 23.1507 18.3674 23.3125 18.5839C23.3663 18.7228 23.4517 18.848 23.5625 18.9498L23.8125 19.2345L24.1458 19.5192L24.4792 19.7631L25.2291 20.1698L26.0624 20.4138H27.7291L27.6458 20.3325Z" fill="#0F4C81"/>
              </svg>
           </div>

           <div className="preloader__loading">
               <div className="preloader__loading-shape"></div>
           </div>


           <p className="preloader__loading-progress">
             Загрузка {this.state.loading} %
           </p>


         </div>
      </div>


      <style jsx>{`
         .preloader{
           position:fixed;
           top:0;
           left:0;
           right:0;
           bottom:0;
           background:#fff;
           z-index:1000;
           display:flex;
           align-items:center;
           justify-content:center;
           font-family: 'Geometria Medium';
           transition:0.5s;
         }

         .preloader__flex{
           display:flex;
         }

         .preloader__text{
           margin-right:2.2rem;
         }

         .preloader__title{
            font-weight: 500;
            font-size: 64px;
            color: #424242;
            text-transform:uppercase;
            margin:0;
            letter-spacing:5px;
         }

         .preloader__subtitle{
            font-weight: 500;
            font-size: 26px;
            line-height: 33px;
            color: #424242;
            text-transform:uppercase;
            margin:0;
         }

         svg{
           margin-top:2rem;
         }

         .preloader__loading{
           background: linear-gradient(180deg, #F4F4F4 0%, #FFFFFF 48.44%, #FAFAFA 100%), #FFFFFF;
           border-radius: 3px;
           height:1rem;
           margin-top:4rem;
           position:relative;
           overflow:hidden;
         }

         .preloader__loading-shape{
           position:absolute;
           left:0;
           right:0;
           bottom:0;
           top:0;
           border-radius: 3px;
           background: linear-gradient(180deg, #6089F3 0%, #191792 100%);
           transform-origin:left;
           transition:0.1s;
           transform:scaleX(${this.state.loading/100});
           transition-timing-function:cubic-bezier(.2,.84,.93,.15);
         }

         .preloader__loading-progress{
           text-align:center;
           margin-top:1.5rem;
           text-transform:uppercase;
           font-weight: 500;
           font-size: 16px;
           line-height: 20px;
           color: #424242;
         }
      `}</style>
      </>
    )
  }
}

export default Preloader

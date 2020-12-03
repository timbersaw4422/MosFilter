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
             <img src="/img/preloader.png" alt="preloader"/>
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
           padding:1rem;
         }

         .preloader__flex{
           display:flex;
         }

         .preloader__flex img{
           width:100%;
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

         @media screen and (max-width:700px){
            .preloader__title{
              font-size:35px;
              margin-left:3rem;
            }
            .preloader__subtitle{
              font-size:15px;
              margin-left:3rem;
            }
            .preloader__flex{
              flex-direction:column-reverse;
              align-items:center;
            }
            svg{
              margin-bottom:3rem;
            }
         }

         @media screen and (max-width:400px){
            .preloader__title{
              font-size:24px;
              margin-left:3rem;
            }
            .preloader__subtitle{
              font-size:11px;
              margin-left:3.1rem;
            }
         }
      `}</style>
      </>
    )
  }
}

export default Preloader

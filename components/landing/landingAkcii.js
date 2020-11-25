import {useState} from "react";
import LandingForm from  "./landingForm";
import StockSlide from "./stockSlide";
import Arrow from "./arrow";

const LandingAkcii = ({goods}) => {

  const stocks = [
    {id:1, subtitle:"Комплект картриджей", title:"Гейзер «Престиж»", oldPrice:3600, newPrice:2790, img:"/img/landing/geizer-stock1.png", discount:"-15%"},
    {id:2, subtitle:"Комплект картриджей", title:"Гейзер «Био»", oldPrice:2550, newPrice:2200, img:"/img/landing/geizer-stock2.png", discount:"-15%"},
  ];
  const stocksCount = stocks.length;

  const [activeSlide, setActiveSlide] = useState(1);
  const trackTranslate = -(activeSlide - 1)*20;

  const arrowClickHandler = (sign) => {
    if (sign === "+"){
      if (activeSlide < stocksCount) setActiveSlide(prev => prev+1);else setActiveSlide(1);
    }
    else{
      if (activeSlide > 1 ) setActiveSlide(prev => prev-1);else setActiveSlide(stocksCount);
    }
  }

  return(
    <>

      <div className="stock">
        <div className="landing-wrapper">
            <h2>Акции в этом месяце</h2>

            <div className="stock-top">
               <p className="stock__big-num">0{activeSlide}/</p>
               <p className="stock__small-num">0{stocksCount}</p>
               <div className="stock__title-and-description">
                 <p className="stock__title">Акция {stocks[activeSlide-1].title}</p>
                 <p className="stock__description">Успейте принять участие</p>
               </div>

               <div className="slider-nav">
                 <div className="arrow-left" onClick = {() => arrowClickHandler("-")}>
                   <Arrow fill ="#004990" rotate="180deg"/>
                 </div>
                 <div className="arrow-right" onClick = {() => arrowClickHandler("+")}>
                   <Arrow fill ="#fff" />
                 </div>
               </div>

               <LandingForm goods = {goods} css={{position:"absolute", top:"0", right:"0"}}
                 media = {1}
               />
            </div>

            <div className="stock__slider-main">
               <div className="slider__track">
                  {stocks.map(stock =>
                    <StockSlide
                      key={stock.id}
                      subtitle={stock.subtitle}
                      title={stock.title}
                      oldPrice={stock.oldPrice}
                      newPrice={stock.newPrice}
                      img={stock.img}
                      discount={stock.discount}
                    />
                  )}
               </div>
            </div>

        </div>
      </div>


      <style jsx>{`
         .stock{
           position:relative;
           margin-top:-400px;
           margin-bottom:16rem;
         }

         .landing-wrapper{
           display:flex;
           flex-direction:column;

         }

         h2{
           font-weight: bold;
           font-size: 18px;
           color: #FFFFFF;
           margin-bottom:5.8rem;
           order:1;
         }

         .stock-top{
           display:flex;
           position:relative;
           order:2;
         }

         .stock__big-num{
           margin-top:0;
           font-weight: 500;
           font-size: 55px;
           line-height: 67px;
           color: #FFFFFF;
         }

         .stock__small-num{
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: #DDDDDD;
            margin-top:3.7rem;
         }

          .stock__title-and-description{
            margin-left:5rem;
          }

          .stock__title{
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            color: #FFFFFF;
            margin-top:0;
            margin-bottom:1rem;
          }

          .stock__description{
            font-weight: 500;
            font-size: 18px;
            color: #FFFFFF;
            margin-top:0;
          }

          .stock__slider-main{
            margin-top:2rem;
            border:1px solid #b7cce0;
            position:relative;
            overflow:hidden;
            z-index:1;
            order:3;
          }

          .slider__track{
            display:flex;
            width:500%;
            align-items:center;
            transition:0.5s;
            transition-timing-function: ease-in-out;
            transform:translateX(${trackTranslate}%);
          }

          .slider-nav{
             display:Flex;
             position:absolute;
             top:0;
             left:50%;
          }

          .arrow-left, .arrow-right{
            width:6rem;
            height:6rem;
            display:flex;
            align-items:center;
            justify-content:center;
            cursor:pointer;
            transition:0.2s;
          }

          .arrow-left{
            box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.08);
            background:#fff;
          }

          .arrow-right{
            background: #5388BB;
            box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.08);
          }


          @media(hover:hover){
            .arrow-left:hover, .arrow-right:hover{
              transform:scale(1.1);
              z-index:10;
            }
          }

          @media screen and (max-width:1150px){
            .landing-wrapper{
              height:140rem;
            }
            .slider-nav{
              left:auto;
              right:0;
            }
            .stock__slider-main{
              order:2;
            }
            .stock-top{
              order:3;
              margin-top:2rem;
            }
            .stock{
              background:#004990;
            }
            h2{
              margin-bottom:1rem;
            }
            .stock{
              margin-bottom:8rem;
            }
          }
      `}</style>
    </>
  )
}

export default LandingAkcii;

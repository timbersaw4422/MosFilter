import LandingForm from  "./landingForm";

const LandingAkcii = () => {
  return(
    <>

      <div className="stock">
        <div className="landing-wrapper">
            <h2>Акции в этом месяце</h2>

            <div className="stock-top">
               <p className="stock__big-num">01/</p>
               <p className="stock__small-num">05</p>
               <div className="stock__title-and-description">
                 <p className="stock__title">Акция Гейзер «Престиж»</p>
                 <p className="stock__description">Успейте принять участие</p>
               </div>

               <LandingForm css={{position:"absolute", top:"0", right:"0"}}/>
            </div>

            <div className="stock__slider-main"></div>

        </div>
      </div>


      <style jsx>{`
         .stock{
           position:relative;
           margin-top:-400px;
           margin-bottom:16rem;
         }

         h2{
           font-weight: bold;
           font-size: 18px;
           color: #FFFFFF;
           margin-bottom:5.8rem;
         }

         .stock-top{
           display:flex;
           position:relative;
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
            height:57rem;
            margin-top:2rem;
            background:url(/img/landing/stock1.png) center / cover;
          }
      `}</style>
    </>
  )
}

export default LandingAkcii;

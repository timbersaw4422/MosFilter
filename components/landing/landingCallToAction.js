import LandingForm from  "./landingForm";

const LandingCallToAction = ({goods, globalBrand}) => {
  return(
    <>
      <div className="call-to-action">
          <div className="landing-wrapper">
            <div className="call-to-action__main">
               <LandingForm goods = {goods} margin = "0 0 0 auto" css={{}} media={2} globalBrand={globalBrand}/>
               <p className="info-subtitle2"><span>В пределах МКАД выезд мастера на замену осуществляется бесплатно</span></p>
            </div>
            <div className="info">
                <p className="info-caption">Режим работы</p>
                <div className="info-flex">
                  <p className="info-title">Работаем по всей Москве и ближайшему подмосковью</p>
                  <p className="info-subtitle">При замене картриджей бесплатная дезинфекция фильтра в подарок</p>
                </div>
                <p className="info-worktime">Ежедневно с 10:00 до 20:00</p>
            </div>
          </div>
      </div>

      <style jsx>{`
        .call-to-action{
          background:#004990;
          margin-top:18rem;
          margin-bottom:18rem;
        }

        .call-to-action__main{
          background:url(/img/landing/call-to-action.png) center / cover;
          position:relative;
          transform:translateY(-7rem);
        }

        .info-subtitle2{
          position:absolute;
          bottom:-2rem;
          left:0;
          width:100%;
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          padding:2rem ;
          color: #FFFFFF;
          background:#FF652E;
          display:none;
        }

        .info-subtitle2 span{
          display:block;
          padding-left:13px;
          border-left:1px solid #fff;
        }

        .info{
          padding-bottom:14rem;
          margin-top:-4rem;
        }

        .info-caption{
          font-weight: 600;
          font-size: 16px;
          color: #FFFFFF;
          margin-bottom:1.4rem;
        }

        .info-title{
          font-weight: 600;
          font-size: 30px;
          color: #FFFFFF;
          width:45%;
        }

        .info-flex{
          display:flex;
          justify-content:space-between;
          align-items:Center;
        }

        .info-subtitle{
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          padding-left:3.8rem;
          border-left:1px solid #fff;
          width:35%;
          color: #FFFFFF;
        }

        .info-worktime{
          font-weight: 600;
          font-size: 16px;
          color: #FFFFFF;
        }

        @media screen and (max-width:1150px){
          .call-to-action{
            margin-bottom:8rem;
            margin-top:12rem;
          }
          .info{
            padding-bottom:6rem;
          }
        }

        @media screen and (max-width:700px){
          .call-to-action__main{
            height:45rem;
          }
          .info-subtitle{
            display:none;
          }
          .info-title{
            width:100%;
          }
          .info-subtitle2{
            display:block;
          }
        }




        `}</style>
    </>
  )
}

export default LandingCallToAction;

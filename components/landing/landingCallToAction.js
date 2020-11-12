import LandingForm from  "./landingForm";

const LandingCallToAction = ({goods}) => {
  return(
    <>
      <div className="call-to-action">
          <div className="landing-wrapper">
            <div className="call-to-action__main">
               <LandingForm goods = {goods} margin = "0 0 0 auto" />
            </div>
            <div className="info">
                <p className="info-caption">Режим работы</p>
                <div className="info-flex">
                  <p className="info-title">Работаем по всей Москве и ближайшему подмосковью</p>
                  <p className="info-subtitle">В пределах МКАД выезд мастера на замену осуществляется бесплатно</p>
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
          transform:translateY(-7rem)
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
        `}</style>
    </>
  )
}

export default LandingCallToAction;

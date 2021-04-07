import LandingButton from "./landingButton";

const LandingServices = ({setActiveService, setModalOpen, setModalType, setModalPayload, brand}) => {

  const serviceClickHandler = (type) => {
    let service;
    if (type === 1) service = {
        title:"Замены картриджей",
        price:850
    }
    else if (type === 2) service = {
        title:"Установка фильтра",
        price:1150
    }
    else if (type === 3) service = {
        title:"Ремонт фильтра",
        price:1150
    }
    setActiveService(service);
    setModalOpen(true);
    setModalType("SERVICE");
    setModalPayload({
      modalType:15,
      title:service.title,
      price:service.price
    })
  }

  return(
    <>
      <div className="services">
        <h2 className="services__title">Услуги</h2>
        <div className="services__row">
            <figure className="service" onClick = {() => serviceClickHandler(1)}>
              <img src="/img/landing/ratchet.png" alt="" className = "service__img"/>
              <p className="service__subtitle">Услуга</p>
              <h4 className="service__title">Замены картриджей</h4>
              <div className="service__on-stock">
                 <img src="/img/checkMark.png" alt="checkMark" className="on-stock-status"/>
                 <span className="on-stock-title">Мастер свободен</span>
              </div>
              <p className="service__price">850 &nbsp;<i style = {{fontSize:"20px"}}className="fas fa-ruble-sign"></i></p>

              <LandingButton
                  text="Подробнее"
                  css={{maxWidth:"100%", height:"50px", marginBottom:"0rem", background:"#004990",
                  after:"#fff", hoverColor:"#424242", boxShadow:"none", border:"2px solid #004990"}}
                  />

              <div className="service__ticket">Хит продаж</div>
            </figure>

            <figure className="service" onClick = {() => serviceClickHandler(2)}>
              <img src="/img/landing/ratchet.png" alt="" className = "service__img"/>
              <p className="service__subtitle">Услуга</p>
              <h4 className="service__title">Установки фильтра</h4>
              <div className="service__on-stock">
                 <img src="/img/checkMark.png" alt="checkMark" className="on-stock-status"/>
                 <span className="on-stock-title">Мастер свободен</span>
              </div>
              <p className="service__price">1150 &nbsp;<i style = {{fontSize:"20px"}}className="fas fa-ruble-sign"></i></p>
              <LandingButton
                  text="Подробнее"
                  css={{maxWidth:"100%", height:"50px", marginBottom:"0rem", background:"#004990",
                  after:"#fff", hoverColor:"#424242", boxShadow:"none", border:"2px solid #004990"}}
                  />
            </figure>

            <figure className="service" onClick = {() => serviceClickHandler(3)}>
              <img src="/img/landing/ratchet.png" alt="" className = "service__img"/>
              <p className="service__subtitle">Услуга</p>
              <h4 className="service__title">Ремонта фильтра</h4>
              <div className="service__on-stock">
                 <img src="/img/checkMark.png" alt="checkMark" className="on-stock-status"/>
                 <span className="on-stock-title">Мастер свободен</span>
              </div>
              <p className="service__price">1150 &nbsp;<i style = {{fontSize:"20px"}}className="fas fa-ruble-sign"></i></p>
              <LandingButton
                  text="Подробнее"
                  css={{maxWidth:"100%", height:"50px", marginBottom:"0rem", background:"#004990",
                  after:"#fff", hoverColor:"#424242", boxShadow:"none", border:"2px solid #004990"}}
                  />
            </figure>
        </div>

      </div>



      <style jsx>{`
        .services__title{
          font-weight: 600;
          font-size: 30px;
          color: #424242;
          padding-top:5rem;
          margin-top:0;
          border-top:1px solid #E3E3E3;
          margin-bottom:6rem;
        }

        .services__row{
          display:flex;
          align-items:center;
          flex-wrap:wrap;
          width:85%;
        }

        .service{
          margin:0;
          width:30%;
          margin-right:3.3%;
          background: #FFFFFF;
          border: 1px solid #B7CCE0;
          box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.08);
          padding:4.5rem;
          text-align:Center;
          position:relative;
          margin-bottom:4rem;
        }

        .service__img{
          width:100%;
          display:block;
          margin:20px auto 40px auto;
        }

        .service__subtitle{
          font-size: 14px;
          color: #424242;
          margin-top: 2.1rem;
        }

        .service__title{
          font-weight: bold;
          font-size: 16px;
          color: #424242;
          margin-top: 1rem;
          height:50px;
        }

        .on-stock-title{
          font-size: 12px;
          line-height: 16px;
          color: #6B6B6B;
          margin-left:8px;
        }

        .service__price{
          font-weight: bold;
          font-size: 24px;
          color: #4E4E4E;
        }

        .service__ticket{
          position:absolute;
          width:55%;
          height:30px;
          background: #2DCD94;
          border-radius: 0px 0px 5px 5px;
          top:0;
          right:20px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight: 600;
          font-size: 12px;
          color: #FFFFFF;
          text-transform: uppercase;
        }

        @media screen and (max-width:900px){
          .service{
            margin-right:0%;
            width:48%;
          }
          .services__row{
            width:100%;
            justify-content:space-between;
          }
        }

        @media screen and (max-width:600px){
          .service{
            width:100%;
          }
        }

        @media screen and (max-width:500px){
          .services__title{
            padding-top:8rem;
            font-size:24px;
            margin-bottom:4rem;
          }
        }
      `}</style>
    </>
  )
}

export default LandingServices;

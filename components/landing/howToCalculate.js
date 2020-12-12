import LandingButton from "./landingButton";
import {useState} from "react";

const HowToCalculate = ({setModalOpen, setModalType}) => {

  const [fill, setFill] = useState("#fff");
  const [fill2, setFill2] = useState("#fff");

  const btnClickHandler = () => {
    setModalOpen(true);
    setModalType("JUST-NUMBER");
  }

  return(
    <>
      <div className="main">
        <div className="landing-wrapper">
          <h2>Как расчитывается замена?</h2>
          <div className="flex">
             <div className="left">
               <p className="text" style={{marginBottom:"9.5rem"}}>Замена картриджей на любом типе фильтра складывается из двух индивидуальных показателей —
                стоимость самих картриджей и стоимость работы мастера.</p>
                <div className="block" style={{marginBottom:"7.5rem"}}>
                    <p className="text bold">Стоимость картриджей:</p>
                    <p className="text with-point">Полипропиленовый картридж 5мкм: <span className="bold-span">100&nbsp;
                    <i style = {{fontSize:"14px", fontWeight:"700"}}className="fas fa-ruble-sign"></i></span></p>
                    <p className="text with-point">Полипропиленовый картридж 10мкм: <span className="bold-span">100&nbsp;
                    <i style = {{fontSize:"14px", fontWeight:"700"}}className="fas fa-ruble-sign"></i></span></p>
                    <p className="text with-point">Угольный картридж: <span className="bold-span">550&nbsp;
                    <i style = {{fontSize:"14px", fontWeight:"700"}}className="fas fa-ruble-sign"></i></span></p>
                    <p className="text with-point">Мембрана: <span className="bold-span">1500&nbsp;
                    <i style = {{fontSize:"14px", fontWeight:"700"}}className="fas fa-ruble-sign"></i></span></p>
                    <p className="text with-point">Постфильтр: <span className="bold-span">650&nbsp;
                    <i style = {{fontSize:"14px", fontWeight:"700"}}className="fas fa-ruble-sign"></i></span></p>
                    <p className="text with-point">Минерализатор: <span className="bold-span">850&nbsp;
                    <i style = {{fontSize:"14px", fontWeight:"700"}}className="fas fa-ruble-sign"></i> (установлен не всегда)</span></p>
                    <svg width="38" height="70" viewBox="0 0 38 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.0911 70H7.91323L9.31453 64.539C17.4476 31.2214 21.7889 13.5973 22.3384 11.6667C21.2393 12.3838 17.1179 14.3696 9.97397 17.6241L7.08894 13.5697C13.7383 10.4807 19.0137 7.69504 22.9154 5.21277C26.8171 2.67533 29.5647 0.937746 31.1584 0H38L22.0911 70ZM24.1518 61.7258L24.0694 62.1395C24.0694 63.353 24.9761 64.4287 26.7896 65.3664C28.603 66.3042 30.4165 66.8282 32.2299 66.9385L31.9002 70H0L0.329718 66.9385C2.30803 66.9385 4.12148 66.4972 5.77007 65.6147C8.13304 64.2908 9.53435 62.9945 9.97397 61.7258H24.1518Z" fill="#004990" fillOpacity="0.04"/>
                    </svg>

                </div>

                <div className="block">
                    <p className="text bold">Стоимость работы мастера:</p>
                    <p className="text with-point">Выезд и услуга замены: <span className="bold-span">1200&nbsp;
                    <i style = {{fontSize:"14px", fontWeight:"700"}}className="fas fa-ruble-sign"></i></span></p>
                    <svg width="50" height="64" viewBox="0 0 50 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.95801 19.3359L2.49023 17.1387C4.58984 12.1094 7.78809 8.00781 12.085 4.83398C16.3818 1.61133 21.1426 0 26.3672 0C32.666 0 37.915 1.85547 42.1143 5.56641C45.2881 8.34961 46.875 11.9873 46.875 16.4795C46.875 20.0928 46.3135 22.9248 45.1904 24.9756C44.1162 27.0264 43.1885 28.6865 42.4072 29.9561C41.6748 31.1768 40.625 32.4951 39.2578 33.9111C37.8906 35.2783 36.7188 36.4502 35.7422 37.4268C34.8145 38.3545 33.4473 39.5264 31.6406 40.9424C29.8828 42.3096 28.54 43.3594 27.6123 44.0918C25.2197 45.8984 22.3389 47.998 18.9697 50.3906C21.0693 50.3418 23.7793 50.3174 27.0996 50.3174C30.4688 50.3174 34.6924 50.5859 39.7705 51.123C41.2354 50.293 42.4561 48.877 43.4326 46.875C44.458 44.873 45.2393 43.2373 45.7764 41.9678L46.6553 40.0635L49.585 40.5029L41.8945 63.4277C40.6738 63.2812 38.3545 62.9639 34.9365 62.4756C27.3193 61.4014 21.0449 60.8643 16.1133 60.8643C11.1816 60.8643 6.46973 61.4746 1.97754 62.6953L0 59.1064L2.85645 57.3486C9.25293 53.3936 14.6973 49.1699 19.1895 44.6777C27.5391 36.3281 31.7139 28.8086 31.7139 22.1191C31.7139 17.9688 30.7861 14.6729 28.9307 12.2314C27.0752 9.79004 24.6094 8.56934 21.5332 8.56934C18.5059 8.56934 15.6738 9.5459 13.0371 11.499C10.4004 13.4033 8.37402 16.0156 6.95801 19.3359Z" fill="#004990" fillOpacity="0.04"/>
                    </svg>

                </div>
             </div>
             <div className="right">
               <img src="/img/landing/osmos.png" alt=""/>
             </div>
          </div>

          <div className="mobile-warning">
            <svg style={{marginRight:"50px"}}width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C31.0458 0 40 8.95491 40 20C40 31.0451 31.0458 40 20 40C8.95557 40 0 31.0444 0 20C0 8.95557 8.95557 0 20 0ZM20 3C10.6124 3 3 10.6124 3 20C3 29.3876 10.6124 37 20 37C29.3889 37 37 29.3883 37 20C37 10.6117 29.3889 3 20 3ZM20.0102 26.0918C20.8386 26.0918 21.5102 26.7634 21.5102 27.5918C21.5102 28.3512 20.9459 28.9788 20.2137 29.0781L19.9902 29.0918C19.1618 29.0918 18.4902 28.4202 18.4902 27.5918C18.4902 26.8324 19.0545 26.2048 19.7867 26.1055L20.0102 26.0918ZM19.9902 10.9082C20.7496 10.9082 21.3772 11.4725 21.4765 12.2047L21.4902 12.4082V21.2462C21.4902 22.0746 20.8186 22.7462 19.9902 22.7462C19.2308 22.7462 18.6032 22.1819 18.5039 21.4497L18.4902 21.2462V12.4082C18.4902 11.5798 19.1618 10.9082 19.9902 10.9082Z" fill="#FF652E"/>
            </svg>
            <p className="mobile-warning__text">Внимание!</p>
          </div>

          <div className="warning">
            <svg style={{marginRight:"50px"}}width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 0C31.0458 0 40 8.95491 40 20C40 31.0451 31.0458 40 20 40C8.95557 40 0 31.0444 0 20C0 8.95557 8.95557 0 20 0ZM20 3C10.6124 3 3 10.6124 3 20C3 29.3876 10.6124 37 20 37C29.3889 37 37 29.3883 37 20C37 10.6117 29.3889 3 20 3ZM20.0102 26.0918C20.8386 26.0918 21.5102 26.7634 21.5102 27.5918C21.5102 28.3512 20.9459 28.9788 20.2137 29.0781L19.9902 29.0918C19.1618 29.0918 18.4902 28.4202 18.4902 27.5918C18.4902 26.8324 19.0545 26.2048 19.7867 26.1055L20.0102 26.0918ZM19.9902 10.9082C20.7496 10.9082 21.3772 11.4725 21.4765 12.2047L21.4902 12.4082V21.2462C21.4902 22.0746 20.8186 22.7462 19.9902 22.7462C19.2308 22.7462 18.6032 22.1819 18.5039 21.4497L18.4902 21.2462V12.4082C18.4902 11.5798 19.1618 10.9082 19.9902 10.9082Z" fill="#FF652E"/>
          </svg>

            <p className="warning__text">Раз в 6 месяцев меняются 3 основные картриджа (предфильтры), раз в 12 месяцев меняется мембрана.<br/>
            • Менять все картриджи сразу - необязательно!</p>
          </div>

          <div className="btn-group">
                <div className="slide__btn2"
                onClick={btnClickHandler}
                   onMouseEnter={() => setFill2("#FF652E")} onMouseLeave={() => setFill2("#fff")}>
                   <span>Заказать замену онлайн</span>
                   <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M-6.11317e-07 5.08388L10.9071 5.08389L8.01315 8.17439L8.78624 9L13 4.5L8.78625 5.85296e-07L8.01315 0.825614L10.9071 3.91612L-5.09227e-07 3.91612L-6.11317e-07 5.08388Z" fill={fill2}/>
                   </svg>
                </div>

                <a href="tel:+74957446181" className="slide__btn-outer">
                  <div className="slide__btn"
                     onMouseEnter={() => setFill("#004990")} onMouseLeave={() => setFill("#fff")}>
                     <span>Позвонить напрямую мастеру</span>
                     <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M-6.11317e-07 5.08388L10.9071 5.08389L8.01315 8.17439L8.78624 9L13 4.5L8.78625 5.85296e-07L8.01315 0.825614L10.9071 3.91612L-5.09227e-07 3.91612L-6.11317e-07 5.08388Z" fill={fill}/>
                     </svg>
                  </div>
                </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        h2{
          font-family: Montserrat;
          font-style: normal;
          font-weight: 600;
          font-size: 30px;
          line-height: 37px;
          color: #424242;
          margin-bottom: 6rem;
        }

        .flex{
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .text{
          font-weight: 500;
          font-size: 16px;
          color: #424242;
        }

        .bold{
          font-size:18px;
          font-weight:600;
          margin-bottom:3rem;
          line-height: 180%;
        }

        .bold-span{
          font-weight:bold;
        }

        .left{
          width:45%;
          padding-right:6rem;
          border-right:1px solid #E7E7E7;
        }
        .right{
          width:50%;
        }

        .right img{
          width:100%;
        }

        .with-point{
          padding-left:23px;
          position:relative;
          margin-bottom:2rem;
        }

        .with-point:after{
          content:"";
          position:absolute;
          width:8px;
          height:8px;
          border-radius:50%;
          background: radial-gradient(103.33% 90% at 50% 10%, #6089F3 0%, #191792 51.26%, #6089F3 100%), #FFFFFF;
          left:0;
          top:5px;
        }

        .block{
          position:relative;
        }

        .block svg{
          position:absolute;
          top:-25px;
          left:0;
        }

        .warning{
          padding:1.4rem 5rem;
          border: 3px solid #FF652E;
          box-sizing: border-box;
          border-radius: 20px;
          margin-top:9rem;
          display:flex;
          align-items:Center;
          margin-bottom:5rem;
        }

        .warning__text{
          font-weight: 500;
          font-size: 16px;
          line-height: 180%;
          color: #424242;
        }

        .mobile-warning{
          font-style: italic;
          font-weight: bold;
          font-size: 16px;
          color: #424242;
          display:flex;
          align-items:Center;
          margin-top:7rem;
          display:none;
        }

        .mobile-warning__text{
          margin-left:-20px;
        }

        .btn-group{
          display:flex;
        }

        .slide__btn, .slide__btn2{
          width:320px;
          border: 2px solid #004990;
          height:4rem;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight: 600;
          font-size: 12px;
          line-height: 16px;
          color: #fff;
          cursor:pointer;
          position:relative;
          border-radius: 5px;
        }

        .slide__btn2{
          border: 2px solid #FF652E;
          width:275px;
          margin-right:20px;
        }

        .slide__btn span, .slide__btn2 span{
          margin-right:2.6rem;
          position:relative;
          z-index:5;
          transition:0.3s;
        }

        .slide__btn-outer{
          text-decoration:none;
          display:block;
        }

        .slide__btn:after, .slide__btn2:after{
          content:"";
          position:absolute;
          background:#004990;
          top: -1px;right: -1px;bottom: -1px;left:-1px;
          z-index:0;
          opacity:1;
          transition:0.3s;
        }

        .slide__btn svg, .slide__btn2 svg{
          position:relative;
          z-index:5;
          transition:0.2s;
        }

        .slide__btn2:after{
          background:#ff652e;
        }

        @media(hover:hover){
          .slide__btn:hover:after{
            opacity:0;
          }
          .slide__btn2:hover:after{
            opacity:0;
          }
          .slide__btn:hover span{
            color:#004990;
          }
          .slide__btn2:hover span{
            color:#ff652e;
          }
          .slide__btn:hover svg{
            transform:translateX(10px);
          }
          .slide__btn2:hover svg{
            transform:translateX(10px);
          }
        }

        @media screen and (max-width:1000px){
          .flex{
            flex-direction:column;
          }
          .left{
            width:100%;
            border:none;
            padding:0;
          }
          .right{
            width:70%;
            margin-top:5rem;
          }
        }

        @media screen and (max-width:650px){
          .warning svg{
            display:none;
          }
          .warning{
            padding:4px 20px;
          }
          .slide__btn2, .slide__btn{
            width:100%;
          }
          .slide__btn2{
            margin-bottom:20px;
          }

          .btn-group{
            display:block;
          }

          .warning{
            margin-top:4rem;
          }
          .mobile-warning{
            display:flex;
          }

        }

        @media screen and (max-width:550px){
          .right{
            width:100%;
          }
        }

      `}</style>
    </>
  )
}

export default HowToCalculate;

import {useState, useRef} from "react";
import LandingButton from "./landingButton";
import PhoneInput from 'react-phone-number-input';
import {sendMail} from "../../utils/mail";
import Loader from "./loader";

const GoodModal = ({good, startTranslate = 0, modalPayload, service}) => {

  const steps = 3;
  const [translate, setTranslate] = useState(startTranslate);
  const [policy, setPolicy] = useState(true);
  const [loading, setLoading] = useState(false);

  const [phone, setPhone] = useState();
  const inputPhone = useRef();

  const isFormValid = () => {
    let valid = false;
    if (inputPhone.current && inputPhone.current.value.length >= 16 && policy) valid=true;
    return valid
  }

  const submitHandler = () => {
    if (isFormValid()) {
      setLoading(true);
      sendMail(
        {phone, modal:modalPayload.modalType, payload:modalPayload}
      ).then(() => {
        setTranslate(2);
      });
    }
  }

  const sostav = good.forLanding ? good.forLanding.split("+").map(str => <span key={Math.random()}>{"• " + str}<br/></span>) : null;

  return(
    <>
      <div className="good-modal">

        <div className="modal-track">

          <div className="modal-step modal-step1">

            <div className="modal__left">
              <div className="modal__circle">
                <img src={service ? "/img/landing/ratchet.png" : good.img} />
              </div>
            </div>

            <div className="modal__right">
               <p className="good__subtitle">{service ? "Услуга" : good.subtitle}</p>
               <p className="good__title">{service ? modalPayload.title : good.title}</p>
               <div className="good__shape"></div>
               <p className="good__text">
                 <span className="good__text-first">Гарантия:</span>
                 <span className="good__text-second">1 год</span></p>
               <p className="good__text">
                 <span className="good__text-first">{service ? "Выезд" : "Доставка"}</span>
                 <span className="good__text-second">Бесплатно в пределах МКАД</span></p>
               <p className="good__text ololo">
                 <span className="good__text-first">Состав:</span>
                 <span className="good__text-second">{service ? <span>• Отключение фильтра <br />
                                                                      • Санация фильтра <br />
                                                                      • Установка картриджей <br/>
                                                                      • Подключение фильтра
                                                                      </span>
                                                                : <span>{sostav}
                                                                 </span>}</span></p>
               <p className="good__text">
                 <span className="good__text-first">Стоимость:</span>
                 <span className="good__text-second">{service ? modalPayload.price : good.price} &nbsp;<i style = {{fontSize:"13px"}}className="fas fa-ruble-sign"></i></span></p>
               <div className="good__shape"></div>

               <div className="button-group">
                   <LandingButton
                       adaptive850={true}
                       text="Заказать в один клик"
                       css={{maxWidth:"47%", height:"50px", marginBottom:"0rem", background:"#004990",
                       after:"#fff", hoverColor:"#424242", boxShadow:"none", border:"2px solid #004990"}}
                       clickHandler={() => setTranslate(1)}
                       />

                   <a className="phone-link" href="tel:+74957446181">
                   <LandingButton
                       phonelink={true}
                       adaptive850={true}
                       text="Заказать по телефону"
                       css={{maxWidth:"100%", height:"50px", marginBottom:"0rem", background:"#fff", color:"#004990",
                       border:"2px solid #004990", after:"#fff", hoverColor:"#424242"}}
                       />
                    </a>

               </div>
            </div>
          </div>

          <div className="modal-step modal-step2">
             <h3 className="order-title">Оставить заявку</h3>
             <p className="order-text">Укажите ваш контактный номер телефона и <br/> мы свяжемся с вами в течение 5 минут</p>

             <PhoneInput ref = {inputPhone}
               placeholder="Enter phone number"
               value={phone}
               onChange={setPhone}
               maxLength="16"
               international
               defaultCountry="RU"
               onChange = {
                 () => {
                   if (inputPhone.current.value.length <= 2 ) inputPhone.current.value = "+7";
                   setPhone(inputPhone.current.value);
                 }
               }
               />

             {
               loading ? <Loader color = "#004990" margin="7px auto"/>
                       : <div style={{opacity:isFormValid() ? "1" : "0.5"}} onClick = {submitHandler}>
                           <LandingButton
                               text="Отправить"
                               css={{maxWidth:"33rem", height:"60px", marginBottom:"3rem", background:"#004990",
                               after:"#fff", hoverColor:"#424242", boxShadow:"none", border:"2px solid #004990", margin:"0 auto"}}
                               />
                          </div>
             }


              <div className="policy-group">
                  <div className="policy-checkbox" onClick={() => setPolicy(prev => !prev)}>
                    {
                      policy && <svg className="policy-checkbox__inner" width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.23882 7.05748L1.41653 4.223L0 5.63473L4.23387 9.88625L12.7359 1.41779L11.3243 0L4.23882 7.05748Z" fill="#004990"/>
                      </svg>
                    }
                  </div>
                  <p className="policy">Даю свою разрешение на  обработку персональных <br/>данных согласно <span>политике конфиденциальности</span></p>
              </div>
          </div>

          <div className="modal-step modal-step3">
            <img src="/img/landing/bell.png" alt="Заявка отправлена"/>
            <p className="success">Спасибо! <br/>
              Ваша заявка отправлена<br/>
              Мы свяжемся с вами через 5 минут</p>
          </div>



        </div>

      </div>

      <style jsx>{`
        .phone-link{
          display:block;
          text-decoration:none;
          width:47%;
        }

        .good-modal{
          width:100%;
          overflow:hidden;
        }

        .modal__circle{
          width:200px;
          height:200px;
          border-radius:50%;
          background:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .ololo{
          height:14rem;
        }

        .modal-track{
          width:300%;
          height:${service ? "60rem" : "60rem"};
          height:${translate === 1 || translate===2 ? "48rem" : ""};
          transform:translateX(${-translate*33.33}%);
          transition:0.5s;
          display:flex;
          align-items:center;
        }

        .modal-step{
          width:33.33%;
        }

        .modal__left{
          width:30%;
          display:flex;
          align-items:Center;
          justify-content:center;
          background: #C9DEF3;
          height:100%;
          position:relative;
          overflow:hidden;
        }

        .modal__left img {
          width:70%;
          z-index:2;
        }

        .modal__right{
          width:80%;
          height:100%;
          padding:4rem 8rem 4rem 4rem;
        }

        .modal-step1{
          display:flex;
          align-items:Center;
          height:100%;
        }

        .good__subtitle{
          font-weight: 600;
          font-size: 14px;
          color: #606060;
          margin-bottom:0.5rem;
          margin-top:0;
        }

        .good__title{
          font-weight: bold;
          font-size: 24px;
          color: #424242;
          margin-top:0.5rem;
        }

        .good__shape{
          height:1px;
          width:262px;
          background: #E3E3E3;
          margin-bottom: 3.8rem;
          margin-top:3.8rem;
        }

        .good__text{
          font-size: 14px;
          letter-spacing: 0.045em;
          color: #424242;
          display:flex;
        }

        .good__text-first{
          font-weight: 600;
          font-size: 14px;
          color: #004990;
          width:120px;
          padding-top:3px;
        }

        .good__text-second{
          line-height:25px;
        }

        .button-group{
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .input-phone{
          outline:none;
          background: #FFFFFF;
          border: 1px solid #B7CCE0;
          height:6rem;
          width:100%;
          max-width:330px;
          padding:0 27px;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          color: #424242;
          margin:3.5rem auto 2rem auto;
          display:block;
        }

        .order-title{
          font-weight: bold;
          font-size: 24px;
          color: #424242;
          margin:2.8rem 0 2.7rem 0;
          text-align:center;
        }

        .order-text{
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          text-align: center;
          color: #606060;
        }

        .policy-group{
          display:flex;
          align-items:center;
          justify-content:center;
          margin:3rem auto;
        }

        .policy-group input{
          cursor:pointer;
          margin-right:2rem;
        }

        .policy-checkbox{
          height:20px;
          width:20px;
          cursor:pointer;
          border: 2px solid #004990;
          border-radius: 2px;
          margin-right:20px;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .modal-step3{
          text-align:center;
          padding:4rem;
          display:flex;
          align-items:center;
          flex-direction:column;
          justify-content:center;
        }

        .success{
          font-weight: 500;
          font-size: 14px;
          line-height: 150%;
          color: #424242;
          margin-top:3rem;
        }

        .modal-step2{
          padding:20px;
        }

        @media screen and (max-width:850px){
          .modal__right{
            width:60%;
          }
          .modal__left{
            width:40%;
          }
          .button-group{
            flex-direction:column;
            height:12rem;
          }
          .modal-track{
            height:${service ? "66rem" : "66rem"};
            height:${translate === 1 || translate===2 ? "48rem" : ""};
          }
          .phone-link{
            width:100%;
          }
        }

        @media screen and (max-width:750px){
          .modal-step1{
            flex-direction:column;
          }
          .modal__left, .modal__right{
            width:100%;
          }
          .modal__left{
            height:30rem;
          }
          .modal-track{
            height:${service ? "83rem" : "80rem"};
            height:${translate === 1 || translate===2 ? "48rem" : ""};
          }
          .modal__right{
            padding:1rem;
          }
          .modal__circle{
            width:150px;
            height:150px;
          }
        }
        `}</style>
    </>
  )
}

export default GoodModal;

import Modal from "./modal";
import {useState, useRef} from "react";
import {sendMail} from "../../utils/mail";
import PhoneInput from 'react-phone-number-input';
import { useAlert } from 'react-alert';
import {clearCookie} from "../../utils/utils";
import {isEmail} from "../../utils/isEmail";

const ModalWrapper = ({modalOpen, title, modalType, height, subtitle, subtitle2, data, img, setCartCount, setModalOpen}) => {

  let payload;

  switch (modalType){
    case 2:{
      payload=subtitle;
      break;
    }
    case 3:{
      payload=data;
      break;
    }
    case 4:{
      payload=data;
      break;
    }
    case 5:{
      payload=data;
      break;
    }
    case 7:{
      payload=title;
      break;
    }
    default:break;
  }

  const [checked, setChecked] = useState(true);

  const checkboxHandler = () => {
    if (checked) setChecked(false); else setChecked(true);
  }

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const inputName = useRef(null);
  const inputEmail = useRef(null);
  const inputPhone = useRef(null);
  const sendBtn = useRef(null);

  const [isSuccess, setSuccess] = useState(false);
  const message = <div>
                    <p style = {{textAlign:"center", color:"#424242", fontWeight:"bold", fontSize:"18px"}}>Спасибо!</p>
                    <p style = {{textAlign:"center", color:"#424242", fontSize:"18px"}}>Ваши данные успешно<br/>отправленны!</p>
                  </div>;

  const alert = useAlert();

  const sendHandler = e => {
    e.stopPropagation();
    if (name.length <2 || inputPhone.current.value.length < 16 || ( modalType===10 && !isEmail(inputEmail.current.value))) {
      alert.show('Корректно заполните все поля');
      if (!isEmail(inputEmail.current.value) && inputEmail) inputEmail.current.style.border="1px solid tomato";
      if (inputName.current.value.length < 2) inputName.current.style.border="1px solid tomato";
      if (inputPhone.current.value.length < 16) inputPhone.current.parentNode.style.border = "1px solid tomato";
    }
    else {
      sendBtn.current.style.opacity = "0.5";
      sendBtn.current.style.pointerEvents = "none";
      sendMail(
        {name, phone, email:email || "", modal:modalType, payload}
      ).then(data => {
        if(data.status === 0) message = <p style = {{textAlign:"center", color:"#424242", fontSize:"18px"}}>Что-то пошло не так.<br/>Попробуйте позже.</p>
        setSuccess(true);
        if(data.status === 1 && modalType ===5 ) {
          clearCookie();
          setCartCount(0);
          document.querySelector(".cart-icon__count").style.opacity = "0";
          document.querySelector(".cart-icon").style.background = "#fff";
          document.querySelector(".cart-icon svg path").attributes.stroke.nodeValue = "#4862D2";
        }
        setTimeout(() => setModalOpen(false), 2000);
      })
    }
  }


  return(
    <>

    <div className="modal-cross" onClick = {() => modalOpen(false)}>
        <svg width="25" height="25" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.82705 0.63L15.167 11.97L26.4604 0.676667C26.6583 0.466007 26.8967 0.297487 27.1613 0.181212C27.426 0.064936 27.7113 0.00330014 28.0004 0C28.6192 0 29.2127 0.245833 29.6503 0.683417C30.0879 1.121 30.3337 1.71449 30.3337 2.33333C30.3391 2.6194 30.2861 2.90357 30.1777 3.16839C30.0694 3.43321 29.9081 3.6731 29.7037 3.87333L18.2937 15.1667L29.7037 26.5767C30.0883 26.9529 30.3138 27.4624 30.3337 28C30.3337 28.6188 30.0879 29.2123 29.6503 29.6499C29.2127 30.0875 28.6192 30.3333 28.0004 30.3333C27.703 30.3457 27.4063 30.296 27.1292 30.1876C26.852 30.0791 26.6004 29.9142 26.3904 29.7033L15.167 18.3633L3.85038 29.68C3.65323 29.8836 3.4177 30.0462 3.15738 30.1583C2.89707 30.2705 2.61713 30.33 2.33371 30.3333C1.71487 30.3333 1.12138 30.0875 0.683797 29.6499C0.246212 29.2123 0.000379647 28.6188 0.000379647 28C-0.00506051 27.7139 0.0480159 27.4298 0.156351 27.1649C0.264687 26.9001 0.425996 26.6602 0.63038 26.46L12.0404 15.1667L0.63038 3.75667C0.245811 3.38044 0.0203054 2.87096 0.000379647 2.33333C0.000379647 1.71449 0.246212 1.121 0.683797 0.683417C1.12138 0.245833 1.71487 0 2.33371 0C2.89371 0.007 3.43038 0.233333 3.82705 0.63Z" fill="#ffffff"/>
        </svg>
    </div>

    {modalType === 6 ?
          <Modal modalOpen = {modalOpen} height={height} setModalOpen={setModalOpen}>
              <img src={img} className ="modal-6" alt=""/>
          </Modal>
        :

    <Modal modalOpen = {modalOpen} height={height} setModalOpen={setModalOpen}>
      <form className="contacts-form" style= {{marginTop:0}}>


          {!isSuccess
              ? <div className="form-inner">
                     <h3 className="contacts-form__title">{title}</h3>
                     {subtitle ? <h3 className="contacts-form__title">{subtitle}</h3> : null}
                     <div className="contacts-form__shape"></div>
                     <p className="contact-form__subtitle">
                     {subtitle2 || "Заполните и отправьте форму, наш специалист свяжется с вами в течение 10 минут, и ответит на все ваши вопросы."} </p>
                     <p className="input-label">Ваше имя</p>
                     <input
                        ref={inputName}
                        type="text"
                        className="contact-form__input contact-form__name"
                        style={{marginBottom:"2rem"}}
                        onChange= {e => {
                          setName(e.target.value);
                          if (inputName.current.value.length >= 2) inputName.current.style.border="1px solid green";
                          else inputName.current.style.border = "1px solid #DFDEDE";
                        }}
                        value = {name}
                        minLength="2"
                        required
                     />

                     {modalType===10
                       ?  <div>
                             <p className="input-label">Ваш email</p>
                             <input
                                ref={inputEmail}
                                type="email"
                                className="contact-form__input contact-form__email"
                                style={{marginBottom:"2rem"}}
                                onChange= {e => {
                                  setEmail(e.target.value);
                                  if (isEmail(inputEmail.current.value)) inputEmail.current.style.border="1px solid green";
                                  else inputEmail.current.style.border = "1px solid #DFDEDE";
                                }}
                                value = {email}
                                minLength="8"
                                required
                             />
                           </div>
                        : null
                     }



                     <p className="input-label">Ваш нормер телефона</p>
                     <PhoneInput
                          ref = {inputPhone}
                          value={phone}
                          onChange={setPhone}
                          maxLength="16"
                          international
                          defaultCountry="RU"
                          onChange = {
                            () => {
                              if (inputPhone.current.value.length <= 2 ) inputPhone.current.value = "+7";
                              if (inputPhone.current.value.length === 16) inputPhone.current.parentNode.style.border = "1px solid green";
                              else inputPhone.current.parentNode.style.border = "1px solid #DFDEDE";
                              setPhone(inputPhone.current.value);
                            }
                          }
                     />

                     <div className="offer-btn" ref = {sendBtn} onClick = {sendHandler}>
                        <span>Отправить заявку</span>
                     </div>
                     <div className="privacy-policy">
                       <input type="checkbox" className="privacy-policy__checkbox" checked={checked} onChange= {checkboxHandler}/>
                       <p className="privacy-policy__text">Даю свою разрешение на  обработку персональных данных согласно
                            <span> политике конфиденциальности</span></p>
                     </div>
                  </div>
            :
                  message
          }
      </form>
      </Modal>

      }


      <style jsx>{`
        .contacts-form{
          padding:2rem 6rem 4rem 6rem;
          position:relative;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .input-label{
          margin-top:0;
          margin-bottom:0.5rem;
          color:#424242;
          font-size:12px;
        }

        .form-inner{
          position:relative;
          z-index:100;
        }

        .modal-cross{
          position:fixed;
          top:35px;
          right:35px;
          cursor:pointer;
          opacity:0.9;
          z-index:106;
        }

        .contacts-form__title{
          font-weight: bold;
          font-size: 18px;
          line-height: 25px;
          color: #424242;
          margin-bottom:2rem;
          position:relative;
          text-align:center;
        }

        .contacts-form__shape{
          height:1px;
          width:100%;
          background:#f1f1f1;
          transform:scaleX(2);
        }

        .contact-form__subtitle{
          margin-top:3rem;
          font-size: 14px;
          line-height: 19px;
          color: #424242;
          margin-bottom:4rem;
        }

        .contact-form__input{
          background: #FFFFFF;
          border: 1px solid #DFDEDE;
          border-radius: 1rem;
          width:100%;
          font-size: 14px;
          line-height: 19px;
          color: #919191;
          height:4.7rem;
          outline:none;
          padding: 0 2.3rem;
        }

        ::placeholder {
            color: #919191;
            font-size: 14px;
        }

        .privacy-policy__checkbox{
          width:4rem;
          height:4rem;
          background: #FFFFFF;
          border: 2px solid #C4C4C4;
          border-radius: 3px;
          cursor:pointer;
          margin-right:1.4rem;
        }

        .privacy-policy__text{
          font-weight: normal;
          font-size: 10px;
          line-height: 14px;
          color: #000000;
          text-align:left;
        }

        .privacy-policy__text span{
          cursor:pointer;
          color: #4862D2;
        }

        .privacy-policy{
          display:flex;
          align-items:center;
        }

        .contact-form__content{
          position:relative;
          z-index:10;
        }

        .offer-btn{
           width:100%;
           height:4.5rem;
           display:flex;
           align-items:center;
           justify-content:center;
           font-weight: 600;
           transition:0.3s;
           position:relative;
           cursor:pointer;
           margin-bottom:2rem;
        }

        .offer-btn:before, .offer-btn:after{
          content:"";
          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          z-index:0;
          border-radius: 1rem;
          box-shadow: 0px 4px 10px rgba(45, 82, 214, 0.41);
          transition:0.3s;
        }

        .offer-btn:after{
          opacity:1;
          background: linear-gradient(180deg, #6089F3 0%, #191792 100%);
        }

        .offer-btn:before{
          opacity:0;
          background: linear-gradient(180deg, #191792 0%, #6089F3 100%);
          border: 2px solid #2B54BE;
        }

        .offer-btn span{
          position:relative;
          z-index:1;
          font-weight: 600;
          font-size: 14px;
          color: #FFFFFF;
        }

        .modal-6{
          display:block;
          margin:0 auto;
        }

        .offer-btn:active :before{
          background: linear-gradient(180deg, #191792 -32.22%, #6089F3 100%);
          box-shadow:none;
        }

        .with-margin{
          margin-bottom:4rem;
        }

        @media (hover:hover){
          .offer-btn:hover:after{
            opacity:0;
          }
          .offer-btn:hover:before{
            opacity:1;
          }
        }

        @media screen and (max-width:700px){
          .modal-cross{
            top:5px;
            right:5px;
          }
        }
        @media screen and (max-width:500px){
          .modal-cross{
            top:5px;
            right:5px;
          }
        }


      `}</style>
    </>
  )
}

export default ModalWrapper;

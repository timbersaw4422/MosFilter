import YandexMap from "../yandexMap";
import {useState, useRef} from "react";
import {sendMail} from "../../utils/mail";
import PhoneInput from 'react-phone-number-input';

const Contacts = () => {

  const [checked, setChecked] = useState(true);

  const checkboxHandler = () => {
    if (checked) setChecked(false); else setChecked(true);
  }

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const inputName = useRef(null);
  const inputPhone = useRef(null);
  const sendBtn = useRef(null);

  const [isSuccess, setSuccess] = useState(false);

  const message = <div>
                    <p style = {{textAlign:"center", color:"#424242", fontWeight:"bold", fontSize:"18px"}}>Спасибо!</p>
                    <p style = {{textAlign:"center", color:"#424242", fontSize:"18px"}}>Ваши данные успешно<br/>отправленны!</p>
                  </div>;

  const sendHandler = e => {
                    e.stopPropagation();
                    if (name.length <1 || inputPhone.current.value.length < 16) {
                      console.log('Корректно заполните все поля');
                      if (inputName.current.value.length < 2) inputName.current.style.border="1px solid tomato";
                      if (inputPhone.current.value.length < 16) inputPhone.current.parentNode.style.border = "1px solid tomato";
                    }
                    else {
                      sendBtn.current.style.opacity = "0.5";
                      sendBtn.current.style.pointerEvents = "none";
                      sendMail({name,phone,modal:1}).then(data => {
                        if(data.status === 0) message = <p style = {{textAlign:"center", color:"#424242", fontSize:"18px"}}>Что-то пошло не так.<br/>Попробуйте позже.</p>
                        setSuccess(true);
                      })
                    }
  }


  return(
    <div className="contacts">
      <div className="contacts-flex">

          <div className="contacts-flex__left">
            <h4 className="contacts__title">Связаться нами</h4>
            <p className="contacts__text with-margin contacts__subtitle">Обратиться за услугами вы можете <br />любым удобным вам способом.</p>

            <div className="with-shape-block">
                <p className="contacts__text" style={{marginTop:0}}><strong>Позвонить по телефону:</strong></p>
                <p className="contacts__text bold" style={{marginBottom:0}}><a href="tel:+74957446181" className="header__phone-title">+7 (495) 744 - 61 - 81</a></p>
            </div>

            <div className="with-shape-block">
                <p className="contacts__text" style={{marginTop:0}}><strong>Написать в месседжер:</strong></p>
                <p className="contacts__p" onClick = {() => window.open("https://vk.com/away.php?to=https%3A%2F%2Ftlgg.ru%2F%40mos_filter&el=snippet", "_blank")}>
                  <img src="/img/contacts/telegram.png" alt="telegram"/>
                  <span>Telegram</span>
                </p>
                <p className="contacts__p" onClick = {() => window.open("https://wa.me/79325306046", "_blank")}>
                  <img src="/img/contacts/whatsapp.png" alt="whatsapp"/>
                  <span>WhatsApp</span>
                </p>
                <p className="contacts__p" onClick = {() => window.open("https://viber.click/79254950004", "_blank")}>
                  <img src="/img/contacts/viber.png" alt="viber"/>
                  <span>Viber</span>
                </p>
                <p className="contacts__p" onClick = {() => window.open("https://www.instagram.com/mos_filter/", "_blank")}>
                  <img src="/img/contacts/instagram.png" alt="instagram"/>
                  <span>Instagram</span>
                </p>
            </div>

            <div className="with-shape-block">
                <p className="contacts__text" style={{marginTop:0}}><strong>Написать на почту:</strong></p>
                <p className="contacts__text bold" style={{marginBottom:0}}>info@mos-filter.ru</p>
            </div>

            <div className="with-shape-block">
                <p className="contacts__text" style={{marginTop:0}}><strong>Мы находимся по адресу:</strong></p>
                <p className="contacts__text bold" style={{marginBottom:0}}>Россия, Москва, ул. Шарикоподшипниковская,<br/> дом 38, стр 1</p>
            </div>

          </div>

          <div className="contacts-flex__right">
             <form className="contacts-form">
             {!isSuccess ?
               <div className="contact-form__content">
                      <h3 className="contacts-form__title">Получите консультацию специалистов Мос — Фильтр</h3>
                      <div className="contacts-form__shape"></div>
                      <p className="contact-form__subtitle">Заполните и отправьте форму, наш специалист свяжется с
                      вами в течение 10 минут, и ответит на все ваши вопросы. </p>
                      <p className="input-label">Ваше имя</p>
                      <input
                         ref={inputName}
                         type="text"
                         className="contact-form__input contact-form__name"
                         style={{marginBottom:"2rem"}}
                         onChange= {e => {
                           setName(e.target.value);
                           if (inputName.current.value.length < 2) inputName.current.style.border="1px solid tomato";
                           else inputName.current.style.border="1px solid green";
                         }}
                         value = {name}
                      />
                      <p className="input-label">Ваш номер телефона</p>
                      <PhoneInput
                           ref = {inputPhone}
                           value={phone}
                           onChange={setPhone}
                           maxLength="16"
                           international
                           defaultCountry="RU"
                           style={{marginBottom:"6rem"}}
                           onChange = {
                             () => {
                               if (inputPhone.current.value.length <= 2 ) inputPhone.current.value = "+7";
                               if (inputPhone.current.value.length < 16) inputPhone.current.parentNode.style.border = "1px solid tomato";
                               else inputPhone.current.parentNode.style.border = "1px solid green";
                               setPhone(inputPhone.current.value);
                             }
                           }/>
                      <div className="submit-btn" ref = {sendBtn} onClick = {sendHandler}>
                         <span>Написать</span>
                      </div>
                      <div className="privacy-policy">
                        <input type="checkbox" className="privacy-policy__checkbox" checked={checked} onChange= {checkboxHandler} />
                        <p className="privacy-policy__text">Даю свою разрешение на  обработку персональных данных согласно
                             <span> политике конфиденциальности</span></p>
                      </div>
                </div>
                : message
              }
                <div className="contact-form__bg">
                    <svg width="361" height="451" viewBox="0 0 361 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M215.83 8.03929C211.022 12.7743 208.328 19.1404 208.328 25.7707C208.328 32.4011 211.022 38.7672 215.83 43.5022L362.8 185.354C387.381 209.188 404.356 239.333 411.706 272.206C419.057 305.078 416.474 339.297 404.265 370.794C392.056 402.292 370.734 429.744 342.833 449.888C314.933 470.032 281.627 482.021 246.873 484.43C212.12 486.839 177.381 479.567 146.784 463.478C116.188 447.388 91.02 423.159 74.273 393.668C57.526 364.178 49.9034 330.667 52.3114 297.118C54.7194 263.569 67.0569 231.392 87.857 204.412L125.849 239.634C108.576 265.543 101.785 296.681 106.771 327.112C111.757 357.544 128.172 385.14 152.886 404.64C177.6 424.14 208.884 434.18 240.776 432.846C272.667 431.512 302.934 418.898 325.808 397.408C337.922 385.793 347.536 371.98 354.097 356.764C360.657 341.549 364.035 325.231 364.035 308.75C364.035 292.27 360.657 275.952 354.097 260.736C347.536 245.52 337.922 231.708 325.808 220.093L252.323 149.167C249.91 146.839 247.046 144.992 243.894 143.731C240.742 142.471 237.364 141.823 233.952 141.823C230.54 141.823 227.161 142.471 224.009 143.731C220.857 144.992 217.993 146.839 215.581 149.167C213.168 151.496 211.254 154.26 209.949 157.302C208.643 160.345 207.971 163.606 207.971 166.899C207.971 170.192 208.643 173.452 209.949 176.495C211.254 179.537 213.168 182.302 215.581 184.63L289.065 255.556C302.905 269.814 310.457 288.707 310.127 308.242C309.797 327.777 301.61 346.422 287.297 360.238C272.983 374.053 253.665 381.954 233.425 382.273C213.185 382.592 193.611 375.302 178.838 361.945C164.292 347.8 156.129 328.679 156.129 308.75C156.129 288.821 164.292 269.7 178.838 255.556C181.375 253.297 183.4 250.555 184.785 247.503C186.17 244.452 186.885 241.156 186.885 237.824C186.885 234.493 186.17 231.197 184.785 228.146C183.4 225.094 181.375 222.352 178.838 220.093L105.353 149.167C102.98 146.829 100.138 144.982 97.0012 143.738C93.8644 142.493 90.4982 141.878 87.1072 141.93C80.2052 141.948 73.5777 144.542 68.6109 149.167C35.8673 180.737 13.5609 220.971 4.51362 264.779C-4.53362 308.588 0.0849429 354.002 17.7849 395.276C35.4848 436.551 65.4709 471.831 103.949 496.653C142.428 521.475 187.67 534.725 233.952 534.725C280.234 534.725 325.476 521.475 363.954 496.653C402.433 471.831 432.418 436.551 450.118 395.276C467.818 354.002 472.437 308.588 463.39 264.779C454.342 220.971 432.036 180.737 399.292 149.167L252.573 8.03929C247.667 3.39803 241.071 0.79834 234.202 0.79834C227.332 0.79834 220.736 3.39803 215.83 8.03929Z" fill="#0F4C81"/>
                      <path d="M165.841 121.424L170.84 119.976L175.339 117.564L177.338 116.116C177.983 115.616 178.569 115.049 179.088 114.427L180.838 112.739C181.422 112.073 181.926 111.345 182.337 110.567C183.308 109.283 184.145 107.91 184.836 106.466L186.336 101.641C186.336 101.641 186.336 99.9528 186.336 99.229C186.46 98.4293 186.46 97.6163 186.336 96.8166C186.336 90.4184 183.703 84.2822 179.016 79.758C174.328 75.2338 167.971 72.6921 161.342 72.6921H158.842H156.343C154.608 72.9155 152.92 73.4042 151.344 74.1396L146.845 76.3108L144.846 77.7583L142.846 79.447L141.346 81.3769C140.693 81.8943 140.178 82.5564 139.847 83.3069C138.919 84.7017 138.084 86.1521 137.347 87.6493C136.623 89.1003 136.119 90.6439 135.848 92.2329C135.848 92.2329 135.848 93.9216 135.848 94.8866V99.7115C135.848 99.7115 135.848 101.4 135.848 102.124C136.115 103.791 136.62 105.415 137.347 106.949C138.038 108.392 138.876 109.766 139.847 111.05C140.169 111.874 140.682 112.617 141.346 113.221L142.846 114.91L144.846 116.599L146.845 118.046L151.344 120.459L156.343 121.906H166.341L165.841 121.424Z" fill="#0F4C81" />
                    </svg>
                </div>
             </form>
          </div>

      </div>

       <YandexMap />



      <style>{`
        .input-label{
          margin-top:0;
          margin-bottom:0.5rem;
          color:#424242;
          font-size:12px;
        }

        .contacts-flex{
          display:flex;
          justify-content:space-between;
          flex-wrap:wrap;
        }

        .contacts-flex__left{
          width:50%;
        }

        .contacts-flex__right{
          width:43%;
        }

        .contacts__title{
          font-weight: 600;
          font-size: 20px;
          line-height: 27px;
          color: #424242;
          margin-top:8rem;
        }

        .contacts__text, .header__phone-title{
          font-size: 16px;
          line-height: 170%;
          color: #676767;
          text-decoration:none;
        }

        .header__phone-title{
          cursor:pointer;
        }

        .with-margin{
          margin-bottom:5rem;
        }

        .bold{
          font-weight: bold;
          font-size: 14px;
          line-height: 170%;
          color: #1D1D1D;
        }

        .with-shape-block{
          position:relative;
          padding-left:3rem;
          margin-bottom:5rem;
          border-left:2px solid #4862D2;
        }

        .contacts_p{
          font-size: 12px;
          color: #1D1D1D;
        }

        .contacts__p span{
          margin-left:2rem;
        }

        .contacts__p{
          display:flex;
          align-items:center;
          margin-bottom:2.5rem;
        }

        .contacts-form{
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%), #FFFFFF;
          box-shadow: 4px 4px 10px rgba(45, 82, 214, 0.1);
          border-radius: 30px;
          padding:4rem 6rem 7rem 6rem;
          margin-top:12rem;
          text-align: center;
          position:relative;
          overflow:hidden;
          height:67rem;
          display:flex;
          align-items:center;
          justify-content:center;
        }

        .contacts-form__title{
          font-weight: bold;
          font-size: 18px;
          line-height: 25px;
          color: #424242;
          margin-bottom:4rem;
          position:relative;
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
          margin-bottom:5rem;
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

        .contact-form__bg{
          position:absolute;
          bottom:0;
          right:0;
          opacity:0.05;
          z-index:1;
        }

        .contact-form__content{
          position:relative;
          z-index:10;
        }


        .submit-btn{
           width:100%;
           height:4.5rem;
           display:flex;
           align-items:center;
           justify-content:center;
           font-weight: 600;
           transition:0.3s;
           position:relative;
           cursor:pointer;
           margin-bottom:3.6rem;
        }

        .submit-btn:before, .submit-btn:after{
          content:open-quote;
          position:absolute;
          color:transparent;
          top:0;
          left:0;
          right:0;
          bottom:0;
          z-index:0;
          border-radius: 1rem;
          box-shadow: 0px 4px 10px rgba(45, 82, 214, 0.41);
          transition:0.3s;
        }

        .submit-btn:after{
          opacity:1;
          background: linear-gradient(180deg, #6089F3 0%, #191792 100%);
        }

        .submit-btn:before{
          opacity:0;
          background: linear-gradient(180deg, #191792 0%, #6089F3 100%);
          border: 2px solid #2B54BE;
        }

        .submit-btn span{
          position:relative;
          z-index:1;
          font-weight: 600;
          font-size: 14px;
          color: #FFFFFF;
        }

        .submit-btn:active:before{
          background: linear-gradient(180deg, #191792 -32.22%, #6089F3 100%);
          box-shadow:none;
        }

        .contacts__p{
          cursor:pointer;
        }

        @media (hover:hover){
          .submit-btn:hover:after{
            opacity:0;
          }
          .submit-btn:hover:before{
            opacity:1;
          }
        }

        @media screen and (max-width:700px){
          .contacts-flex__left, .contacts-flex__right{
            width:100%;
          }
          .contacts-form{
            margin-top:0;
            margin-bottom:5rem;
          }
          .contacts__title{
            margin:3rem 0 ;
          }
          .contacts__subtitle{
            margin-top:0
          }
        }



      `}</style>
    </div>
  )
}

export default Contacts;

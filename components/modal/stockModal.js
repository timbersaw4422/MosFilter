import Modal from "./modal";
import {useState} from "react";

const StockModal = ({modalOpen, title}) => {

  const [checked, setChecked] = useState(true);

  const checkboxHandler = () => {
    if (checked) setChecked(false); else setChecked(true);
  }

  return(
    <Modal modalOpen = {modalOpen} >
      <form className="contacts-form">
          <div className="modal-cross" onClick = {() => modalOpen(false)}>Крест</div>

          <div className="form-inner">
               <h3 className="contacts-form__title">Участие в акции <br /> {title}</h3>
               <div className="contacts-form__shape"></div>
               <p className="contact-form__subtitle">Заполните и отправьте форму, наш специалист свяжется с
               вами в течение 10 минут, и ответит на все ваши вопросы. </p>
               <input type="text" placeholder="Ваше имя"
               className="contact-form__input contact-form__name"
               style={{marginBottom:"2rem"}}/>
               <input type="text" placeholder="Контактный телефон"
               className="contact-form__input contact-form__phone"
               style={{marginBottom:"5rem"}}/>
               <input style={{marginBottom:"3.6rem"}}type="submit" className="contacts-form__submit-btn btn-blue" value="Отправить заявку"/>
               <div className="privacy-policy">
                 <input type="checkbox" className="privacy-policy__checkbox" checked={checked} onChange= {checkboxHandler}/>
                 <p className="privacy-policy__text">Даю свою разрешение на  обработку персональных данных согласно
                      <span> политике конфиденциальности</span></p>
               </div>
          </div>

      </form>

      <style jsx>{`
        .contacts-form{
          padding:1.5rem 6rem 4rem 6rem;
          position:relative;
        }

        .form-inner{
          position:relative;
          z-index:100;
        }

        .modal-cross{
          position:absolute;
          top:10px;
          right:10px;
          cursor:pointer;
        }

        .contacts-form__title{
          font-weight: bold;
          font-size: 18px;
          line-height: 25px;
          color: #424242;
          margin-bottom:3rem;
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
      `}</style>
    </Modal>
  )
}

export default StockModal;

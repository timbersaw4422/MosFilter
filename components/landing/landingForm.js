import DropDown from "../nextDropDown/nextDropDown";

import LandingButton from "./landingButton";

const LandingForm = ({css, margin, goods}) => {

  const dropDownOptions = goods.map(good => {
    return {
      id:good.id,
      value:good.title
    }
  });
  dropDownOptions.push({id:1000, value:"Другая модель"});

  return(
    <>
      <form className="form" style={css}>
        <h2 className="title">Оставить заявку на замену картриджей</h2>

        <input type="text" name="name" placeholder="Ваше имя"/>

        <input type="text" name="phone" placeholder="Контактный номер телефона"/>

        <DropDown
          css={{
            width:"100%",
            height:"6rem",
            margin:"0 0 2.5rem 0"
          }}
          placeholder="Модель фильтра"
          options={dropDownOptions}
          defaultId = {1}
        />

        <div className="according">
          <div className="according__checkbox"></div>
          <p className="according__text">Даю согласие на обработку данных </p>
        </div>

        <LandingButton
            text="Отправить заявку"
            css={{maxWidth:"100%", height:"60px", marginBottom:"0rem"}}
            />

      </form>



      <style jsx>{`
          .form{
            background: #FFFFFF;
            border: 1px solid #B7CCE0;
            box-sizing: border-box;
            box-shadow: 14px 13px 26px rgba(0, 0, 0, 0.09);
            width:360px;
            padding:4rem 3rem 3rem 3rem;
            margin: ${margin || '0'};
            position:relative;
            z-index:10;
          }

          .title{
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
            color: #424242;
            margin:0 0 5rem 0;
            max-width:20rem;
          }

          input{
            height:6rem;
            width:100%;
            background: #F1F1F1;
            margin-bottom: 1.5rem;
            border:none;
            font-weight: 500;
            font-size: 12px;
            color: #424242;
            padding:0 2rem;
            font-family: Montserrat;
          }

          ::placeholder{
            color:#424242;
            font-family: 'Montserrat', sans-serif;
          }

          .according{
            display:flex;
            align-items:center;
            margin-bottom:3rem;
          }

          .according__text{
            font-size: 10px;
            color: #424242;
            margin:0;
          }

          .according__checkbox{
            width:20px;
            height:20px;
            border-radius:50%;
            background: #004990;
            border:1px solid #004990;
            margin-right:2.4rem;
            cursor:pointer;
          }
        `}</style>
    </>
  )
}

export default LandingForm;

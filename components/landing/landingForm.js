import LandingButton from "./landingButton";

const LandingForm = ({css, margin}) => {
  return(
    <>
      <form className="form" style={css}>
        <h2 className="title">Оставить заявку на замену картриджей</h2>

        <input type="text" name="name" placeholder="Ваше имя"/>

        <input type="text" name="phone" placeholder="Контактный номер телефона"/>

        <div className="dropdown">
            <span>Модель фильтра</span>
            <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.2401 1.74001L7.0001 7.70001L12.7601 1.74001C12.9166 1.57757 13.0021 1.35962 12.9979 1.1341C12.9937 0.90859 12.9 0.693991 12.7376 0.537513C12.5752 0.381035 12.3572 0.295497 12.1317 0.299717C11.9062 0.303936 11.6916 0.397568 11.5351 0.560013L7.0001 5.25501L2.4601 0.560012C2.30362 0.397567 2.08903 0.303936 1.86351 0.299716C1.638 0.295496 1.42005 0.381034 1.2576 0.537512C1.09516 0.69399 1.00153 0.908589 0.997306 1.1341C0.993086 1.35961 1.07862 1.57757 1.2351 1.74001L1.2401 1.74001Z" fill="#8E8E8E"/>
            </svg>
        </div>

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
          }

          ::placeholder{
            color:#424242;
            font-family: 'Montserrat', sans-serif;
          }

          .dropdown{
            height:6rem;
            width:100%;
            background: #F1F1F1;
            margin-bottom: 2.5rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding:2rem;
            cursor:pointer;
            font-weight: 500;
            font-size: 12px;
            color: #424242;
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

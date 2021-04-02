import LandingButton from "./landingButton";
import {reachGoal} from "../../analytics/analytics";

const LandingHeader = ({name, setModalOpen, setModalType, globalBrand}) => {

  const btnClickHandler = () => {
    setModalOpen(true);
    setModalType("QUIZ");
    reachGoal(`openQuiz${globalBrand}`);
  }

  const priceListClickHandler = () => {
    setModalOpen(true);
    setModalType("PRICE");
  }

  return(
    <>
      <div className="header">
        <div className="landing-wrapper">
           <h1>Замена картриджей в фильтрах для воды {name}</h1>
           <div className="landing-row">
             <div onClick = {btnClickHandler}>
               <LandingButton
                   adaptiveMargin={true}
                   text="Расчитать стоимость замены"
                   css={{maxWidth:"320px", height:"60px", marginBottom:"0"}}
                   />
             </div>
             <div className="price-list-btn" onClick = { priceListClickHandler }>
               <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5776 0C16.9512 0 18.9683 2.016 19 5.3886V15.5305C19 18.9504 16.9776 21 13.5776 21H5.42344C4.98856 21 4.57583 20.9664 4.18739 20.9002L3.95728 20.8572C1.45456 20.3395 0 18.4327 0 15.5305V5.46945C0 5.11875 0.0211111 4.78275 0.0633333 4.46145C0.431722 1.6422 2.37922 0 5.42344 0H13.5776ZM13.5681 1.52985H5.42344C2.831 1.52985 1.51683 2.856 1.51683 5.46945V15.5305C1.51683 18.144 2.831 19.4701 5.42344 19.4701H13.5681C16.1595 19.4701 17.4652 18.144 17.4652 15.5305V5.46945C17.4652 2.856 16.1595 1.52985 13.5681 1.52985ZM13.2926 14.1855C13.7085 14.1855 14.0452 14.5257 14.0452 14.9457C14.0452 15.3657 13.7085 15.7059 13.2926 15.7059H5.681C5.26511 15.7059 4.92733 15.3657 4.92733 14.9457C4.92733 14.5257 5.26511 14.1855 5.681 14.1855H13.2926ZM13.2926 9.73455C13.5829 9.70305 13.8668 9.84165 14.022 10.0905C14.1772 10.3414 14.1772 10.6585 14.022 10.9095C13.8668 11.1583 13.5829 11.2969 13.2926 11.2654H5.681C5.29467 11.2213 5.00228 10.8927 5.00228 10.5C5.00228 10.1073 5.29467 9.7776 5.681 9.73455H13.2926ZM8.58589 5.2941C8.97222 5.33715 9.26461 5.66685 9.26461 6.05955C9.26461 6.4512 8.97222 6.7809 8.58589 6.82395H5.6905C5.30311 6.7809 5.01072 6.4512 5.01072 6.05955C5.01072 5.66685 5.30311 5.33715 5.6905 5.2941H8.58589Z" fill="white"/>
              </svg>
              <span>Прайс-лист цен</span>
             </div>
           </div>
           <div className="landing-shape"></div>
        </div>
      </div>


      <style jsx>{`
        .header{
          background:#004990;
          padding-top:10.5rem;
          padding-bottom:1px;
        }

        h1{
          font-weight: 600;
          font-size: 30px;
          line-height: 37px;
          color: #fff;
          width:100%;
          max-width:500px;
          margin-bottom:5rem;
        }

        .landing-shape{
          background: #C4C4C4;
          width:100%;
          height:2px;
          margin-bottom:412px;
          margin-top:10rem;
        }

        .landing-row{
          display:flex;
          align-items:center;
          justify-content:space-between;
        }

        .price-list-btn{
          display:flex;
          align-items:center;
          cursor:pointer;
        }

        .price-list-btn svg{
          margin-right:15px;
        }

        .price-list-btn span{
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          color: #FFFFFF;
        }

        @media screen and (max-width:1150px){
          .header{
            padding-top:6rem;
          }
        }

        @media screen and (max-width:600px){
          h1{
            text-align:Center;
          }
          .landing-row{
            flex-direction:column;
          }
          .price-list-btn, .landing-shape{
            margin-top:50px;
          }
        }
      `}</style>
    </>
  )
}

export default LandingHeader;

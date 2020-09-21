import ModalWrapper from "../modal/modalWrapper.js";
import {useState} from "react";
import ModalWithAlertProvider from "../modal/modalWithAlertProvider";

const CallBtn = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  return(
    <>
      {isModalOpen ? <ModalWithAlertProvider
                        setModalOpen={setModalOpen}
                        title = "Заказать обратный звонок"
                        modalType = {1}
                     />
                     : null}

      <div className="call-btn" onClick = {() => setModalOpen(true)}>
         <span>Бесплатный звонок</span>
      </div>

      <div className="mobile-whatsapp-btn" onClick = {() => window.open("https://wa.me/79325306046", "_blank")}>
      <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.748 7.19137C8.59762 7.11525 7.86525 6.75787 7.72837 6.70687C7.5915 6.65812 7.49212 6.63262 7.39237 6.783C7.29487 6.92962 7.00762 7.26525 6.91987 7.36312C6.83212 7.461 6.74587 7.4685 6.59775 7.40213C6.44737 7.326 5.967 7.16962 5.39663 6.65812C4.95113 6.26175 4.6545 5.7735 4.56637 5.62313C4.47862 5.47463 4.55662 5.39062 4.63088 5.31637C4.69912 5.24813 4.78125 5.14463 4.85738 5.05463C4.92975 4.96462 4.953 4.90425 5.00588 4.80675C5.05463 4.70138 5.0295 4.61925 4.99237 4.545C4.95525 4.47075 4.65637 3.73463 4.5315 3.44138C4.41225 3.15037 4.28737 3.1875 4.1955 3.1875C4.10962 3.17963 4.00988 3.17963 3.9105 3.17963C3.81113 3.17963 3.64875 3.21675 3.51187 3.35925C3.375 3.50962 2.98837 3.86888 2.98837 4.59562C2.98837 5.32425 3.5235 6.02925 3.59775 6.13462C3.67387 6.23212 4.65037 7.73212 6.1485 8.37675C6.50588 8.52712 6.78337 8.61712 7.00012 8.69137C7.3575 8.80462 7.68375 8.78887 7.94137 8.75175C8.22637 8.70487 8.82413 8.39025 8.94938 8.03888C9.0765 7.68525 9.0765 7.39237 9.03938 7.326C9.00225 7.25775 8.90475 7.22062 8.75437 7.15425L8.748 7.19137ZM6.03113 10.875H6.02325C5.13637 10.875 4.25962 10.6346 3.49388 10.1854L3.31425 10.0781L1.43925 10.5664L1.94325 8.742L1.82213 8.5545C1.32692 7.76713 1.06421 6.8559 1.06425 5.92575C1.06425 3.20325 3.29288 0.9825 6.03487 0.9825C7.36313 0.9825 8.60925 1.5 9.54675 2.4375C10.0092 2.89447 10.3761 3.43897 10.6259 4.03922C10.8757 4.63948 11.0035 5.28347 11.0017 5.93363C10.998 8.65425 8.77125 10.875 6.033 10.875H6.03113ZM10.2596 1.72462C9.11887 0.622875 7.61888 0 6.02325 0C2.73225 0 0.0525 2.66812 0.050625 5.94712C0.050625 6.99412 0.324 8.01562 0.8475 8.91975L0 12L3.168 11.1739C4.04562 11.647 5.02659 11.8959 6.02362 11.8984H6.0255C9.31838 11.8984 11.9981 9.23025 12 5.949C12 4.36125 11.3809 2.86687 10.2521 1.74375L10.2596 1.72462Z" fill="#424242"/>
      </svg>
      </div>

      <div className="mobile-call-btn" onClick = {() => setModalOpen(true)}>
      <svg width="14" height="11" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.64513 5.1265C8.5969 4.793 8.33819 4.533 8.00512 4.4555C6.71054 4.1535 6.38601 3.4115 6.33126 2.5885C6.10168 2.546 5.69326 2.5 5 2.5C4.30675 2.5 3.89833 2.546 3.66875 2.5885C3.61399 3.4115 3.28947 4.1535 1.99489 4.4555C1.66182 4.5335 1.40311 4.793 1.35488 5.1265L1.10521 6.8475C1.01729 7.4535 1.46439 8 2.08632 8H7.91369C8.53511 8 8.98271 7.4535 8.8948 6.8475L8.64513 5.1265ZM5 6.746C4.29921 6.746 3.73104 6.186 3.73104 5.496C3.73104 4.806 4.29921 4.246 5 4.246C5.7008 4.246 6.26896 4.806 6.26896 5.496C6.26896 6.186 5.70029 6.746 5 6.746ZM9.99848 2C9.98643 1.25 8.06842 0.0005 5 0C1.93109 0.0005 0.0130772 1.25 0.00152295 2C-0.0100313 2.75 0.0120725 3.726 1.27501 3.5635C2.75245 3.373 2.66152 2.8595 2.66152 2.1255C2.66152 1.6135 3.86316 1.49 5 1.49C6.13684 1.49 7.33799 1.6135 7.33849 2.1255C7.33849 2.8595 7.24756 3.373 8.725 3.5635C9.98743 3.726 10.01 2.75 9.99848 2Z" fill="#424242"/>
      </svg>
      </div>

      <style jsx>{`
        .call-btn{
           width:21rem;
           height:4.5rem;
           display:flex;
           align-items:center;
           justify-content:center;
           font-weight: 600;
           transition:0.3s;
           position:relative;
           cursor:pointer;
        }

        .call-btn:before, .call-btn:after{
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

        .call-btn:after{
          opacity:1;
          background: linear-gradient(180deg, #6089F3 0%, #191792 100%);
        }

        .call-btn:before{
          opacity:0;
          background: linear-gradient(180deg, #191792 0%, #6089F3 100%);
          border: 2px solid #2B54BE;
        }

        .call-btn span{
          position:relative;
          z-index:1;
          font-weight: 600;
          font-size: 14px;
          color: #FFFFFF;
        }

        .call-btn:active :before{
          background: linear-gradient(180deg, #191792 -32.22%, #6089F3 100%);
          box-shadow:none;
        }

        .mobile-call-btn, .mobile-whatsapp-btn{
          width:3rem;
          height:3rem;
          border:1px solid #424242;
          border-radius:50%;
          margin-right:2rem;
          display:flex;
          align-items:center;
          justify-content:center;
          z-index:10;
          display:none;
        }

        @media (hover:hover){
          .call-btn:hover:after{
            opacity:0;
          }
          .call-btn:hover:before{
            opacity:1;
          }
        }

        @media screen and (max-width:700px){
          .call-btn{
            display:none;
          }
          .mobile-call-btn, .mobile-whatsapp-btn{
            display:flex;
          }
        }


      `}</style>
    </>
  )
}

export default CallBtn;

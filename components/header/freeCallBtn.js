import FreeCallModal from "../modal/freeCallModal";
import {useState} from "react";
import AlertTemplate from "react-alert-template-basic";
import { positions, Provider } from "react-alert";

const CallBtn = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  const options = {
    timeout: 3000,
    position: positions.BOTTOM_CENTER,
    type:"error"
  };

  return(
    <>
      {isModalOpen ? <Provider template={AlertTemplate} {...options}>
                          <FreeCallModal modalOpen = {setModalOpen} />
                     </Provider>
                          : null}

      <div className="call-btn" onClick = {() => setModalOpen(true)}>
         <span>Бесплатный звонок</span>
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

        @media (hover:hover){
          .call-btn:hover:after{
            opacity:0;
          }
          .call-btn:hover:before{
            opacity:1;
          }
        }
      `}</style>
    </>
  )
}

export default CallBtn;

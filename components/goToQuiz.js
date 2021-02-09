import Modal from "./landing/rModal/rModal";
import Quiz from "./landing/quiz2";
import {useState} from "react";

const GoToQuiz = () => {

  const [isModalOpen, setModalOpen] = useState(false);

  return(
    <>
      <div className="go-to-quiz">
        <h2>Замена картриджей на фильтрах<br/> для воды любых марок <br/>в Москве от 850 <i style = {{fontSize:"25px"}}className="fas fa-ruble-sign"></i> </h2>
        <p>Помогаем сэкономить своим клиентам <br/>до 30% на покупке картриджей</p>
        <div className="btn" onClick = {() => setModalOpen(true)}>
           <span>Рассчитать стоимость замены</span>
        </div>

      </div>

      <div className="horizontal-shape"></div>

      {isModalOpen &&
          <Modal
            isModalOpen={isModalOpen}
            setModalOpen = {setModalOpen}
            overlaySpeed = {200}
            modalSpeed = {500}
            timingFunction = "ease-in"
            animate = "fromDown"
            maxWidth="1150px"
            padding="0 0">
            <Quiz setModalOpen={setModalOpen}/>
          </Modal>
        }


      <style jsx>{`
        .go-to-quiz{
          padding:2.5rem 1rem 2rem 0;
          margin-bottom:3.6rem;
          margin-top:3.5rem;
          background:url("/img/back1.png") no-repeat;
          background-position:center right;
        }

        .horizontal-shape{
          margin-bottom:7rem;
          margin-top:0;
        }

        h2{
          margin-top:0;
          font-weight: bold;
          font-size: 30px;
          line-height: 41px;
          color: #424242;
          margin-bottom:20px;
        }

        p{
          font-weight: 600;
          font-size: 18px;
          line-height: 150%;
          color: #424242;
          margin-top:0;
          margin-bottom:3.6rem;
        }

        .btn{
           width:272px;
           height:4.5rem;
           display:flex;
           align-items:center;
           justify-content:center;
           font-weight: 600;
           transition:0.3s;
           position:relative;
           cursor:pointer;
           margin-right:2rem;
        }

        .btn:before, .btn:after{
          content:"";
          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          z-index:0;
          border-radius: 1rem;
          box-shadow: 2px 5px 14px rgba(210, 210, 210, 0.41);
          transition:0.3s;
        }

        .btn:after{
          opacity:1;
          background: linear-gradient(180deg, #FFB763 0%, #FF5823 100%);
        }

        .btn:before{
          opacity:0;
          background: linear-gradient(180deg, #FF5823 0%, #FFB763 100%);
        }

        .btn span{
          position:relative;
          z-index:1;
          font-weight: 600;
          font-size: 14px;
          color: #FFFFFF;
        }

        .btn:active :before{
          background: linear-gradient(180deg, #FF5823 0%, #FFB763 100%);
          box-shadow:none;
        }

        @media (hover:hover){
          .btn:hover:after{
            opacity:0;
          }
          .btn:hover:before{
            opacity:1;
          }
        }

        @media screen and (max-width:600px){
          .go-to-quiz{
            background:url("/img/back1.png") center / cover;
            padding:2.5rem 1rem 2rem 1rem;
          }
          h2{
            font-size:28px;
          }
          br{
            display:none;
          }
        }
        `}</style>
    </>
  )
}

export default GoToQuiz;

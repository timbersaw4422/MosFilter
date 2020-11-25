import LandingButton from "./landingButton.js";

const LandingGood = (props) => {

  const clickHandler = () => {
    props.setModalOpen(true);
    props.setModalType("GOOD");
    props.setModalPayload({
      modalType:14,
      title:props.subtitle + " " +props.title
    });
    props.setActiveGood({subtitle:props.subtitle, title:props.title, img:props.img, price:props.price});
  }

  return(
    <>
      <figure className="good" onClick={clickHandler}>
        <img src={props.img} alt="" className = "good__img"/>
        <p className="good__subtitle">{props.subtitle}</p>
        <h4 className="good__title">{props.title}</h4>
        <div className="good__on-stock">
           <img src="/img/checkMark.png" alt="checkMark" className="on-stock-status"/>
           <span className="on-stock-title">Есть в наличии</span>
        </div>
        <p className="good__price">{props.price} &nbsp;<i style = {{fontSize:"20px"}}className="fas fa-ruble-sign"></i></p>
        <LandingButton
            text="Подробнее"
            css={{maxWidth:"100%", height:"50px", marginBottom:"0rem", background:"#004990",
            after:"#fff", hoverColor:"#424242", boxShadow:"none", border:"2px solid #004990"}}
            />
        {props.discount && <div className="good__ticket">Акция -{props.discount}%</div>}

      </figure>


      <style jsx>{`
        .good{
          margin:0;
          margin-right:3.3%;
          width:30%;
          background: #FFFFFF;
          border: 1px solid #B7CCE0;
          box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.08);
          padding:4.5rem;
          text-align:Center;
          position:relative;
          margin-bottom:4rem;
        }

        .good__img{
          height:15rem;
          display:block;
          margin:0 auto;
        }

        .good__subtitle{
          font-size: 14px;
          color: #424242;
          margin-top: 2.1rem;
        }

        .good__title{
          font-weight: bold;
          font-size: 16px;
          color: #424242;
          margin-top: 1rem;
        }

        .on-stock-title{
          font-size: 12px;
          line-height: 16px;
          color: #6B6B6B;
          margin-left:8px;
        }

        .good__price{
          font-weight: bold;
          font-size: 24px;
          color: #4E4E4E;
        }

        .good__ticket{
          position:absolute;
          width:55%;
          height:30px;
          background: #EB4343;
          border-radius: 0px 0px 5px 5px;
          top:0;
          right:20px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight: 600;
          font-size: 12px;
          color: #FFFFFF;
          text-transform: uppercase;
        }

        @media screen and (max-width:900px){
          .good{
            margin-right:0%;
            width:48%;
          }
        }

        `}</style>
    </>
  )
}

export default LandingGood;

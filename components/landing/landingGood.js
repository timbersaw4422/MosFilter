import LandingButton from "./landingButton.js";

const LandingGood = () => {
  return(
    <>
      <figure className="good">
        <img src="/img/goods/301.png" alt="" className = "good__img"/>
        <p className="good__subtitle">Комплект катриджей</p>
        <h4 className="good__title">Гейзер «3»</h4>
        <div className="good__on-stock">
           <img src="/img/checkMark.png" alt="checkMark" className="on-stock-status"/>
           <span className="on-stock-title">Есть в наличии</span>
        </div>
        <p className="good__price">1488 &nbsp;<i style = {{fontSize:"20px"}}className="fas fa-ruble-sign"></i></p>
        <LandingButton
            text="Подробнее"
            css={{maxWidth:"100%", height:"50px", marginBottom:"0rem", background:"#004990"}}
            />
        <div className="good__ticket">Акция -10%</div>

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

        `}</style>
    </>
  )
}

export default LandingGood;

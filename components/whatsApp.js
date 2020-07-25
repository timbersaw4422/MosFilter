const WhatsApp = () =>{


  return(
    <div className="whatsapp">
      <h4 className="whatsapp__title">Задайте свой вопрос в WhatsApp</h4>
      <div className="whatsapp__btn">Написать</div>

      <style jsx>{`
        .whatsapp{
          margin-top:3rem;
        }
        .whatsapp__title{
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          color: #424242;
          margin-bottom:5rem;
        }

        .whatsapp__btn{
          background: linear-gradient(180deg, #6089F3 0%, #191792 100%);
          width:15rem;
          height:4.5rem;
          box-shadow: 0px 4px 10px rgba(45, 82, 214, 0.41);
          border-radius: 5px;
          font-weight: 600;
          font-size: 14px;
          line-height: 19px;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          color: #FFFFFF;
        }
      `}</style>
    </div>
  )
}

export default WhatsApp;

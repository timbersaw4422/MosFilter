const WhatsApp = ({marginTop}) =>{

  const clickHandler = () => {
    window.open("https://wa.me/79325306046", "_blank");
  }

  return(
    <div className="whatsapp">
      <h4 className="whatsapp__title">Задайте свой вопрос в WhatsApp</h4>
      <div className="call-btn" onClick = {clickHandler}>
         <span>Написать</span>
      </div>



      <style jsx>{`
        .whatsapp{
          margin-top:${marginTop};
        }
        .whatsapp__title{
          font-weight: 600;
          font-size: 16px;
          line-height: 22px;
          color: #424242;
          margin-bottom:4rem;
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

        .call-btn{
           width:15.3rem;
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
          border-radius: 0.5rem;
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

        @media screen and (max-width:1100px){
          .whatsapp{
            display:none;
          }
        }

      `}</style>
    </div>
  )
}

export default WhatsApp;

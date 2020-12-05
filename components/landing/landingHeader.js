import LandingButton from "./landingButton";

const LandingHeader = ({name, setModalOpen, setModalType}) => {

  const btnClickHandler = () => {
    setModalOpen(true);
    setModalType("QUIZ");
  }

  return(
    <>
      <div className="header">
        <div className="landing-wrapper">
           <h1>Замена картриджей в фильтрах для воды «{name}»</h1>
           <div onClick = {btnClickHandler}>
             <LandingButton
                 adaptiveMargin={true}
                 text="Расчитать стоимость замены"
                 css={{maxWidth:"320px", height:"60px", marginBottom:"10rem"}}
                 />
             <div className="landing-shape"></div>
           </div>
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
        }
      `}</style>
    </>
  )
}

export default LandingHeader;

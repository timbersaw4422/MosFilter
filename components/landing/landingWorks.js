import Arrow from "./arrow";
import WorkSLider from "./workSlider.js";

const LandingWorks = () => {
  return(
    <>
      <div className="works">
         <div className="landing-wrapper">
             <p className="subtitle">Галерея</p>
             <div className="title-and-instagram">
                <h2 className="title">Работы наших мастеров</h2>
                <div className="instagram" onClick = {() => window.open("https://www.instagram.com/mos_filter/", "_blank")}>
                   <span>Больше работ в нашем Instagram</span> <Arrow fill = "#FF652E"/></div>
             </div>

             <div className="slider">
               <WorkSLider />
             </div>

        </div>
      </div>


      <style jsx>{`
        .landing-wrapper{
          border-top:1px solid #E3E3E3;
          padding-top:3.6rem;
          z-index:10;
        }

        .works{
          position:relative;
          margin-bottom:18rem;
        }

        .works:after{
          content:"";
          position:absolute;
          left:0;
          bottom:0;
          width:100%;
          height:39rem;
          background:#004990;
          z-index:0;
        }

        .subtitle{
          font-weight: 600;
          font-size: 16px;
          text-transform: uppercase;
          color: #B9B9B9;
        }

        .title{
          font-weight: 600;
          font-size: 30px;
          line-height: 37px;
          color: #424242;
          margin-bottom:6rem;
        }

        .instagram, .title-and-instagram{
          display:flex;
          align-items:center;
        }

        .title-and-instagram{
          justify-content:space-between;
        }

        .instagram span{
          margin-right:5rem;
          font-weight: 600;
          font-size: 14px;
          color: #FF652E;
          cursor:pointer;
        }
      `}</style>
    </>
  )
}

export default LandingWorks

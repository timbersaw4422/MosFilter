const LandingButton = ({text, css, clickHandler, adaptive850}) => {

  return(
    <>
      <div className="button" onClick={clickHandler}>
        <span>{text}</span>
      </div>


      <style jsx>{`
        .button{
          width: 100%;
          max-width:${css.maxWidth};
          height: ${css.height};
          margin-bottom:${css.marginBottom};
          background: ${css.background || "#FF652E"};
          color:${css.color || "#fff"};
          border:${css.border || "none"};
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight: bold;
          font-size: 12px;
          letter-spacing: 0.045em;
          text-transform: uppercase;
          box-shadow:${css.boxShadow || "0px 4px 4px rgba(0, 0, 0, 0.25)"};
          cursor:pointer;
          position:relative;
          margin:${css.margin || ""};
        }

        .button span{
          position:relative;
          z-index:2;
        }

        .button:after{
          content:"";
          position:absolute;
          background: ${css.after || "linear-gradient(265.11deg, rgba(255, 255, 255, 0) 19.76%, rgba(255, 255, 255, 0.58) 53.19%, rgba(255, 255, 255, 0) 86.41%), #FF652E"};
          top:0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index:1;
          opacity:0;
          transition:0.3s;
        }

        @media(hover:hover){
          .button:hover:after{
            opacity:1;
          }
          .button:hover span{
            color:${css.hoverColor || ""}
          }
        }

        @media screen and (max-width:850px){
          .button{
            max-width:${adaptive850 ? "100%" : ""};
          }
        }
        `}</style>
    </>
  )
}

export default LandingButton;

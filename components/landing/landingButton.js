const LandingButton = ({text, css}) => {
  return(
    <>
      <div className="button">
        <span>{text}</span>
      </div>


      <style jsx>{`
        .button{
          width: 100%;
          max-width:${css.maxWidth};
          height: ${css.height};
          margin-bottom:${css.marginBottom};
          background: ${css.background || "#FF652E"};
          color:#fff;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight: bold;
          font-size: 12px;
          letter-spacing: 0.045em;
          text-transform: uppercase;
          box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
          cursor:pointer;
          position:relative;
        }

        .button span{
          position:relative;
          z-index:2;
        }

        .button:after{
          content:"";
          position:absolute;
          background: linear-gradient(265.11deg, rgba(255, 255, 255, 0) 19.76%, rgba(255, 255, 255, 0.58) 53.19%, rgba(255, 255, 255, 0) 86.41%), #FF652E;
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
        }
        `}</style>
    </>
  )
}

export default LandingButton;

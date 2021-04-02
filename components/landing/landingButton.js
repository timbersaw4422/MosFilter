const LandingButton = ({text, css, clickHandler, adaptive850, display1000, phonelink, adaptiveMargin}) => {

  return(
    <>
      <div className="button" onClick={clickHandler}>
        <span>{text}</span>
        {!css.after && <svg className="arrow" width="8" height="12" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.55714 12.7368L8 6.49729L1.55714 0.257754C1.38154 0.0882492 1.14593 -0.00440973 0.902146 0.000161116C0.658364 0.00473197 0.426378 0.106158 0.257223 0.282127C0.088068 0.458097 -0.00439933 0.694194 0.000162084 0.938481C0.0047235 1.18277 0.10594 1.41523 0.281546 1.58474L5.35692 6.49729L0.281546 11.4153C0.10594 11.5848 0.00472303 11.8172 0.000161597 12.0615C-0.00439984 12.3058 0.0880675 12.5419 0.257223 12.7179C0.426377 12.8938 0.658363 12.9953 0.902146 12.9998C1.14593 13.0044 1.38154 12.9118 1.55714 12.7422L1.55714 12.7368Z" fill="white"/>
                      </svg>
         }
      </div>


      <style jsx>{`
        .button{
          width: 100%;
          min-width:${css.maxWidth};
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
          text-transform: ${css.textTransform || "uppercase"};
          box-shadow:${css.boxShadow || "0px 4px 4px rgba(0, 0, 0, 0.25)"};
          cursor:pointer;
          position:relative;
          margin:${css.margin || ""};
          transition:0.2s;
          padding:${phonelink ? "0 2rem" : ""}
        }

        .arrow{
          margin-left:1.5rem;
          transition:0.1s;
        }

        .button span{
          position:relative;
          z-index:2;
        }

        .button:after{
          content:"";
          position:absolute;
          background: ${css.after || "transparent"};
          top:0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index:1;
          opacity:0;
          transition:0.3s;
        }

        @media(hover:hover){
          .button:hover{
            border-radius:${css.after ? "0" : "5px"};
          }
          .button:hover:after{
            opacity:1;
            border-radius:${css.after ? "0" : "5px"};
          }
          .button:hover span{
            color:${css.hoverColor || ""}
          }
          .button:hover .arrow{
            transform:translateX(7px);
          }

        }

        @media screen and (max-width:1000px){
          .button{
            display:${display1000 || ""};
          }
        }

        @media screen and (max-width:850px){
          .button{
            max-width:${adaptive850 ? "100%" : ""};
          }
        }

        @media screen and (max-width:600px){
          .button{
            margin-left:${adaptiveMargin ? "auto" : ""};
            margin-right:${adaptiveMargin ? "auto" : ""};
          }
        }

        `}</style>
    </>
  )
}

export default LandingButton;

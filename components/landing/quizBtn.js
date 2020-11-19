const QuizBtn = ({text, to, setActiveStep, css, reverse, policy, type, border}) => {

  const hoverBackground = css.background === "#fff" ? "#004990" : "#fff";
  const hoverColor = css.textColor === "#424242" ? "#fff" : "#424242";
  let hoverFill = css.arrowFill === "#004990" ? "#fff" : "#004990";
  const transform = reverse ? "translateX(-10px) rotate(180deg)" : "translateX(10px)";

  if (css.background === "#FF652E") hoverFill = "#FF652E";

  return(
    <>
       <div className="btn" onClick = {() => {
         if (policy) setActiveStep(to);
       }}>
          <span>{text}</span>
          <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-6.11317e-07 5.08388L10.9071 5.08389L8.01315 8.17439L8.78624 9L13 4.5L8.78625 5.85296e-07L8.01315 0.825614L10.9071 3.91612L-5.09227e-07 3.91612L-6.11317e-07 5.08388Z" fill={css.arrowFill}/>
          </svg>
       </div>

       <style jsx>{`
          .btn{
            width:${css.width};
            background:${css.background};
            padding:${css.padding};
            margin:${css.margin};
            height:4rem;
            border: ${css.border || "2px solid #004990"};
            display:flex;
            align-items:center;
            justify-content:space-between;
            cursor:pointer;
            position:relative;
            z-index:1;
            opacity:${policy ? "1" : "0.5"};
          }

          .btn span{
            color: ${css.textColor};
            font-weight: 600;
            font-size: 12px;
            order:${reverse ? "2" : "1"};
            position:relative;
            z-index:5;
          }

          .btn svg{
            order:${reverse ? "1" : "2"};
            transform:${reverse ? "rotate(180deg)" : "none"};
            position:relative;
            z-index:5;
            transition:0.2s;
          }

          .btn:after{
            content:"";
            position:absolute;
            top: 0;right: 0;bottom: 0;left: 0;
            background:${hoverBackground};
            z-index:0;
            opacity:0;
            transition:0.3s;
          }

          @media(hover:hover){
            .btn:hover:after{
              opacity:${policy && "1"};
            }

            .btn:hover span{
              color:${policy && hoverColor};
            }

            .btn:hover svg path{
              fill: ${policy && hoverFill};
            }

            .btn:hover svg{
              transform:${policy ? transform : "none"};

            }
          }
        `}</style>
    </>
  )
}

export default QuizBtn;

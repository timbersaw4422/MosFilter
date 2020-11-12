const QuizBtn = ({text, to, setActiveStep, css, reverse, policy, type}) => {
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
            border: 2px solid #004990;
            display:flex;
            align-items:center;
            justify-content:space-between;
            cursor:pointer;
          }

          .btn span{
            color: ${css.textColor};
            font-weight: 600;
            font-size: 12px;
            order:${reverse ? "2" : "1"};
          }

          .btn svg{
            order:${reverse ? "1" : "2"};
            transform:${reverse ? "rotate(180deg)" : "none"};
          }
        `}</style>
    </>
  )
}

export default QuizBtn;

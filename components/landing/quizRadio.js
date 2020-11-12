const QuizRadio = ({id, activeRadio}) => {
  let classes = ["quiz__radiobutton-inner"];
  if (id === activeRadio) {
    classes.push("opacyty-1");
  }

  return(
    <div className="quiz__radiobutton">
       <span className={classes.join(" ")}></span>

       <style jsx>{`
         .quiz__radiobutton{
           width:15px;
           height:15px;
           border: 2px solid #004990;
           border-radius:50%;
           margin-right:1.2rem;
           display:flex;
           align-items:center;
           justify-content:center;
           position:relative;
         }

         .quiz__radiobutton-inner{
           width:5px;
           height:5px;
           border-radius:50%;
           background:#004990;
           opacity:0;
         }

         .opacyty-1{
           opacity:1;
         }
       `}</style>
    </div>
  )
}

export default QuizRadio;

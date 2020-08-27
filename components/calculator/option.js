const ChoiseOption = ({text, id, changeHandler, activeId, setOption}) => {

  const classes = ["choise__option"];
  if (activeId === id) classes.push("active-option");

  return(

      <div className={classes.join(" ")} onClick = {() => {
        changeHandler(text, id);
        setOption(text);
      }}>
        {text}

        <style jsx>{`
          .choise__option{
            display:flex;
            align-items:center;
            padding-left:1.4rem;
            font-size: 12px;
            line-height: 16px;
            color: #424242;
            width:100%;
            height:4rem;
            border-bottom:1px solid #E3E3E3;
          }

          .active-option{
            background:#f8f8f8;
          }

          @media(hover:hover){
            .choise__option:not(.active-option):hover{
              color: #4862D2;
            }
          }
        `}</style>
      </div>

  )
}


export default ChoiseOption;

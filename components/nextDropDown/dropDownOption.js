const Option = ({value, setValue, id, setActiveId, activeId}) => {

  const clickHandler = () => {
    setValue(value);
    setActiveId(id);
  }

  const classes = ["option"];
  if (id === activeId) classes.push("active-option");

  return(
    <>
      <div className={classes.join(" ")} onClick = {clickHandler}>
         {value}
      </div>


      <style jsx>{`
        .option{
          width:100%;
          height:40px;
          display:flex;
          align-items:center;
          padding:0 20px;
          transition:0.2s;
          background:#fff;
        }

        .active-option{
          background: #F1F1F1;
        }

        @media(hover:hover){
          .option:not(.active-option):hover{
            color: #4862D2;
          }
        }
      `}</style>
    </>
  )
}

export default Option;

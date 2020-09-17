const GoodTab = ({tab, setActiveTab, text, activeTab}) => {

  const classes = ["good-tab"];
  if (tab === activeTab) classes.push("active-tab");

  return(
    <>
      <div className={classes.join(" ")} onClick = {() => {setActiveTab(tab)}}>
        {text}
      </div>

      <style jsx>{`
        .good-tab{
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%), #FFFFFF;
          border: 1px solid #E3E3E3;
          box-sizing: border-box;
          width:18rem;
          max-width:33.33%;
          height:6rem;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
          font-size: 11px;
          position:relative;
        }

        .active-tab{
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .good-tab:after{
          content:"";
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:3px;
          background: #4862D2;
          opacity:0;
          transition:0.3s;
        }

        @media (hover:hover){
          .good-tab:hover:after{
            opacity:1;
          }
        }
      `}</style>
    </>
  )
}

export default GoodTab;

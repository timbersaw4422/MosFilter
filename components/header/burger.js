const Burger = ({isMenuOpen, setMenuOpen}) => {

  const span1Styles = ["burger-span1", "burger-span"],
        span2Styles = ["burger-span2", "burger-span"],
        span3Styles = ["burger-span3", "burger-span"];

  if (isMenuOpen){
    span1Styles.push("burger-span1-open");
    span2Styles.push("burger-span2-open");
    span3Styles.push("burger-span3-open");
  }

  return(
    <>
      <div className="burger" onClick = {() => {setMenuOpen(prev => !prev)}}>
         <span className={span1Styles.join(" ")}></span>
         <span className={span2Styles.join(" ")}></span>
         <span className={span3Styles.join(" ")}></span>
      </div>

      <style jsx>{`

        .burger{
          cursor:pointer;
          display:none;
          position:relative;
          z-index:100;
          height:20px;
          width:20px;
        }

        .burger-span{
          position:absolute;
          width:20px;
          height:2px;
          background: #4862D2;
          border-radius: 2px;
          left:0;
          transition:0.3s;
        }

        .burger-span1{
          top:1px;
        }
        .burger-span2{
          top:9px;
        }
        .burger-span3{
          top:17px;
        }

        .burger-span1-open{
          transform:translateY(8px) rotate(45deg);
        }
        .burger-span2-open{
          transform:scaleX(0);
        }
        .burger-span3-open{
          transform:translateY(-8px) rotate(-45deg);
        }

        @media screen and (max-width:1200px){
          .burger{
            display:block;
          }
        }
        `}</style>
    </>
  )
}

export default Burger

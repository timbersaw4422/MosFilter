

const SliderPoint = ({id, activeSlide, setActiveSlide}) => {

  const classes = ["slider__point"];
  if (id === activeSlide) classes.push("slider__point--active")

  return(
      <div className={classes.join(" ")}
           onClick={() => setActiveSlide(id)}>



        <style jsx>{`
          .slider__point{
            background: #C4C4C4;
            border-radius:10px;
            width:2.5rem;
            height:3px;
            margin-left:0.3rem;
            margin-right:0.3rem;
            cursor:pointer;
          }

          .slider__point--active{
            background: #1A70BC;
          }
        `}</style>
      </div>
  )
}

export default SliderPoint;

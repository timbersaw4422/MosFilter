

const SliderPoint = ({id, activeSlide, setActiveSlide}) => {

  const classes = ["slider__point"];
  if (id === activeSlide) classes.push("slider__point--active")

  return(
      <div className={classes.join(" ")}
           onClick={() => setActiveSlide(id)}>



        <style jsx>{`
          .slider__point{
            background: #DBDBDB;;
            border-radius:50%;
            width:1.5rem;
            height:1.5rem;
            margin-left:1rem;
            margin-right:1rem;
            cursor:pointer;
          }

          .slider__point--active{
            background: linear-gradient(180deg, #191792 0%, #6089F3 100%), #FFFFFF;
          }
        `}</style>
      </div>
  )
}

export default SliderPoint;

const SliderItem = ({background, transform}) => {
  return(
    <div className="slider-item">



      <style jsx>{`
        .slider-item{
          transition:0.5s;
          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          background:url(${background}) center / cover;
          transform:translateX(${transform}00%)
        }
      `}</style>
    </div>
  )
}

export default SliderItem;

const SliderItem = ({background, transform, title, setModalOpen, setModalTitle}) => {

  const clickHandler = () => {
    setModalOpen(true);
    setModalTitle(title);
  }

  return(
    <>
      <div className="slider-item" onClick = {clickHandler}></div>

      <style jsx>{`
        .slider-item{
          transition:0.5s;
          position:absolute;
          top:0;
          left:0;
          right:0;
          bottom:0;
          background:url(${background}) center / cover;
          transform:translateX(${transform}00%);
          cursor:pointer;
        }
      `}</style>
    </>
  )
}

export default SliderItem;

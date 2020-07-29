const ReviewsSliderPoint = ({id, setActivePage, activePage}) => {

  const classes = ["nav__point"];
  if (id === activePage) classes.push("nav__point__active");

  return(
    <div className={classes.join(' ')} onClick= {() => setActivePage(id)}>

      <style jsx>{`
        .nav__point{
          width:1.5rem;
          height:1.5rem;
          margin: 0 1rem;
          background: #DBDBDB;
          border-radius:50%;
          cursor:pointer;
        }

        .nav__point__active{
          background: linear-gradient(180deg, #191792 0%, #6089F3 100%), #FFFFFF;
        }
      `}</style>
    </div>
  )
}

export default ReviewsSliderPoint;

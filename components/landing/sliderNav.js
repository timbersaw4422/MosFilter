import Arrow from "./arrow";

const SliderNav = () => {
  return(
    <>
      <div className="slider-nav">
        <div className="arrow-left">
          <Arrow fill ="#004990" rotate="180deg"/>
        </div>
        <div className="arrow-right">
          <Arrow fill ="#fff" />
        </div>
      </div>

      <style jsx >{`
         .slider-nav{
            display:Flex;
            float:right;
            margin-bottom:18rem;
         }

         .arrow-left, .arrow-right{
           width:6rem;
           height:6rem;
           display:flex;
           align-items:center;
           justify-content:center;
           cursor:pointer;
         }

         .arrow-left{
           box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.08);
           background:#fff;
         }

         .arrow-right{
           background: #5388BB;
           box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.08);
         }
      `}</style>
    </>
  )
}

export default SliderNav;

const Good = (props) =>{


  return(
    <div className="good">
      <img src={props.img} alt="" className="good__img"/>
      <p className="category-title">{props.categoryTitle}</p>
      <h4 className="good__title">{props.goodTitle}</h4>
      <div className="good__on-stock">
         <img src="./img/checkMark.png" alt="checkMark" className="on-stock-status"/>
         <span className="on-stock-title">Есть в наличии</span>
      </div>
      <p className="good__price">{props.price}&nbsp;₽</p>


      <style jsx>{`
         .good{
           width:${props.width};
           background: #FFFFFF;
           box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.13);
           border-radius: 0.5rem;
           margin-right:${props.marginRight};
           padding:2rem 1rem 1rem 1rem;
           text-align:center;
           margin-bottom:1.3rem;
           cursor:pointer;
         }

         .good__img{
           width:auto;
           height:12rem;
           margin-bottom:2rem;
         }

         .category-title{
           font-size: 14px;
           line-height: 19px;
           color: #333333;
           margin-bottom:0.5rem;
         }

         .good__title{
           font-weight: 600;
           font-size: 14px;
           line-height: 19px;
           color: #333333;
           margin-top:0;
           margin-bottom:0;
           height:5rem;
         }

         .good__on-stock{
           display:flex;
           justify-content:center;
           align-items:center;
           margin-bottom:4rem;
         }

         .on-stock-title{
           margin-left:0.5rem;
         }

         .good__price{
           font-weight: bold;
           font-size: 22px;
           color: #4E4E4E;
         }

      `}</style>
    </div>
  )
}

export default Good;

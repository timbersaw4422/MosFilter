const Advantages = () => {
  return(
    <div className="advantages">
        <div className="advantages__item">
           <img src="/img/advantage1.png" alt="" className="advantage__img"/>
           <p className="advantage__text">Бесплатная доставка по Москве</p>
        </div>
        <div className="advantages__item">
           <img src="/img/advantage2.png" alt="" className="advantage__img"/>
           <p className="advantage__text">В любое удобное для вас время</p>
        </div>
        <div className="advantages__item">
           <img src="/img/advantage3.png" alt="" className="advantage__img"/>
           <p className="advantage__text">Цены напрямую от завода изготовителя</p>
        </div>
        <div className="advantages__item">
           <img src="/img/advantage4.png" alt="" className="advantage__img"/>
           <p className="advantage__text">Официальная гарантия на 1 год</p>
        </div>



        <style jsx>{`
          .advantages{
            margin-top:10rem;
            display:flex;
            align-items:center;
            justify-content:space-around;
          }

          .advantages__item{
            display:flex;
            align-items:center;
            width:22%;
          }

          .advantage__text{
            font-weight: normal;
            font-size: 12px;
            line-height: 16px;
            color: #333333;
            margin-left:2rem;
          }
        `}</style>
    </div>
  )
}

export default Advantages;

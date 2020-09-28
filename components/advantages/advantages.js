const Advantages = ({marginTop}) => {
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
            margin-top:${marginTop || "10rem"};
            display:flex;
            align-items:center;
            justify-content:space-around;
            flex-wrap:wrap;
            position:relative;
          }

          .advantages:before, .advantages:after{
            content:"";
            position:absolute;
            height:1px;
            width:100%;
            background: #B4B4B4;
            left:0;
            display:none;
          }

          .advantages:before{
            top:-3rem;
          }

          .advantages:after{
            bottom:-1rem;
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

          @media screen and (max-width:700px){
            .advantages__item{
              width:auto;
              margin-bottom:2rem;
            }
            .advantage__img{
              width:40px;
            }
            .advantages{
              flex-direction:column;
            }
            .advantages:before, .advantages:after{
              display:block;
            }
            .advantages{
              margin-bottom:2rem;
            }
          }

          @media screen and (max-width:400px){
            .advantages{
              align-items:flex-start;
            }
          }



        `}</style>
    </div>
  )
}

export default Advantages;

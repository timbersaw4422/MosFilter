import Good from "../good/good";

const Catalog = ({goods}) => {

  const goodsArray = [];

  for (let id in goods){
    goodsArray.push(goods[id])
  }

  const goodsToHtml = goodsArray.map(good => {
    if (good) return (
        <Good width="30.66%"
              margin="0 4% 3.5rem 0"
              img={good.img}
              categoryTitle={good.subtitle}
              goodTitle={good.title}
              price = {good.price}
              key={good.id}
              id={good.id}/>
    )
  });

  return(
    <div className="catalog">

       { goodsToHtml }


        <style jsx>{`
          .catalog{
            padding-bottom:3.8rem;
            border-bottom:1px solid #F0F0F0;
            display:flex;
            flex-wrap:wrap;
          }

          @media screen and (max-width:700px){
            .catalog{
              padding-bottom:0;
              border-bottom:none;
            }        
          }
        `}</style>
    </div>
  )
}

export default Catalog

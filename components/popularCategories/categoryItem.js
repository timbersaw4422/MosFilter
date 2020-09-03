import Router from "next/router";

const CategoryItem = ({text, bg, margin, link, bgStyle}) => {

  const clickHandler = () => {
    Router.push(link);
  }

  let backgroundStyle = `url(${bg}) center / cover`;
  if (bgStyle) backgroundStyle = `url(${bg}) ${bgStyle}`;

  return(
    <div className="categoty__item" onClick = {clickHandler}>
      <h3 className="category__text">{text}</h3>


      <style jsx>{`
         .categoty__item{
           position:relative;
           width:calc(50% - 0.7rem);
           height:23rem;
           border: 2px solid #FFFFFF;
           box-sizing: border-box;
           box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.13);
           border-radius: 0.5rem;
           background:${backgroundStyle};
           cursor:pointer;
           margin-bottom:${margin || 0};
           transition:0.2s;
         }

         .category__text{
           position:absolute;
           left:2rem;
           bottom:2rem;
           height:4rem;
           width:75%;
           margin-top:0;
           margin-bottom:0;
           background: #5171DF;
           box-shadow: 0px 4px 10px rgba(45, 82, 214, 0.41);
           border-radius: 0.3rem;
           display:flex;
           align-items:center;
           justify-content:center;
           padding:0 1.2rem;
           font-weight: 600;
           font-size: 13px;
           line-height: 18px;
           color: #FFF;
           transition:0.2s;
         }

         @media(hover:hover){
           .categoty__item:hover .category__text{
             transform:translateY(-5px);
           }
           .categoty__item:hover{
             opacity:0.8;
           }
         }
      `}</style>
    </div>

  )
}

export default CategoryItem;

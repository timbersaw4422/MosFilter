import Link from "next/link";

const CategoryItem = ({text, bg, margin, link}) => {
  return(
    <Link href={link}>
    <a className="categoty__item">
      <span className="category__text">{text}</span>


      <style jsx>{`
         .categoty__item{
           position:relative;
           width:calc(50% - 0.7rem);
           height:23rem;
           border: 2px solid #FFFFFF;
           box-sizing: border-box;
           box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.13);
           border-radius: 0.5rem;
           background:url(${bg}) center / cover;
           cursor:pointer;
           margin-bottom:${margin || 0};
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
         }
      `}</style>
    </a>
    </Link>
  )
}

export default CategoryItem;

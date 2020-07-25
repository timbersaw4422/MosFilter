import CategoryItem from "../popularCategories/categoryItem";

const Categories = ({title}) => {

  const text = "Фильтры " + title;

  const categories = [
    {key:1, text:text , bg:"/img/categories/atoll.png", margin:"1.5rem"},
    {key:2, text:"Комплекты картриджей" , bg:"/img/categories/complects.png", margin:"1.5rem"},
    {key:3, text:"Услуга замены картриджей" , bg:"/img/categories/swap.png", margin:"1.5rem"},
    {key:4, text:"Услуга установки фильтра в квартиру" , bg:"/img/categories/installation.png", margin:"1.5rem"},
    {key:5, text:"Ремонт фильтра" , bg:"/img/categories/repair.png", margin:"1.5rem"},
  ]

  if (title === "Atoll" || title === "Geizer") {
    for (let category of categories){
      if (category.key === 1 && title==="Atoll") category.bg = `img/categories/atoll.png`;
      if (category.key === 1 && title==="Geizer") category.bg = `img/categories/geizer.png`;
    }
  } else {
    categories.splice(0, 1);
  }




  return(
    <div className="categories">
       <h2 className="category__title">Категории товаров {title}</h2>
       <div className="category-items">
           {categories.map(item => <CategoryItem key={item.key} text={item.text} margin={item.margin} bg={item.bg}/>)}
       </div>

       <style jsx>{`
         .category__title{
           font-weight: 600;
           font-size: 24px;
           line-height: 33px;
           color: #424242;
           margin-top:4rem;
           margin-bottom:5rem;
         }
         .category-items{
           display:flex;
           align-items:center;
           flex-wrap:wrap;
           justify-content:space-between;
         }
       `}</style>
    </div>
  )
}

export default Categories;

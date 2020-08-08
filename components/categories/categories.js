import CategoryItem from "../popularCategories/categoryItem";

const Categories = ({title}) => {
  let caption;
  switch(title) {
    case "Atoll": caption = "Атолл";break;
    case "Geizer": caption = "Гейзер";break;
    case "Aquaphor": caption = "Аквафор";break;
    case "Platinum-wasser": caption = "Platinum-wasser";break;
    case "Barier": caption = "Барьер";break;
    case "Others": caption = "Другие марки";break;
    default:break;
  }
  const text = "Фильтры " + caption;

  const categories = [
    {key:1, text:text , bg:"/img/categories/atoll.png", margin:"1.5rem"},
    {key:2, text:"Комплекты картриджей" , bg:"/img/categories/complects.png", margin:"1.5rem"},
    {key:3, text:"Услуга замены картриджей" , bg:"/img/categories/swap.png", margin:"1.5rem"},
    {key:4, text:"Услуга установки фильтра в квартиру" , bg:"/img/categories/installation.png", margin:"1.5rem"},
    {key:5, text:"Ремонт фильтра" , bg:"/img/categories/repair.png", margin:"1.5rem"},
  ]

  if (title === "Atoll" || title === "Geizer") {
    categories[0].bg = title === "Atoll" ? `/img/categories/atoll.png` : `/img/categories/geizer.png`
  } else {
    categories.splice(0, 1);
    if (title === "Others") categories.splice(0, 1);
  }



  return(
    <div className="categories">
       <h2 className="category__title">Категории товаров {caption}</h2>
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

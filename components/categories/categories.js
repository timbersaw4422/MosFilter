import CategoryItem from "../popularCategories/categoryItem";

const Categories = ({title}) => {
  let caption;let link;
  switch(title) {
    case "Atoll": caption = "Атолл"; link="atoll"; break;
    case "Geizer": caption = "Гейзер"; link="geizer"; break;
    case "Aquaphor": caption = "Аквафор"; link="aquaphor"; break;
    case "Platinum-wasser": caption = "Platinum-wasser"; link="platinum-wasser"; break;
    case "Barier": caption = "Барьер"; link="barier"; break;
    case "Others": caption = "Другие марки"; link="others"; break;
    default:break;
  }
  const text = "Фильтры " + caption;

  const categories = [
    {key:1, text:text , bg:"/img/categories/atoll.png", margin:"1.5rem", link:`/filters/${link}`},
    {key:2, text:"Комплекты картриджей" , bg:"/img/categories/complects.png", margin:"1.5rem", link:`/cartridges/${link}`},
    {key:3, text:"Услуга замены картриджей" , bg:"/img/categories/swap.png", margin:"1.5rem", link:`/replacement/${link}`},
    {key:4, text:"Услуга установки фильтра в квартиру" , bg:"/img/categories/installation.png", margin:"1.5rem", link:`/installation/${link}`},
    {key:5, text:"Ремонт фильтра" , bg:"/img/categories/repair.png", margin:"1.5rem", link:`/repair/${link}`},
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
           {categories.map(item =>

                <CategoryItem key={item.key} text={item.text} margin={item.margin} link={item.link} bg={item.bg}/>

           )}
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

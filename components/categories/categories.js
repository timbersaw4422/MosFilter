import CategoryItem from "../popularCategories/categoryItem";

const Categories = ({title}) => {
  let caption;let link;let bg;
  switch(title) {
    case "Atoll": caption = "Атолл"; bg = "/img/categories/atoll1.png"; link="atoll"; break;
    case "Geizer": caption = "Гейзер"; bg = "/img/categories/geizer1.png"; link="geizer"; break;
    case "Aquaphor": caption = "Аквафор"; bg = "/img/categories/aquaphor1.png"; link="aquaphor"; break;
    case "Platinum-wasser": caption = "Platinum-wasser"; bg = "/img/categories/wasser1.png"; link="platinum-wasser"; break;
    case "Barier": caption = "Барьер"; bg = "/img/categories/barier1.png"; link="barier"; break;
    case "Others": caption = "Другие марки"; link="others"; break;
    default:break;
  }
  const text = "Фильтры " + caption;

  const categories = [
    {key:1, text:text , bg:"/img/categories/atoll.png", margin:"1.5rem", link:`/filters/${link}`},
    {key:2, text:"Комплекты картриджей" , bg:bg, bgStyle:"no-repeat center right", margin:"1.5rem", link:`/cartridges/${link}`},
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

                <CategoryItem key={item.key} text={item.text} margin={item.margin} link={item.link} bg={item.bg} bgStyle={item.bgStyle}/>

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

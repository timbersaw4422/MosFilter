import CategoryItem from "./categoryItem";
import { useRouter } from "next/router";

const PopularCategories = () => {

  const router = useRouter();

  return(
    <div className="categories">
      <h2 className="cartegories__title">Популярные категории</h2>
      <div className="categories-wrapper">
         <CategoryItem margin="1.3rem" link ="/installation/others" text="Установка фильтра в квартиру" bg="/img/category1.png"/>
         <CategoryItem margin="1.3rem" link ="/replacement/others" text="Замена картриджей" bg="/img/category2.png"/>     
         <CategoryItem text="Установка фильтров для бизнеса" link ="/forbusiness" bg="/img/category3.png"/>
         <CategoryItem text="Ремонт фильтров" link ="/repair/others" bg="/img/category4.png"/>
      </div>






      <style jsx>{`
         .categories-wrapper{
           display:flex;
           align-items:center;
           justify-content:space-between;
           flex-wrap:wrap;
         }

         .cartegories__title{
           font-weight: 600;
           font-size: 20px;
           color: #424242;
           margin-bottom:3rem;
         }

         @media screen and (max-width:700px){
           .cartegories__title{
             text-align:Center;
             margin-bottom:4rem;
           }
         }

      `}</style>
    </div>
  )
}

export default PopularCategories;

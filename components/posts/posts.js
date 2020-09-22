import {useState} from "react";
import PostItems from "./postItems";


const Posts = () => {

  const postClasses = ["posts__nav-item"];
  const instructionClasses = ["posts__nav-item"];

  const [activeCategory, setActiveCategory] = useState("posts");
  if (activeCategory === "posts") postClasses.push("active-category");
  else instructionClasses.push("active-category");

  return(
    <div className="posts">
       <h2 className="posts__title">«Мос — фильтр»  |  Полезные статьи</h2>
       <p className="posts__subtitle">В этом разделе вы сможете найти полезную информацию,
       а так же советы по установке и обслуживании фильтров. </p>
       <div className="posts__nav">
         <p className={postClasses.join(" ")} onClick={() => setActiveCategory("posts")}>Статьи</p>
         <p className={instructionClasses.join(" ")} onClick={() => setActiveCategory("instructions")}>
         Инструкции по обслуживанию фильтров</p>
       </div>
       <PostItems />




       <style jsx>{`
          .posts__title{
            font-weight: 600;
            font-size: 24px;
            margin:4rem 0;
            color: #424242;
          }

          .posts__subtitle{
            font-size: 14px;
            line-height: 19px;
            color: #424242;
            margin-bottom:7rem;
            width:100%;
            max-width:47rem;
          }

          .posts__nav{
            display:flex;
            align-items:center;
          }

          .posts__nav-item{
            font-weight: 600;
            font-size: 14px;
            color: #424242;
            margin-right:5rem;
            padding-bottom:1rem;
            cursor:pointer;
          }

          .active-category{
            border-bottom:2px solid #4862D2;
          }

       `}</style>
    </div>
  )
}

export default Posts;

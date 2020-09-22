import Link from "next/link"

const PostPath = ({category}) => {
  let caption;
  switch(category) {
    case "howToChooseFilter": caption = "Как правильно выбрать фильтр";break;
    case "cartridgeReplacement": caption = "Как часто менять картриджи?";break;

    default:break;
  }

  return(
    <p className="post-path">
       <Link href="/"><a className="active">Главная </a></Link>
       / &nbsp;
       <Link href="/posts"><a className="active">Статьи </a></Link>
       / &nbsp;
       <span>{caption}</span>
       <Link href="/posts"><a className="to-posts">К списку статей</a></Link>

       <style jsx>{`
         .post-path{
           margin-top:3.7rem;
           font-size: 12px;
           line-height: 16px;
           color: #424242;
           border-bottom:1px solid #DDDDDD;
           padding-bottom:1.8rem;
         }

         .active{
           color: #4862D2;
           text-decoration:none;
         }

          .to-posts{
            float:right;
            font-weight: 600;
            font-size: 14px;
            color: #424242;
            text-decoration:none;
          }

          @media screen and (max-width:700px){
            .post-path{
              margin-top:0;
            }
          }

          @media screen and (max-width:500px){
            .to-posts{
              display:none;
            }
          }


       `}</style>
    </p>
  )
}
export default PostPath;

import Link from "next/link";

const Path = ({category}) => {
  let caption;
  switch(category) {
    case "Atoll": caption = "Атолл";break;
    case "Geizer": caption = "Гейзер";break;
    case "Aquaphor": caption = "Аквафор";break;
    case "Platinum-wasser": caption = "Platinum-wasser";break;
    case "Barier": caption = "Барьер";break;
    case "Others": caption = "Другие марки";break;
    case "about": caption = "О компании";break;
    case "reviews": caption = "Отзывы";break;
    default:break;
  }

  return(
    <p className="path">
       <Link href="/"><a className="active">Главная </a></Link>
       / &nbsp;
       <span>{caption}</span>

       <style jsx>{`
         .path{
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
       `}</style>
    </p>
  )
}

export default Path;

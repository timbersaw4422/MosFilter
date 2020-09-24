import Link from "next/link";

const GoodPath = ({categoryName, categoryId, goodTitle, goodSubtitle}) => {
  let name; let id; let group; let groupLink;

  switch (categoryName){
    case "atoll" : name="Атолл"; break;
    case "geizer" : name="Гейзер"; break;
    case "aquaphor" : name="Аквафор"; break;
    case "platinum-wasser" : name="Platinum-wasser"; break;
    case "barier" : name="Барьер"; break;
    case "others" : name="Другие марки"; break;
    default:break;
  }

  switch (categoryId){
    case 0 : group="Фильтры"; groupLink="/filters/atoll"; break;
    case 1 : group="Фильтры"; groupLink="/filters/geizer"; break;
    case 2 : group="Комплекты картриджей"; groupLink="/cartridges/atoll"; break;
    case 3 : group="Комплекты картриджей"; groupLink="/cartridges/geizer"; break;
    case 4 : group="Комплекты картриджей"; groupLink="/cartridges/aquaphor"; break;
    case 5 : group="Комплекты картриджей"; groupLink="/cartridges/platinum-wasser"; break;
    case 6 : group="Комплекты картриджей"; groupLink="/cartridges/barier"; break;
    case 7 : group=""; break;
    default:break;
  }

  const categoryLink = `/categories/${categoryName}`;


  return(
    <>
    <p className="good-path">
        <Link href="/"><a className="active"> Главная / </a></Link>
        <Link href="/categories/[category]" as={categoryLink} ><a className="active"> {name} / </a></Link>
        {group ? <Link href={groupLink}><a className="active"> {group} / </a></Link> : null}
        {goodSubtitle + " " + goodTitle}
    </p>

    <style jsx>{`
        .good-path{
          margin-top:3.7rem;
          font-size: 12px;
          line-height: 16px;
          color: #424242;
          border-bottom:1px solid #DDDDDD;
          padding-bottom:1.8rem;
          margin-bottom:2rem;
        }

        .active{
          color: #4862D2;
          text-decoration:none;
        }

        @media screen and (max-width:1100px){
          .good-path{
            margin-top:0rem;
          }
        }
    `}</style>
    </>
  )
}

export default GoodPath

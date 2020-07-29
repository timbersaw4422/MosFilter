import AsideNavItem from "./asideNavItem";

const AsideNav = () => {

  const asideNavItems = [
    {id:1, text:"Atoll", link:"/categories/atoll"},
    {id:2, text:"Гейзер",link:"/categories/geizer"},
    {id:3, text:"Аквафор", link:"/categories/aquaphor"},
    {id:4, text:"Platinum Wasser", link:"/categories/platinum-wasser"},
    {id:5, text:"Барьер", link:"/categories/barier"},
    {id:6, text:"Другие марки", link:"/categories/others"}
  ]

  return(
    <div className="aside-nav">
       <h3 className="aside-nav__caption">Бренды</h3>
       {asideNavItems.map(item => <AsideNavItem key = {item.id} text={item.text} link={item.link}/>)}



       <style jsx>{`
          .aside-nav__caption{
            font-weight: 600;
            font-size: 16px;
            color: #424242;
            margin-top:0;
          }
       `}</style>
    </div>
  )
}

export default AsideNav;

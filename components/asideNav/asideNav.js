import AsideNavItem from "./asideNavItem";

const AsideNav = () => {

  const asideNavItems = [
    {id:1, text:"Atoll"},
    {id:2, text:"Гейзер"},
    {id:3, text:"Аквафор"},
    {id:4, text:"Аквабрайт"},
    {id:5, text:"Барьер"},
    {id:6, text:"Raifil"},
    {id:7, text:"Новая вода"},
    {id:8, text:"Wise Watter"},
    {id:9, text:"Platinum Wasser"},
    {id:10, text:"Ecosoft"},
  ]

  return(
    <div className="aside-nav">
       <p className="aside-nav__caption">Марка фильтра</p>
       {asideNavItems.map(item => <AsideNavItem key = {item.id} text={item.text}/>)}



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

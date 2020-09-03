import AsideNavItem from "./asideNavItem";

const AsideNav = () => {

  const asideNavItems = [
    {id:1, text:"Atoll", link:"/categories/atoll",
    subLinks:[
         {id:1, text:"Комплекты картриджей", link:"/cartridges/atoll"},
         {id:2, text:"Замена картриджей", link:"/replacement/atoll"},
         {id:3, text:"Ремонт фильтра", link:"/repair/atoll"},
         {id:4, text:"Фильтры для воды", link:"/filters/atoll"},
         {id:5, text:"Установка фильтра", link:"/installation/atoll"}
      ]
    },
    {id:2, text:"Гейзер",link:"/categories/geizer",
    subLinks:[
         {id:1, text:"Комплекты картриджей", link:"/cartridges/geizer"},
         {id:2, text:"Замена картриджей", link:"/replacement/geizer"},
         {id:3, text:"Ремонт фильтра", link:"/repair/geizer"},
         {id:4, text:"Фильтры для воды", link:"/filters/geizer"},
         {id:5, text:"Установка фильтра", link:"/installation/geizer"}
      ]
    },
    {id:3, text:"Аквафор", link:"/categories/aquaphor",
    subLinks:[
         {id:2, text:"Комплекты картриджей", link:"/cartridges/aquaphor"},
         {id:3, text:"Замена картриджей", link:"/replacement/aquaphor"},
         {id:4, text:"Ремонт фильтра", link:"/repair/aquaphor"},
         {id:5, text:"Установка фильтра", link:"/installation/aquaphor"}
      ]
    },
    {id:4, text:"Platinum Wasser", link:"/categories/platinum-wasser",
    subLinks:[
         {id:2, text:"Комплекты картриджей", link:"/cartridges/platinum-wasser"},
         {id:3, text:"Замена картриджей", link:"/replacement/platinum-wasser"},
         {id:4, text:"Ремонт фильтра", link:"/repair/platinum-wasser"},
         {id:5, text:"Установка фильтра", link:"/installation/platinum-wasser"}
      ]
    },
    {id:5, text:"Барьер", link:"/categories/barier",
    subLinks:[
         {id:2, text:"Комплекты картриджей", link:"/cartridges/barier"},
         {id:3, text:"Замена картриджей", link:"/replacement/barier"},
         {id:4, text:"Ремонт фильтра", link:"/repair/barier"},
         {id:5, text:"Установка фильтра", link:"/installation/barier"}
      ]
    },
    {id:6, text:"Другие марки", link:"/categories/others",
    subLinks:[
         {id:3, text:"Замена картриджей", link:"/replacement/others"},
         {id:4, text:"Ремонт фильтра", link:"/repair/others"},
         {id:5, text:"Установка фильтра", link:"/installation/others"}
      ]
    }
  ]

  return(
    <div className="aside-nav">
       <h3 className="aside-nav__caption">Бренды</h3>
       {asideNavItems.map(item => <AsideNavItem key = {item.id} text={item.text} link={item.link} subLinks={item.subLinks || null}/>)}



       <style jsx>{`
           .aside-nav{
            position:relative;
            z-index:99;
           }

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

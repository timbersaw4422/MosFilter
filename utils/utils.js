import Cookies from "js-cookie";


export function setGoodsCookie(id, count){
  const isCookieExists = Cookies.get('goods') ? true : false;

  if (!isCookieExists) Cookies.set('goods', [{id,count}] , { expires: 1 });

  else {
    let isGoodAlreadyInCart = false;
    const goods = JSON.parse(Cookies.get('goods'));

    for (let good of goods){
      if (good.id === id) {
        good.count += count;
        isGoodAlreadyInCart = true;
      }
    }

    if (!isGoodAlreadyInCart) goods.push({id, count});

    console.log(goods);
    Cookies.set('goods', goods, { expires: 1 });
  }

}

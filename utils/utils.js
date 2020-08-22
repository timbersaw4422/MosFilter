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

    Cookies.set('goods', goods, { expires: 1 });
  }
}


export function setCookieByCartPlusMinus(id, num){
  const goods = JSON.parse(Cookies.get('goods'));
  for (let good of goods){
    if (good.id === id) {
      good.count += num;
    }
  }
  Cookies.set('goods', goods, { expires: 1 });
}

export function setCookieByRemoveItem(id){
  const goods = JSON.parse(Cookies.get('goods'));
  const newGoods = goods.filter(good => good.id !== id);
  Cookies.set('goods', newGoods, { expires: 1 });
}

export function clearCookie(){
  Cookies.set('goods', [], { expires: 1 });
}

export function getGoodsCookies(){
  if (Cookies.get('goods')) return JSON.parse(Cookies.get('goods')) ;
  Cookies.set('goods', [], { expires: 1 });
  return JSON.parse(Cookies.get('goods'));
}

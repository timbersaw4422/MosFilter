export function setGoodToLocalStorage(id, count){

  if(!localStorage.getItem("goods")){
    const good = {id, count}
    localStorage.setItem("goods", JSON.stringify([good]));
  }

  else {

    const good = {id, count}
    const allGoods = JSON.parse(localStorage.getItem("goods"));
    let isGoodAlreadyInCart = false;

    for (let item of allGoods){
      if (item.id === good.id) {
        item.count += good.count;
        isGoodAlreadyInCart=true;
      }
    }

    if (!isGoodAlreadyInCart) {
      allGoods.push(good);
    }

    localStorage.setItem("goods", JSON.stringify(allGoods));
  }
}


export function getCartCount(){
  const goods = JSON.parse(localStorage.getItem("goods"));
  return goods.length || 0;
}

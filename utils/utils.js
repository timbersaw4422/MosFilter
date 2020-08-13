export function setGoodsCookie(id, count){
  const cookieArr = document.cookie.split(";");

  let isCookieAlreadyExists = false;
  let isGoodAlreadyExists = false;

  for (let item of cookieArr){
    if (item.indexOf('goods') + 1) {
      item = item.replace("goods=", "");
      isCookieAlreadyExists = true;
      const cookie = JSON.parse(item);
      for (let i of cookie){
        if (i.id === id ) {
          i.count+=count;
          isGoodAlreadyExists=true;
          document.cookie = `goods=${JSON.stringify(cookie)}`;
        }
      }

      if (!isGoodAlreadyExists){
        cookie.push({id, count});
        document.cookie = `goods=${JSON.stringify(cookie)}`;
      }
    }
  }

  if (!isCookieAlreadyExists) {
    const good = JSON.stringify([{id, count}]);
    document.cookie = `goods=${good}`;
  }

}


export function getCartCount(){
  const cookieArr = document.cookie.split(";");
  for (let item of cookieArr){
    if (item.indexOf('goods') + 1) {
      item = item.replace("goods=", "");
      const cookie = JSON.parse(item);
      return cookie.length;
    }
  }
  return 0;  
}

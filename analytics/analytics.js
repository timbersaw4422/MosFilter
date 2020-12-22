export function initAnalytics(){
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
 m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
 (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");


   window.ym(70667698, "init", {
      defer: true,
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
   });
}

export function reachGoal(stringId){
  if (window.yaCounter70667698) window.yaCounter70667698.reachGoal(stringId);
}

export function hit(path){
  if (window.yaCounter70667698) window.yaCounter70667698.hit(path);
}

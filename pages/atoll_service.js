import Router from "next/router";
import {useEffect} from "react";

export default function atoll_service(){

  useEffect(() => {
    Router.push("/atoll");
  }, []);

  return(
    <>
    <p>Подождите, идет перенаправление на нужную страницу</p>
    <style jsx>{`
      p{
        text-align:center;
        padding-top:100px;
        font-size:30px;
      }
      `}</style>
    </>
  )
}

import Router from "next/router";
import {useEffect} from "react";

export default function geizer_service(){

  useEffect(() => {
    Router.push("/geizer");
  }, []);

  return(
    <>
    <p>Подождите, идет перенаправление на нужную страницу</p>
    <style jsx>{`
      p{
        text-aligh:center;
        padding-top:100px;
      }
      `}</style>
    </>
  )
}

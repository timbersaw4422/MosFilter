import {useState} from "react";
import GoodTab from "./goodTab";

const GoodBottom = ({good}) => {

  const [activeTab, setActiveTab] = useState(1);
  let html = "";

  const composition = good.composition ? good.composition.split("br/").map(str =>  (<p key = {Math.random()} className="good__text-field">{str}</p>)) : "";
  const longDesc = good.longDesc ? good.longDesc.split("br/").map(str =>  (<p key = {Math.random()} className="good__text-field">{str}</p>)) : "";
  const characteristics = good.characteristics ? good.characteristics.split("br/").map(str => {
    const styles={margin:"1rem 0"};
    if (str[0] === "b") {
      str=str.replace("b","");
      styles.fontWeight="bold";
      styles.margin="2rem 0";
      styles.fontSize="16px";
    }
    return (<p key = {Math.random()} style={styles} className="good__text-field">{str}</p>)
  }) : "";

  switch (activeTab) {
    case 1 : html=longDesc;break;
    case 2 : html=composition;break;
    case 3 : html=characteristics;break;
    default:break;
  }



  return(
    <>
    <div className="good-bottom">
      <div className="good-nav">
          <GoodTab tab = {1} text ="Описание товара" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <GoodTab tab = {2} text ="Состав комплекта" activeTab={activeTab} setActiveTab={setActiveTab}/>
          <GoodTab tab = {3} text ="Характеристики" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
      <div className="good__text-wrap">{html}</div>
    </div>


    <style jsx>{`
        .good-nav{
          display:flex;
          align-items:center;
        }

        .good__text-wrap{
          width:100%;
          padding:4rem;
          border: 1px solid #E3E3E3;
          font-size: 14px;
          line-height: 19px;
          color: #000000;
        }

        @media screen and (max-width:600px){
          .good__text-wrap{
            padding:1rem;
          }
        }
    `}</style>
    </>
  )
}

export default GoodBottom;

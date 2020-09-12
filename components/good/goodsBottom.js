import {useState} from "react";

const GoodBottom = ({good}) => {

  const [activeTab, setActiveTab] = useState(1);
  let html = "";

  const composition = good.composition.split("br/").map(str =>  (<p key = {Math.random()} className="good__text-field">{str}</p>));
  const longDesc = good.longDesc.split("br/").map(str =>  (<p key = {Math.random()} className="good__text-field">{str}</p>));
  const characteristics = good.characteristics.split("br/").map(str =>  (<p key = {Math.random()} className="good__text-field">{str}</p>));

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
          <div className="good__button" onClick={() => setActiveTab(1)}>Описание товара</div>
          <div className="good__button" onClick={() => setActiveTab(2)}>Состав комплекта</div>
          <div className="good__button" onClick={() => setActiveTab(3)}>Характеристики</div>
      </div>
      <div className="good__text-wrap">{html}</div>
    </div>


    <style jsx>{`
        .good-nav{
          display:flex;
          align-items:center;
        }

        .good__button{
          background: linear-gradient(180deg, #FFFFFF 0%, #F5F5F5 100%), #FFFFFF;
          border: 1px solid #E3E3E3;
          box-sizing: border-box;
          width:18rem;
          max-width:33.33%;
          height:6rem;
          display:flex;
          align-items:center;
          justify-content:center;
          cursor:pointer;
        }

        .good__text-wrap{
          width:100%;
          padding:4rem;
          border: 1px solid #E3E3E3;
          font-size: 14px;
          line-height: 19px;
          color: #000000;
        }
    `}</style>
    </>
  )
}

export default GoodBottom;

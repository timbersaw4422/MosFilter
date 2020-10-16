import ChoiseOption from "./option";
import {useState} from "react";

const CalculatorChoise = ({title, placeholder, options, setOption}) => {

  const [dropDownValue, setDropDownValue] = useState("");
  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [activeId, setActiveId] = useState(1);

  const arrowRotate = isDropDownOpen ? 180 : 0;
  const scaleOptions = isDropDownOpen ? 1 : 0;

  const dropDownClickHandler = () => {
    setDropDownOpen(!isDropDownOpen);
  }

  const optionClickHandler = (text, id) => {
    setDropDownValue(text);
    setActiveId(id);
  }

  return(
    <div className="calculator__choise" onClick = {dropDownClickHandler}>
        <p className="choise__title">{title}</p>
        <div className="choise__input">
          <span className="input__current-value">{dropDownValue || placeholder}</span>
          <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.2118 4.856C3.24391 4.90041 3.28688 4.93672 3.337 4.96181C3.38713 4.98689 3.4429 5 3.49953 5C3.55615 5 3.61192 4.98689 3.66205 4.96181C3.71217 4.93672 3.75514 4.90041 3.78725 4.856L6.9375 0.522964C6.97396 0.472987 6.99534 0.414449 6.99932 0.353711C7.0033 0.292973 6.98972 0.232358 6.96007 0.178452C6.93041 0.124546 6.8858 0.0794107 6.8311 0.0479494C6.77639 0.0164882 6.71368 -9.54414e-05 6.64977 4.13189e-07H0.349279C0.285519 0.000251199 0.223037 0.0170481 0.168553 0.0485847C0.114069 0.0801213 0.069643 0.125204 0.0400537 0.178986C0.0104645 0.232767 -0.00316886 0.293212 0.000619828 0.35382C0.00440851 0.414428 0.0254759 0.472905 0.0615563 0.522964L3.2118 4.856Z" fill="#3F3F3F"/>
          </svg>

          <div className="choise__options">

             {options.map(o => <ChoiseOption
               key={o.id}
               id = {o.id}
               text={o.text}
               changeHandler={optionClickHandler}
               activeId={activeId}
               setOption= {setOption}
               />)}

          </div>

        </div>




        <style jsx>{`
          .calculator__choise{
            margin-right:3rem;
            margin-bottom:3.7rem;
            position:relative;
          }

          .choise__options{
            position:absolute;
            width:100%;
            top:6.8rem;
            left:0;
            z-index:10;
            background: #FFFFFF;
            border: 1px solid #E3E3E3;
            border-top:none;
            transform:scaleY(${scaleOptions});
            transform-origin:top;
            transition:0.2s;
          }

          .choise__title{
            font-weight: 600;
            font-size: 13px;
            line-height: 16px;
            color: #424242;
            margin-top:0;
          }

          .choise__input{
            height:4rem;
            width:24rem;
            background: #FFFFFF;
            border: 1px solid #E3E3E3;
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding:0 1.4rem;
            cursor:pointer;
          }

          .input__current-value{
            font-size: 13px;
            line-height: 16px;
            color: #424242;
          }

          .choise__options .choise__option:last-child{
            bordeb-bottom:none;
          }

          svg{
            transform:rotate(${arrowRotate}deg);
            transition:0.3s;
          }

          @media screen and (max-width:1280px){
            .choise__input{
              width:100%;
            }
          }

          @media screen and (max-width:500px){
            .calculator__choise{
              margin-right:0;
            }
          }

        `}</style>
    </div>
  )
}

export default CalculatorChoise;

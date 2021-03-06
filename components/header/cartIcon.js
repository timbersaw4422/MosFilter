import {getCartCount} from "../../utils/utils";
import Router from "next/router";
import {useEffect, Component} from "react";
import {getGoodsCookies} from "../../utils/utils";

class CartIcon extends Component{

  constructor(props){
    super(props);

    this.state = {
      cartCount:0
    }
  }

  componentDidMount(){
    this.setState({cartCount:getGoodsCookies().length})
  }

  clickHandler = () => {
    Router.push("/cart").then(() => window.scrollTo (0, 0));
  }

  render(){

    const countClasses = ["cart-icon__count"];
    if (!this.state.cartCount){
      countClasses.push("opacity-0");
    }

    const iconBg = this.state.cartCount ? "#4862D2" : "#fff";
    const iconColor = this.state.cartCount ? "#fff" : "#4862D2";

    return(
      <div className="cart-icon" onClick={ this.clickHandler }>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H3.22222L3.66667 3.22222L1 1ZM5.44444 12.1111H16.5556L21 3.22222H3.66667L5.44444 12.1111ZM5.44444 12.1111L3.66667 3.22222L5.44444 12.1111ZM5.44444 12.1111L2.89667 14.6589C2.19667 15.3589 2.69222 16.5556 3.68222 16.5556H16.5556L5.44444 12.1111ZM16.5556 16.5556C15.9662 16.5556 15.401 16.7897 14.9842 17.2064C14.5675 17.6232 14.3333 18.1884 14.3333 18.7778C14.3333 19.3671 14.5675 19.9324 14.9842 20.3491C15.401 20.7659 15.9662 21 16.5556 21C17.1449 21 17.7102 20.7659 18.1269 20.3491C18.5437 19.9324 18.7778 19.3671 18.7778 18.7778C18.7778 18.1884 18.5437 17.6232 18.1269 17.2064C17.7102 16.7897 17.1449 16.5556 16.5556 16.5556ZM7.66667 18.7778C7.66667 19.3671 7.43254 19.9324 7.01579 20.3491C6.59905 20.7659 6.03381 21 5.44444 21C4.85507 21 4.28984 20.7659 3.8731 20.3491C3.45635 19.9324 3.22222 19.3671 3.22222 18.7778C3.22222 18.1884 3.45635 17.6232 3.8731 17.2064C4.28984 16.7897 4.85507 16.5556 5.44444 16.5556C6.03381 16.5556 6.59905 16.7897 7.01579 17.2064C7.43254 17.6232 7.66667 18.1884 7.66667 18.7778V18.7778Z" stroke={iconColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

        <div className={countClasses.join(" ")}>{this.state.cartCount}</div>


        <style jsx>{`
          .cart-icon{
            width:40px;
            height:40px;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:Center;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
            position:relative;
            cursor:pointer;
            background:${iconBg};
          }

          .cart-icon__count{
            position:absolute;
            width:20px;
            height:20px;
            border-radius:50%;
            left:0;
            bottom:-5px;
            background: #FFFFFF;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
            display:flex;
            align-items:center;
            justify-content:Center;
            font-weight: 600;
            font-size: 13px;
            color: #424242;
            transition:0.5s;
          }

          .opacity-0{
            opacity:0;
          }

          @media screen and (max-width:700px){
            .cart-icon{
              position:fixed;
              bottom:20px;
              right:10px;
              z-index:99;
              width:50px;
              height:50px;
              margin-right:0;
            }
          }
        `}</style>
      </div>
    )
  }

}

export default CartIcon;

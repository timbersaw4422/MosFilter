const Brands = () =>{


  return(
    <div className="brands">
      <img src="./img/brands/brand1.png" alt="auafor" className="brand-item"/>
      <img src="./img/brands/brand2.png" alt="atoll" className="brand-item"/>
      <img src="./img/brands/brand3.png" alt="geizer" className="brand-item"/>
      <img src="./img/brands/brand4.png" alt="barier" className="brand-item"/>


      <style jsx>{`


         .brands{
           margin-top:3.5rem;
           display:flex;
           justify-content:space-around;
           align-items:center;
         }
      `}</style>
    </div>
  )
}

export default Brands;

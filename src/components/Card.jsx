import React from 'react'
import { Link} from 'react-router-dom'
import { useState } from 'react'
  
const Card = ( {product}) => {
  
  const [clicked,setClicked]=useState(false)

     let desc=product.description.slice(0,150)
     function toggleShow(){
          if(clicked){
            setClicked(false)
          }
          else{
            setClicked(true)
          }
     }

  return (
  <div className="col-6 col-sm-4 col-lg-3"> 
      <div className="card">
      <img src={`/images/${product.category}/${product.img}`} className="card-img-top img-fluid" style={{ width: "100%",  height: "15rem", objectFit:"contain"}} alt=".."/>
      <div className="card-body">
        <p className="card-text">{ clicked?product.description:`${desc}......`}</p>
        <button className='border-0' style={{backgroundColor:"transparent",color:"blue" }} onClick={toggleShow}>{clicked?'less':'more'}</button>
        <p>{product.price}</p>
        <Link to={`/product/${product.id}`} className="btn btn-primary">More</Link>
      </div>
    </div>   
       </div>
  )
}

export default Card
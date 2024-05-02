import React from 'react'
import Card from 'src/components/Card'
// import obj from  'src/products.json'  
import { useState, useEffect } from 'react';

const Cards = ({category}) => {
  const [product, setProduct] = useState({});
  const[loading,setLoading]=useState(true)
  useEffect(() => {
    const fetchProducts= async ()=>{
      try{
        const res = await fetch(`http://localhost:8000/${category}`)
        const data = await res.json()
       
        setProduct(data)

      }catch(error){
         console.log('Error fetching data',error)
      }finally{
        setLoading(false)
      }
    }
    fetchProducts()
  }, []);

  return (
    <div className='container mt-3'>
      
        <h3 className=' text-center'>{category} section </h3>
            <div className="row mb-3">

             { loading? ``:product.map((e)=>{
                return <Card key={e.id} product={e}/>
             })}
            
              
   </div>
        
 
    </div>
  )
}

export default Cards
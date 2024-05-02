import React from 'react'
import { useParams,useNavigate,Link,useLoaderData  } from 'react-router-dom';
const ProductPage = () => {
    const { id } = useParams();
  const data1=useLoaderData()
  let arr;
  let arr1=[];
  let productObj;

  const navigate = useNavigate();
  const deleteProduct=()=>{
        fetch(`http://localhost:8000/${productObj.category}/${id}`,{
           method:'DELETE' ,
        }
            
        ).then((response)=>response.json())
   
    navigate('/products', { replace: true });
    
  }

  const handleClick = () => {

    navigate('/products', { replace: true });
  };
  

     arr=Object.entries(data1).map(([key, value]) => {
        return value
      });
      for(var i = 0; i < arr.length; i++)
{
    arr1 = arr1.concat(arr[i]);
}
productObj=arr1.find((obj) => obj.id === id);
  return (
    <>
   <div className='container px-5 py-5 py-sm-0 px-sm-0'>
        <button className='border-0' style={{backgroundColor:'transparent'}} onClick={handleClick}><img src='/images/back-arrow.png' style={{height:'3em',width:'4em'}}/>back</button>
      
        <div className='row mt-4' style={{backgroundColor:'#ffffff'}}>
            <div className='col-12 col-sm-6  col-md-6 col-lg-4'><img src={`/images/${productObj.category}/${productObj.img}`}  style={{height:'18em',width:'18em'}}/></div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-8'>
                <div>{productObj.description}</div>
                <div><img src='/images/5-star.jpg' style={{height:'1.5em',width:'8em'}}/></div>
                <div>{productObj.price}</div>
                <hr></hr>
                <div className='mb-2'><span className='me-5'>color:</span> <button className='btn btn-outline-danger'>{productObj.color}</button></div>
                <div className='mb-2'><span className='me-5'>{productObj.size!=undefined?'size':'storage'}:</span>  <button className='btn btn-outline-danger me-1'>{productObj.size!=undefined?`${productObj.size[0]}`:`${productObj.storage[0]}`}</button><button className="btn btn-outline-secondary me-1">{productObj.size!=undefined?`${productObj.size[1]}`:`${productObj.storage[1]}`}</button><button className="btn btn-outline-secondary">{productObj.size!=undefined?`${productObj.size[2]}`:`${productObj.storage[2]}`}</button></div>
                <div className='mb-2'><span className='me-5'>Qty:</span>   <button  type="button" className='border-0 me-1'>-</button><button className='border-0 me-1'>1</button><button className='border-0'>+</button></div>
                <div className='mb-2'><button className='rounded me-2' style={{backgroundColor:"#ffa215",color:'white'}}>Add to cart</button><button className='rounded' style={{backgroundColor:"#dd3131",color:'white'}}>Buy Now</button></div>
                <div className='mb-2'><Link to={`/edit/${productObj.id}`}><button className='rounded me-2' style={{backgroundColor:"green",color:'white'}}>Update</button></Link><button className='rounded' style={{backgroundColor:"red",color:'white'}} onClick={deleteProduct}>Delete</button> </div>
                <div className='mb-2 d-flex'><span className='me-5'>Payment:</span><div className='d-flex'><div className='me-2'><img src='/images/paypal.png' style={{height:'2em',width:'3em'}}/></div><div className='me-2'><img src='/images/mpesa.png' style={{height:'2em',width:'3em'}}/></div><div className='me-2'><img src='/images/discover.png' style={{height:'2em',width:'3em'}}/></div><div className='me-2'><img src='/images/amex.png' style={{height:'2em',width:'3em'}}/></div><div ><img src='/images/mastercard.png' style={{height:'2em',width:'3em'}}/></div></div></div>
            </div>
        </div>
        <div>
            <h4>Specification</h4>
            <div>
                {Object.entries(productObj.specification).map(([key, value]) => {
   
    return  <div key={key} className='row'>
    <div className='col  mb-2 me-2' style={{backgroundColor:'#f5f5f5'}}>{key}</div>
    <div className='col  mb-2 ' style={{backgroundColor:'#f5f5f5'}}>{value}</div>
</div>
   
})}

            </div>
        </div>
    </div>
    
    </>
  )
}

export default ProductPage


export const loaderFunction = async ()=>{
  let data;
  try{
        
    const request1 = await fetch(`http://localhost:8000/shoes`).then(response => response.json());
    const request2 = await fetch(`http://localhost:8000/computers`).then(response => response.json());
    const request3 = await fetch(`http://localhost:8000/phones`).then(response => response.json());
 data= await Promise.all([request1, request2,request3])


.catch(error => {
console.error(error);
});

  }catch(error){
     console.log('Error fetching data',error)
  }
  return data
   

}
import React from 'react'
import { useState } from 'react'
import { useNavigate,useParams,useLoaderData } from 'react-router-dom'

const EditPage = () => {
    const [file, setFile] = useState()
    const navigate = useNavigate();
    const { id } = useParams();
  const data1=useLoaderData()

  let arr;
  let arr1=[];
  let productObj;

       const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value});
        };


        
            arr=Object.entries(data1).map(([key, value]) => {
               return value
             });
             for(var i = 0; i < arr.length; i++)
        {
           arr1 = arr1.concat(arr[i]);
        }
        productObj=arr1.find((obj) => obj.id === id);


        const [formData, setFormData] = useState({
          price: productObj.price,
          color: productObj.color,
          category: productObj.category,
          description: productObj.description,
          size1: productObj.size[0],
          size2: productObj.size[1],
          size3: productObj.size[2],
          material: productObj.specification.material,
          brand: productObj.specification.brand,
          warranty: productObj.specification.warranty,
          condition: productObj.specification.condition,
          });
        
             
     
         
       
           
       
    // Convert to Base64 
    let newFile; 
    if(file!==undefined){
         newFile = file.name.toString('base64'); 
    }


    function handleChange(event) {
      setFile(event.target.files[0])
    }
   
  
   
    const handleSubmit = (e) => {
        e.preventDefault(); 
        const obj={
            img:newFile,
            category:formData.category,
            color:formData.color,
            description:formData.description,
            price:formData.price,
            size:[formData.size1,formData.size2,formData.size3],
            specification:{
                condition:formData.condition,
                material:formData.material,
                warranty:formData.warranty,
                brand:formData.brand

            }

        }
        
        fetch(`http://localhost:8000/${formData.category}/${id}`, {
            method: 'PATCH',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
        }).then(res=>res.json())

        
        navigate('/', { replace: true });
      };
  return (
    <>
    <div className='container'>
 <form action="" method="get" className="form-example" >

    <div className='d-flex'>
        <div>
        <div className="form-example d-flex flex-column">
<label htmlFor="price">Enter price: </label>
<input type="text" name="price" id="price" required value={formData.price} onChange={handleInputChange} />
</div>
<div className="form-example  d-flex flex-column">
<label htmlFor="color">Enter color: </label>
<input type="text" name="color" id="color" required value={formData.color} onChange={handleInputChange} />
</div>
<div className="form-example  d-flex flex-column">
<label htmlFor="category">Enter category: </label>
<input type="text" name="category" id="category" required value={formData.category} onChange={handleInputChange} />
</div>
<div className="form-example  d-flex flex-column">
<label htmlFor="description">Description:</label>

<textarea id="description" name="description" rows="5" cols="33" value={formData.description} onChange={handleInputChange} >

</textarea>
</div>
<div className="form-example  d-flex flex-column">
<label htmlFor="image">Upload file: </label>
<input type="file" onChange={handleChange}/>
</div>
        </div>
        <div className=' ms-5'>
        <div className="form-example   d-flex flex-column ">
<label  htmlFor="size1">Enter size1: </label>
<input  type="text" name="size1" id="size1" required value={formData.size1} onChange={handleInputChange} />
</div>
<div className="form-example  d-flex flex-column">
<label htmlFor="size2">Enter size2: </label>
<input  type="text" name="size2" id="size2" required value={formData.size2} onChange={handleInputChange}  />
</div>
<div className="form-example  d-flex flex-column">
<label htmlFor="size3">Enter size3: </label>
<input  type="text" name="size3" id="size3" required value={formData.size3} onChange={handleInputChange} />
</div>
<div className="form-example  d-flex flex-column">
<label htmlFor="material">Enter material: </label>
<input type="text" name="material" id="material" required value={formData.material} onChange={handleInputChange}  />
</div>
<div className="form-example  d-flex flex-column">
<label htmlFor="brand">Enter brand: </label>
<input type="text" name="brand" id="brand" required  value={formData.brand} onChange={handleInputChange}  />
</div>
<div className="form-example  d-flex flex-column">
<label htmlFor="warranty">Enter warranty: </label>
<input  type="text" name="warranty" id="warranty" required value={formData.warranty} onChange={handleInputChange}  />
</div>
<div className="form-example  d-flex flex-column">
<label htmlFor="color">Enter condition: </label>
<input  type="text" name="condition" id="condition" required value={formData.condition} onChange={handleInputChange} />
</div>
        </div>
    </div>


<div className="form-example">
<button onClick={handleSubmit}>submit</button>
</div>
</form>

</div>
</>

  )
}

export default EditPage

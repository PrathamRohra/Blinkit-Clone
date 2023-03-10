import { useState } from "react";

export default function CreateProduct() {
    const [name, setName] = useState('');
    const [weight, setWeight] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [prodCategory, setProdCategory] = useState('');
    const [file, setFile] = useState('');
    const [shelfLife, setShelfLife] = useState('');
    const [country, setCountry] = useState('');
    const [features, setFeatures] = useState('');

    function createProd(e){
        e.preventDefault();
        console.log(name, weight, file)
    }

    return (
        <form className="p-10" onSubmit={createProd}>
             {/*Title*/}
                <input name="title" 
                placeholder="Title or Name" 
                className="block w-10/12 outline outline-slate-600 focus:outline-dashed rounded-md h-10 p-3 m-4 -mt-4"
                value={name} onChange={(e)=>setName(e.target.value)}
                />

                <input name="qty" 
                placeholder="Weight / Qty" 
                className="block w-10/12 outline outline-slate-600 focus:outline-dashed rounded-md h-10 p-3 m-4"
                value={weight} onChange={(e)=>setWeight(e.target.value)}
                />
                <input name="price" 
                placeholder="Price in Rs." 
                className="block w-10/12 outline outline-slate-600 focus:outline-dashed rounded-md h-10 p-3 m-4"
                value={price} onChange={(e)=>setPrice(e.target.value)}
                />
                <input name="stock" 
                placeholder="Stock" 
                className="block w-10/12 outline outline-slate-600 focus:outline-dashed rounded-md h-10 p-3 m-4"
                value={stock} onChange={(e)=>setStock(e.target.value)}
                />
                <input name="category" 
                placeholder="Product Category" 
                className="block w-10/12 outline outline-slate-600 focus:outline-dashed rounded-md h-10 p-3 m-4"
                value={prodCategory} onChange={(e)=>setProdCategory(e.target.value)}
                />
                <input name="shelf life" 
                placeholder="Shelf Life" 
                className="block w-10/12 outline outline-slate-600 focus:outline-dashed rounded-md h-10 p-3 m-4"
                value={shelfLife} onChange={(e)=>setShelfLife(e.target.value)}
                />
                <input name="coo" 
                placeholder="Country Of Origin" 
                className="block w-10/12 outline outline-slate-600 focus:outline-dashed rounded-md h-10 p-3 m-4"
                value={country} onChange={(e)=>setCountry(e.target.value)}
                />
                {/*Summary*/}
                <input type="features" 
                placeholder="Key Features" 
                className="block w-10/12 outline outline-slate-600 focus:outline-dashed rounded-md h-10 p-3 m-4"
                value={features} onChange={(e)=>setFeatures(e.target.value)}
                />
                {/*File*/}
                <input type="file" 
                placeholder="Upload a file" 
                className="block w-10/12 outline outline-slate-600 focus:outline-dashed rounded-md h-12 p-2 m-4"
                onChange={e => setFile(e.target.files)}
                 />
                

                <button className="w-10/12 h-10 m-4 -mt-4 bg-green-600 hover:bg-blue-400 text-white rounded-md">Create</button>
           </form>
  )
}

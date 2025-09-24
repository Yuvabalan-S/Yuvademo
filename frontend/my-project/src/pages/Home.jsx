import React ,{useState }from "react";
//import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
//import { addtocart,  } from '../assets/redux/cartSlice'; 
const Home = () => {
//const dispatch = useDispatch()
const navigate = useNavigate()
const categories =[
  "Electronics","Mobile","Fashion","Toys","Beauty","Furniture","Applainces"
]
   
  const sampleProducts = [
    {
      id:1,
      title:"smartphone",
      price:15000,
      categories:"Mobile",
      img:"https://www.bing.com/th/id/OIP.V8NVXODUkODhicTKe7MblAHaIL?w=182&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    },
     {
      id:2,
      title:"shoes",
      price:1500,categories:"Fashion",
      img:'https://www.bing.com/th/id/OIP.e3HUeHCLVgwEHB58hCwOrAHaLG?w=160&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
     },
     {
      id:3,
      title:"Headphoen",
      price:4000,
      categories:"Electronics",
      img:'https://th.bing.com/th/id/OIP.7u_N_M4BkNqq43DVaIB4TwHaE8?w=150&h=104&c=7&bgcl=c5bafc&r=0&o=6&pid=13.1'
    },
     {
      id:4,
      title:"washingMachine",
      price:15000,
      categories:"Applainces",
      img:'https://www.bing.com/th/id/OIP.lCUxdQnqI7LjcSnffnPMgQHaIh?w=209&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    },
     {
      id:5,
      title:"Laptop",
      price:15000,
      categories:'Electronics',
      img:'https://www.bing.com/th/id/OIP.okPHK-lOk_E5nzOZsGx2dwHaFI?w=267&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    },
    {
      id:6,
      title:"tv",
      price:25000,
       categories:"Applainces",
      img:'https://www.bing.com/th/id/OIP.-pfqtlC7FlpT1lffdZKPTwHaHa?w=198&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    },
    {
       id:7,
      title:"facewash",
      price:250,
      categories:'Beauty',
      img:'https://www.bing.com/th/id/OIP._MIqxXqG_jejGnrSuMpL0gHaHa?w=204&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
    },
  {
    id:8,
      title:"keyboard & Mouse",
      price:1500,
      categories:'Electronics',
      img:'https://www.bing.com/th/id/OIP._kFQcJV6esqjy2oqpqNU7AHaE8?w=285&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2'
  }

  ]

  const [selectedcategory,setSelectedCategory] = useState(null)

  const filterProducts = selectedcategory
  ?sampleProducts.filter((p)=>p.categories === selectedcategory):sampleProducts
  return (
     <div className="relative min-h-screen flex flex-col text-gray-800 
      bg-[url('https://www.bing.com/th/id/OIP.bYcsGshNggGldxceA-GJUQHaEJ?w=244&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2')] 
      bg-cover bg-center bg-no-repeat">
      
  <div className="absolute inset-0 backdrop-blur-[2px] bg-black/40 "></div>

  <div className="relative z-10 flex flex-col min-h-screen">
    
    <header className="text-white shadow-md p-4 text-xl font-bold">
      MyStore
    </header>

    <div className="flex gap-2 mx-auto p-4">
      {categories.map((c)=>(
        <button 
          key={c}
          onClick={()=>setSelectedCategory(selectedcategory === c ? null : c)}
          className="px-4 py-2 rounded-md text-sm font-medium bg-white/70 hover:bg-white transition"
        >
          {c}
        </button>
      ))}
    </div>
    
    <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {filterProducts.map((p)=>(
          <div key={p.id}
            className="bg-white/90 rounded-md shadow-sm hover:shadow-lg transition-shadow p-3">
            <div className="w-full h-32 flex items-center justify-center">
              <img src={p.img} alt={p.title} className="max-h-full hover:scale-130"/>
            </div>
            <div className="mt-1 text-lg font-semibold text-blue-600">{p.title}</div>
            <div className="mt-1 text-lg font-semibold text-blue-600">₹ {p.price}</div>
            <button 
              onClick={()=>navigate("/products")}
              className="mt-3 w-full bg-blue-600 text-white py-2 rounded-md text-sm">
              Go To Product
            </button>
          </div>
        ))}
        {filterProducts.length === 0 && (
    <div className="col-span-full flex flex-col items-center justify-center text-gray-200 py-10">
      <div className="w-8 h-8 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin mb-3"></div>
      <p className="text-lg font-semibold">Loading Data...</p>
    </div>
  )}

      </div>
    </main>

    <footer className="bg-white/80 border-t mt-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-600">
        <div>
          <h4 className="font-semibold mb-2">Shop</h4>
          <ul className="space-y-1">
            <li>Mobiles</li>
            <li>Electronics</li>
            <li>Appliances</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Help</h4>
          <ul className="space-y-1">
            <li>Payments</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Policy</h4>
          <ul className="space-y-1">
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact</h4>
          <div>support@example.com</div>
          <div className="mt-2">+91 80000 00000</div>
        </div>
      </div>

      <div className="text-center text-gray-500 py-4 border-t">
        {new Date().getFullYear()} MyStore — demo clone
      </div>
    </footer>
  </div>
</div>
  )}
export default Home;

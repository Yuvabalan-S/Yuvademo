



import axios from "axios";
//import { useSelector } from "react-redux";
//import { useNavigate } from "react-router";
  //// const user =useSelector((state)=>state.user.user)
  //const navigate = useNavigate()


const handleBuyNow = async (product ,navigate,user) => {
  if (!user) {
    alert("please login")
    navigate("/login");
    return;
  }

  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return;
  }

  const orderData = {
    products: [
      {
        productId: product._id,
        quantity: 1,
      },
    ],
    total: product.price,
    status: "Pending",
  };

  try {
    await axios.post("http://localhost:5005/api/order", orderData, {
      headers: { Authorization: `Bearer ${token}` },
    });
     alert("order placed")
     setTimeout(()=>{
      navigate("/order");
     },1000)
    
  } catch (error) {
    
    console.error("Order failed:", error);
  }
};
    

export default handleBuyNow;

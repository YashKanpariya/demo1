import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"


function Single_products() {
  const { id } = useParams();
  const [getchar, setchar] = useState([])
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        setchar(response.data)
        // console.log(response.data)
        console.log(getchar)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])
  return (
    <>

    {/* <div className=""></div> */}
      {/* <h1>{getchar.id}</h1>
      <h1>{getchar.brand}</h1> */}
      
      
      
    </>
  )
}
export default Single_products


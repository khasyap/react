import { useContext } from "react"
import Cards from "./cards"

function Service(){

//     const products=[{
//     productId:1,
//     productName:"asus tuf gaming",
//     productPrice:"50000",
//     imgurl:"https://dlcdnwebimgs.asus.com/gain/8b25250f-bf55-425f-93bd-b5d8e2744b3e/"
// },
// {
//     productId:2,
//     productName:"asus vivobook",
//     productPrice:"30000",
//     imgurl:"https://rukminim2.flixcart.com/image/704/844/l3929ow0/computer/x/r/r/vivobook-15-x1502za-bq501ws-laptop-asus-original-imageextyguf5gq8.jpeg?q=90&crop=false"

// }
// ]
var products=useContext(ProductContect);
console.log(products)

    return(
<>
<h1>Hello Services</h1>
    
    <div className="row">
       {
         products.map((p)=>(
             <div className="col-md-4" key={p.productId}>
           <Cards product={p}/> 
        </div>
         ))

       }
    </div>

</>

    )
}
export default Service
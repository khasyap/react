function Cards(props){
    return (
        <>
        <div className="card" >
            <div className="card-header" >
                <img src={props.product.imgurl} alt="" className="card-img-top" height="200px" />
            </div>
            <div className="card-body">
                <h1 className="card-title">
                    {props.product.productName}
                </h1>
                <h2>price:{props.product.productPrice}</h2>
            </div>
            <div className="card-footer">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </>
    )
}
export default Cards;
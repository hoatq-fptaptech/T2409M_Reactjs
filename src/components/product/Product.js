export default function Product(props){
    const price = props.price;
    const name = props.name;
    return (
        <div className="product">
            <h2>{name}</h2>
            <p>Giá: {price}$</p>
            <p>Mô tả ngắn</p>
            <button type="button">Add to cart</button>
        </div>
    );
}
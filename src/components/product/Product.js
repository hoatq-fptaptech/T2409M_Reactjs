export default function Product(props){
    const price = props.price;
    return (
        <div className="product">
            <h2>Tên sản phẩm</h2>
            <p>Giá: {price}$</p>
            <p>Mô tả ngắn</p>
            <button type="button">Add to cart</button>
        </div>
    );
}
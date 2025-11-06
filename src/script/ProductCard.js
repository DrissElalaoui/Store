
export default function ProductCard({title , img , bgc}) {
    return (
        <div style={{backgroundColor: bgc}} className="productCard">
            <div>
                <h1>{title}</h1>
                <button>Shop Now</button>
            </div>
            <img src={img} />
        </div>
    )
}
import ProductCard from "./ProductCard";
import '../style/ProductList.css'
import Jpersonne1 from '../img/Jpeersonne-T.png'
import Jpersonne2 from '../img/Jpersonne3.png'
import Jpersonne3 from '../img/undefined__1_-removebg-preview.png'
import product from '../img/product.png'
import { useState } from "react";
export default function ProductList() {

    const tableCardProduct = [
        {
            key: '1',
            title: 'Studio Visuals',
            img: Jpersonne1,
            bgc: '#ff8800ff',
        },
        {
            key: '2',
            title: 'Studio Visuals',
            img: Jpersonne2,
            bgc: '#0046FF',
        },
        {
            key: '3',
            title: 'Studio Visuals',
            img: Jpersonne3,
            bgc: '#b7d410ff',
        },
    ]
    const listCardProduct = tableCardProduct.map((index) => {
        return <ProductCard key={index.key} title={index.title} img={index.img} bgc={index.bgc} />
    })
    const tableProduct = [
        {
            key: '1',
            img: product,
            p: 'Sed pretium quam lacinia placerat',
            price: '99$',
            type: 'jacket',
        },
        {
            key: '2',
            img: product,
            p: 'Sed pretium quam lacinia placerat',
            price: '99$',
            type: 'jacket',
        },
        {
            key: '3',
            img: product,
            p: 'Sed pretium quam lacinia placerat',
            price: '99$',
            type: 'jacket',
        },
        {
            key: '4',
            img: product,
            p: 'Sed pretium quam lacinia placerat',
            price: '99$',
            type: 'jacket',
        },
        {
            key: '5',
            img: product,
            p: 'Sed pretium quam lacinia placerat',
            price: '99$',
            type: 'jacket1',
        },
        {
            key: '6',
            img: product,
            p: 'Sed pretium quam lacinia placerat',
            price: '99$',
            type: 'jacket1',
        },
        {
            key: '7',
            img: product,
            p: 'Sed pretium quam lacinia placerat',
            price: '99$',
            type: 'jacket1',
        },
        {
            key: '8',
            img: product,
            p: 'Sed pretium quam lacinia placerat',
            price: '99$',
            type: 'jacket1',
        },
        {
            key: '9',
            img: product,
            p: 'Sed pretium quam lacinia placerat',
            price: '99$',
            type: 'jacket2',
        },
        {
            key: '10',
            img: product,
            p: 'Sed pretium quam lacinia placerat',
            price: '99$',
            type: 'jacket2',
        },
        {
            key: '11',
            img: product,
            p: 'Sed pretium quam lacinia placerat',
            price: '99$',
            type: 'jacket2',
        },
        {
            key: '12',
            img: product,
            p: 'Sed pretium quam lacinia placerat',
            price: '99$',
            type: 'jacket',
        },
    ]
    const product1 = tableProduct.filter((p) => p.type == 'jacket').map((index) => {
        return <Product key={index.key} p={index.p} img={index.img} price={index.price} />
    })
    const product2 = tableProduct.filter((p) => p.type == 'jacket1').map((index) => {
        return <Product key={index.key} p={index.p} img={index.img} price={index.price} />
    })
    const product3 = tableProduct.filter((p) => p.type == 'jacket2').map((index) => {
        return <Product key={index.key} p={index.p} img={index.img} price={index.price} />
    })
    const [listProduct, setListProduct] = useState(product1)
    return (
        <div className="productList">
            <div className="list">
                {listCardProduct}
            </div>
            <div className="section">
                <div className="headerProduct">
                    <h3>Tabbed Product List Slider</h3>
                    <ul>
                        <li><button onClick={() => {
                            setListProduct(product1)
                        }}>Computer & Laptop</button></li>
                        <li ><button onClick={() => {
                            setListProduct(product2)
                        }}>HeadePhone</button></li>
                        <li><button onClick={() => {
                            setListProduct(product3)
                        }}>Most Popular</button></li>
                    </ul>
                </div>
                <hr />
                <div className="sectionProduct">
                    {listProduct}
                </div>
            </div>
        </div>
    )
}


function Product() {
    return (
        <div className="product">
            <img src={product} alt="" />
            <div>
                <p>Sed pretium quam lacinia placerat</p>
                <div className="price">
                    <h5><del>100$</del></h5>
                    <h4 style={{ color: '#261FB3' }}>90$</h4>
                </div>
            </div>
        </div>
    )
}
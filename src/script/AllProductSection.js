
import product from '../img/product.png'
import Jpersonne1 from '../img/Jpeersonne-T.png'
import '../style/AllProductSection.css'
// import slider
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { useState } from 'react';
// Fin import slider
export function AllProductSection() {
    return (
        <div style={{ maxWidth: '1200px', margin: 'auto' }}>
            <AllProduct />
            <AllProduct />
            <AllProduct />

        </div>
    )
}

function AllProduct() {
    return (
        <div style={{ backgroundColor: '#FFF', padding: '15px', borderRadius: '5px', margin: '50px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3>Shoot Your Best</h3>
                <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <li style={{ marginRight: '10px' }}><button style={{ backgroundColor: 'transparent' }}>Cameras</button></li>
                    <li><button style={{ backgroundColor: 'transparent' }}>HeadPhones</button></li>
                </ul>
            </div>
            <hr style={{ margin: '15px 0' }} />
            <div style={{ display: 'flex' }}>
                <img style={{ width: '300px', height: '380px' }} src={Jpersonne1} alt='Product Reduction' />
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        slidesPerView={3}
                        style={{ width: '900px' }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    // navigation
                    >


                        <SwiperSlide><ProductSlider /></SwiperSlide>
                        <SwiperSlide><ProductSlider /></SwiperSlide>
                        <SwiperSlide><ProductSlider /></SwiperSlide>
                        <SwiperSlide><ProductSlider /></SwiperSlide>
                        <SwiperSlide><ProductSlider /></SwiperSlide>

                    </Swiper>

                </div>
            </div>
        </div>
    )
}
function ProductSlider() {
    const [colorHearth, setColorHearth] = useState(true)
    const [colorh, setColorhearth] = useState('red')
    return (
        <div className='sectionScroll' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px', margin: '0 5px', height: '380px', position: 'relative', borderRadius: '5px' }}>
            <button className='btnSlider' style={{ position: 'absolute', backgroundColor: '#261FB3', color: '#FFF', width: '120px', height: '30px', borderRadius: '50px' }}>Quick View</button>
            <img style={{ width: '250px', height: '250px' }} src={product} alt="jacket product" />
            <div style={{ textAlign: 'center', lineHeight: '20px' }}>
                <p>Vestibulim ante ipsum prims</p>
                <h4 style={{ color: '#261FB3', margin: '5px 0' }}>20.45 $</h4>
                <h5>cras molis dolor set tembor , iaculis Duis</h5>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                    <button onClick={() => {setColorHearth(!colorHearth)}} style={{ backgroundColor: 'transparent' }}><i   style={{ fontSize: '20px', color: `${colorHearth ? '#000':'red'}` }} class={colorHearth ? 'fa-regular fa-heart' : 'fa-solid fa-heart'}></i></button>
                    <button style={{ width: '120px', height: '35px', borderRadius: '5px', backgroundColor: '#261FB3', color: '#FFF' }}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
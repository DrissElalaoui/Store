
import '../style/HomePage.css'

// import slider
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
// Fin import slider
import HommePageSlider from './HomePageSlider';

import jacket1 from '../img/jacketHomePage-T.png'
import jacket2 from '../img/jacketHomePage2-T.png'
import jacket3 from '../img/jacketHomePage3-T.png'

const tableSlider = [
    {
        key: 1,
        title: 'Flat 30% of on Frech Arrivals 1',
        btnTitle: 'Buy Now',
        img: jacket1,
    },
    {
        key: 2,
        title: 'Flat 30% of on Frech Arrivals 2',
        btnTitle: 'Buy Now',
        img: jacket2,
    },
    {
        key: 3,
        title: 'Flat 30% of on Frech Arrivals 3',
        btnTitle: 'Buy Now',
        img: jacket3,
    },
]
const listeSlider = tableSlider.map((index) => {
    return (
        <SwiperSlide>
            <HommePageSlider key={index.key} title={index.title} btnTitle={index.btnTitle} img={index.img} />
        </SwiperSlide>
    )
})
export default function HomePage() {
    return (
        <div id='homePage' className='homePage'>
            <div className='header'>
                <h1>Rachid Store</h1>
                <ul>
                    <li><a href='#homePage'>Home</a></li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>New Arrival</a></li>
                    <li><a href='#'>Shop</a></li>
                    <li><a href='#'>Most Popular</a></li>
                    <li><a href='#'>Faq</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
                <div className='headerRight'>
                    <div className='iconPohne'>
                        <i class="fa-solid fa-phone"></i>
                    </div>
                    <div>
                        <p><b>Call To: </b> 0689361352</p>
                        <p><b>Email: </b> drissalaoui040@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='headerCenter'>
                <button><i class="fa-solid fa-bars-staggered"></i>All Departements</button>
                <div className='search'>
                    <p>search...</p>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className='iconCenter'>
                    <div><i class="fa-solid fa-heart"></i></div>
                    <div><i class="fa-solid fa-user"></i></div>
                    <div><i class="fa-solid fa-cart-shopping"></i></div>
                </div>
            </div>
            <div className='section'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    // spaceBetween={50}
                    slidesPerView={1}
                    // navigation
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    style={{ width: '900px' }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                >

                   {listeSlider}
                </Swiper>
            </div>
        </div>
    )
}
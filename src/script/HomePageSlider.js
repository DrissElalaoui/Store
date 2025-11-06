
export default function HommePageSlider({title,btnTitle,img}) {
    return (
        <div className="slider" style={{
    
        }}>
            <div>
                <h1 style={{ maxWidth: '300px' , fontSize: '40px' }}>{title}</h1>
                <button style={{width: '120px' , height: '35px' , borderRadius: '50px' , backgroundColor: '#261FB3' , color: '#FFF' , marginTop: '15px'}}>{btnTitle}</button>
            </div>
            <img style={{ width: '250px', height: '250px' }} src={img} alt="camera" />
        </div>
    )
}
import { Carousel } from 'antd';
import { useState, useEffect } from 'react';

const imgStyle = {
	width: '100%',
	height: '30%',
	objectFit: 'cover',
	objectPosition: 'center',
	borderRadius: '10px',
	boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2)',
};

const CarouselComponent = ({ sprites }) => {
    const { front_default, back_default } = sprites
    const [currentSlide, setCurrentSlide] = useState(sprites.front_default);
    // eslint-disable-next-line no-unused-vars
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        if (slide === 0) {
            setCurrentSlide(front_default);
        } else {
            setCurrentSlide(back_default);
        }
    }, [back_default, front_default, slide]);
    
	const settings = {
		dots: true,
		infinite: true,
		speed: 250,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<Carousel className='carousel' autoplay {...settings}>
            <img src={currentSlide} style={imgStyle} alt='' />
		</Carousel>
	);
};

export default CarouselComponent;

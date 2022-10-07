import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LeftArrow from '../../assets/images/left-arrow1.png';
import RightArrow from '../../assets/images/right-arrow1.png';
import Container from 'react-bootstrap/Container';

import './Home.css';
import CardProduct from '../CardProduct';

const products = [
  {
    id: 1,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 2,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 3,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 4,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 5,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: 6,
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
];

export default function ProductHome() {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: any) => (
    <img src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
    <img src={RightArrow} alt="nextArrow" {...props} />
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <Container className="product-home">
      <Slider {...settings}>
        {products.map((data: any, index) => (
          <CardProduct
            key={data.id}
            id={data.id}
            name={data.name}
            price={data.price}
            oldprice={data.oldprice}
            imgPath={data.imgPath}
          />
        ))}
      </Slider>
    </Container>
  );
}

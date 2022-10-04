import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import LeftArrow from '../../assets/images/left-arrow1.png';
import RightArrow from '../../assets/images/right-arrow1.png';
import Container from 'react-bootstrap/Container';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import './Home.css';

const products = [
  {
    id: '1',
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: '2',
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: '3',
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: '4',
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: '5',
    name: 'ADDIDAS NEW HAMMER SOLE FOR SPORTS PERSON',
    price: '$150.00',
    oldprice: '$250.00',
    imgPath:
      'https://preview.colorlib.com/theme/karma/img/product/xp1.jpg.pagespeed.ic.560ZlxqBFw.webp',
  },
  {
    id: '6',
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
        {products.map((item, index) => {
          return (
            <Card sx={{ maxWidth: 310 }}>
              <CardActionArea>
                <CardMedia
                  className="card-image"
                  component="img"
                  height="140"
                  image={item.imgPath}
                  alt="green iguana"
                />
                <CardContent>
                  <b>{item.name}</b>
                  <p>{item.price}</p>
                  <del>{item.oldprice}</del>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Slider>
    </Container>
  );
}

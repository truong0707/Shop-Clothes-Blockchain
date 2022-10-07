// icon
// import { FaBookmark } from "react-icons/fa";
import '../components/components.css';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';

import Avatar from '@mui/material/Avatar';

import './components.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Fab from '@mui/material/Fab';
import * as React from 'react';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FitbitIcon from '@mui/icons-material/Fitbit';

import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';

interface MyProps {
  id: Number;
  name: String;
  price: String;
  oldprice: String;
  imgPath: String;
}

export default function CardProduct(props: MyProps) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const IconPrd = [
    {
      id: 1,
      title: 'Thêm Vào Giỏ',
      icon: <ShoppingBagIcon className="icon-prd-card" />,
    },
    {
      id: 2,
      title: 'Yêu Thích',
      icon: <FavoriteBorderIcon className="icon-prd-card" />,
    },
    {
      id: 1,
      title: 'So Sánh',
      icon: <AutorenewIcon className="icon-prd-card" />,
    },
    {
      id: 1,
      title: 'Xem Chi Tiết',
      icon: <FitbitIcon className="icon-prd-card" />,
    },
  ];
  return (
    // <Link style={{ textDecoration: 'none' }} to={`/detail-product/${props.productId}`}>
    //     <div className="card-product-body">
    //         <img src={props.imageProduct} className="card-img-top" alt="..." />
    //         <div className="card-body">
    //             <p className="card-title">{props.nameProduct}</p>
    //             <p className="card-text">{props.descriptionProduct}</p>
    //             <p>{props.priceProduct}$</p>
    //         </div>
    //     </div>
    //     <div className="button-buy-card" /* onClick={() => addToCart(props)} */><p>ADD TO CART</p></div>
    // </Link>
    // }
    <Card sx={{ maxWidth: 310 }}>
      <CardActionArea>
        <CardMedia
          className="card-image"
          component="img"
          height="140"
          image={`${props.imgPath}`}
          alt="green iguana"
        />
        <CardContent>
          <b>{props.name}</b>
          <p>{props.price}</p>
          <del>{props.oldprice}</del>
        </CardContent>
      </CardActionArea>
      {IconPrd.map((icon) => (
        <div className="link-product" key={icon.id}>
          <Tooltip title={icon.title}>
            <Link to={'/Shop'}>
              <Button className="btn-icon-prd">
                <Fab
                  className="icon-prd"
                  size="small"
                  color="secondary"
                  aria-label="add"
                >
                  {icon.icon}
                </Fab>
              </Button>
            </Link>
          </Tooltip>
        </div>
      ))}
    </Card>
  );
}

// icon
// import { FaBookmark } from "react-icons/fa";
import '../components/components.css';
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

interface MyProps {
  id: Number;
  name: String;
  price: String;
  oldprice: String;
  imgPath: String;
}

export default function CardProduct(props: MyProps) {
  console.log(props.imgPath);
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
    </Card>
  );
}

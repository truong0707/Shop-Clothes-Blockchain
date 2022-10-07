import React from 'react';
import '../App.css'
import BodyShop from '../components/shop/BodyShop';
import HeaderShop from '../components/shop/HeaderShop';

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

export default function Shop() {
    return (
        <div className='wrap_shop'>
            <HeaderShop />
            <BodyShop />
        </div>
    )
}

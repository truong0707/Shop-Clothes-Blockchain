import React from 'react';
import '../App.css'
import CardProduct from '../components/shop/CardProduct';
import ListCateBrand from '../components/shop/ListCateBrand';
import ListCategory from '../components/shop/ListCateroty';

export default function Shop() {
    return (
        <div className='wrap_shop'>
            <div className='container body_shop'>
                <div className='row' style={{ paddingTop: '40px' }}>
                    <div className='ff col-lg-3 col-ms-4 col-xs'>
                        <ListCategory />
                        <ListCateBrand />
                    </div>

                    <div className='ff2 col-lg-9 col-ms-8'>
                        <div className='' style={{ width: '100%', height: '58px', background: '#828BB3' }}></div>

                        {/* product */}
                        <div className='col'>
                            <div className='row' >
                                <div className='col'>
                                    <CardProduct />
                                </div>

                                <div className='col'>
                                    <CardProduct />
                                </div>

                                <div className='col'>
                                    <CardProduct />
                                </div>
                                
                                <div className='col'>
                                    <CardProduct />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

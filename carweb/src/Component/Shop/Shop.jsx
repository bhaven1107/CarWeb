import React from 'react'
import Header from '../header/Header.jsx';
import Footer from '../footer/footer.jsx';

const Shop = () => {
    return (
        <>
            <Header />

            {/* SHOP CONTENT HERE */}
                 <div className="collection-sec">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <span>
                                    <a href="">Home</a> / <a href="">Shop</a>
                                </span>
                            </div>
                            <div className="col-lg-3">
                                <h1>sem</h1>
                            </div>
                             <div className="col-lg-9">
                                <h1>sem</h1>
                            </div>
                        </div>
                    </div>
                </div>

            <Footer />
        </>
    )
}

export default Shop;

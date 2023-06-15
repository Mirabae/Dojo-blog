import React from "react";

const Banner = () => {
    return (
        <div className="Banner">
             <div className="banner-text">
                <p className="title">
                    Explore, Collect And <br/>
                    Sell Treasured NFTs <br/>
                    Worldwide
                </p>
                <p className="text-inner">
                    A platform where buyers and sellers can exchange <br/>
                    unique artworks from over 1000 artists
                </p>
                <div className="banner-btns">
                    <a href="" className="banner-btn1">Explore</a>
                    <a href="" className="banner-btn2">Create NFTs</a>
                </div>
                <div className="counter">
                    <div className="c-one" style="margin-right: 4rem;">
                        <p className="count-title">
                            100k
                        </p>
                        <p className="count-inner">Collections</p>
                    </div>
                    <div className="c-one" style="margin-right: 4rem;">
                        <p className="count-title">
                            765k
                        </p>
                        <p className="count-inner">Active Users</p>
                    </div>
                    <div className="c-one">
                        <p className="count-title">
                            10k
                        </p>
                        <p className="count-inner">Auctions</p>
                    </div>

                    <div className="arrow">
                        <img src="./img/Vector.svg" alt=""/>
                    </div>
                </div>
            </div>

            <div className="banner-img">
                <img src="./img/Banner Image.png" alt=""/>
            </div>
        </div>
    );
}
 
export default Banner ;
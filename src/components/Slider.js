import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

import image1 from './Images/image1.jpg'
import image2 from './Images/image2.jpg'
import image3 from './Images/image3.jpg'
import image4 from './Images/image4.jpg'
import image5 from './Images/image5.jpg'
import image6 from './Images/image6.jpg'
import image7 from './Images/image7.jpg'
import image8 from './Images/image8.jpg'
import image9 from './Images/image9.jpg'
import image10 from './Images/image10.jpg'
import image12 from './Images/image12.jpg'
import image13 from './Images/image13.jpg'
import image14 from './Images/image14.jpg'
import image15 from './Images/image15.jpg'
import image16 from './Images/image16.jpg'
import image17 from './Images/image17.jpg'
import image18 from './Images/image18.jpg'
import image19 from './Images/image19.jpg'
import image20 from './Images/image20.jpg'
import image21 from './Images/image21.jpg'
import image22 from './Images/image22.jpg'

import PrimarySearchAppBar from "./Header";


export default function AutoPlayMethods () {
  
    return (
        <div>
            <PrimarySearchAppBar />
            <Carousel>
                <div>
                    <img src={image1} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image2} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image3} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image4} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image5} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image6} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image7} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image8} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image9} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image10} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image12} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image13} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image14} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image15} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image16} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image17} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image18} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image19} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image20} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image21} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
                <div>
                    <img src={image22} alt="" style={{width: '100%', height: '100%'}}/>
                </div>
            </Carousel>
        </div>
    );
}
import React from "react";
import styles from "./Modal.module.css";
import { useRef, useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {EffectFlip, Pagination, Navigation} from "swiper";


function Modal(props){
    const {isModal,imgSlides} = props
    return(
        <div className={isModal?styles.modal:styles.closeModal}>
            <div className={styles.hello}>
                <Swiper effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Pagination, Navigation]}
                className={`mySwiper ${styles.swiper}`}
                >
                    {imgSlides.map((image)=>(
                        <SwiperSlide><img src={image.url} alt={image.title}></img></SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        
    )

}


export default Modal;
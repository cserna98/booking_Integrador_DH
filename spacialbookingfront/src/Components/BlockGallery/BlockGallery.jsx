import React, { useState } from "react";
import imgList from "../../assets/Json/imgProducts.json";
import styles from "./BlockGallery.module.css"
import Modal from "./Modal";

function BlockGallery(){
    const [isModal, setIsModal]= useState(false);

    function handleModal(){
        setIsModal(!isModal)
    }

    return(
        <>
        <div className={styles.containerImg}>
            <div className={styles.mainImg}><img src={`${imgList[0].url}`} alt="" /></div>
            <div className={styles.containerSecondImg}>
                {imgList.slice(1,5).map((image) => (
                    <img key={image.id} src={image.url} alt={image.title}></img>
                ))}
            </div>
        </div>
        <div className={styles.viewMore}><button onClick={handleModal}>Ver más...</button></div>
        <Modal imgSlides={imgList} isModal={isModal} handleModal={handleModal}></Modal>
        </>
    )
}

export default BlockGallery
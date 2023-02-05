import React from "react";
import imgList from "../../assets/Json/imgProducts.json";
import styles from "./BlockGallery.module.css"

function BlockGallery(){
    return(
        <div className={styles.containerImg}>
            <div className={styles.mainImg}><img src={`${imgList[0].url}`} alt="" /></div>
            <div className={styles.containerSecondImg}>
                {imgList.slice(1,5).map((image) => (
                    <img key={image.id} src={image.url} alt={image.title}></img>
                ))}
            </div>
        </div>
    )
}

export default BlockGallery
import React from "react";
import imgList from "../../assets/Json/imgProducts.json";

function BlockGallery(){
    return(
        <div>
            <div><img src={`${imgList[0].url}`} alt="" /></div>
            <div></div>
        </div>
    )
}

export default BlockGallery
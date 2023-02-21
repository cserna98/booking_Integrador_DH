import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ListContainer from '../ListContainer/ListContainer';
import { GlobalContext } from "../globalState/GlobalState";

function FilterCategory(){

  

    return(
        <>
                <div>
                    <ListContainer>
                    </ListContainer>
                </div>
        </>
    )
}


export default FilterCategory;
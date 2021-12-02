import React from 'react';
import '../App.css'
import {useParams} from "react-router-dom";
import { useQuery } from "@apollo/client";
import { detailCatalogs}  from '../graphql/queries';

function CatalogApple(props) {
    const {onAdd} = props;
    const {id} = useParams();
    const { loading, error, data } = useQuery(detailCatalogs, {
        variables: { id },
    });

    console.log(data);
        if (loading) return null;
        if (error) return `Error! ${error}`;
  
        return(
        <div>
            <div className="catalogTech">
                <div className="centerCatalog">
                    <img src={data.product.gallery} alt="img" className="bigPicture"/>
                </div>
                <div className="rightCatalog">
                    <h1>
                        {data.product.name}
                    </h1>

                    <div className="detailPrice">
                        <h5>Price:</h5>
                        <p>{data.product.prices[0].currency} {data.product.prices[0].amount}</p>
                    </div>
                    
                    <button className="addToCart" onClick={()=>onAdd(data.product)}>ADD TO CART</button>
                    <p>{data.product.description}</p>
                </div>
            </div>
            
        </div>
    )
}

export default CatalogApple;
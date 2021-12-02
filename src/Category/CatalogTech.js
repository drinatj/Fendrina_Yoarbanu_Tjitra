import React from 'react';
import '../App.css'
import {useParams} from "react-router-dom";
import { useQuery } from "@apollo/client";
import { detailCatalogs}  from '../graphql/queries';

function CatalogTech(props) {
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

                    <div>
                        <h5>{data.product.attributes[0].name} </h5>
                        <div className="detailSizeTech">
                            <button>{data.product.attributes[0].items[0].value}</button>
                            <button>{data.product.attributes[0].items[1].value}</button>
                        </div>
                    </div>

                    <div>
                        <h5>{data.product.attributes[1].name} </h5>
                        <div className="detailSizeTechColor">
                            <input type="color" value={data.product.attributes[1].items[0].value}/>
                            <input type="color" value={data.product.attributes[1].items[1].value}/>
                            <input type="color" value={data.product.attributes[1].items[2].value}/>
                            <input type="color" value={data.product.attributes[1].items[3].value}/>
                            <input type="color" value={data.product.attributes[1].items[4].value}/>
                        </div>
                    </div>

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

export default CatalogTech;
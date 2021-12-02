import React, { Component } from 'react';
import '../App.css';
import { useQuery } from "@apollo/client";
import { listItems } from "../graphql/queries";
import { Link } from "react-router-dom";
import CartProduct from '../Components/CartProduct.js';
import CartProductFalse from '../Components/CartProductFalse';

function LIST_ITEMS() {
  const { loading, error, data } = useQuery(listItems);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.category.products.map(({id, gallery, name, prices, category, inStock} ) => (
    <div key={id}>
      {category === "clothes" ?
        <div>
          <Link to={`catalog/${id}`}>
          <a href="/" className="styleCatalog">
            <CartProduct images={gallery[3]} name={name} currency={prices[0].currency} amount={prices[0].amount} />
          </a>
          </Link>
        </div> 
        : 
        <div>
          <div key={id}>
            {id === "apple-airtag" ?
            <div>
              <Link to={`catalogApple/${id}`}>
                <a href="/" className="styleCatalog">
                  <CartProduct images={gallery} name={name} currency={prices[0].currency} amount={prices[0].amount} />
                </a>
              </Link>
            </div>:
            <div key={id}>
              {id === "apple-imac-2021"?
              <div>
                <Link to={`catalogImac/${id}`}>
                  <a href="/" className="styleCatalog">
                    <CartProduct images={gallery} name={name} currency={prices[0].currency} amount={prices[0].amount} />
                  </a>
                </Link>
              </div>:
              <div>
                {inStock ?
                <div>
                  <Link to={`catalogTech/${id}`}>
                  <a href="/" className="styleCatalog">
                    <CartProduct images={gallery} name={name} currency={prices[0].currency} amount={prices[0].amount} />
                  </a>
                  </Link>
                </div> 
                : 
                <CartProductFalse images={gallery} name={name} currency={prices[0].currency} amount={prices[0].amount} />
                }
              </div>
              }
              
            </div>
            }
          
          </div> 
        </div>
      } 
      
    </div>
  ));
}

// function LIST_ITEMS_TECH() {
//   const { loading, error, data } = useQuery(listItems);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.category.products.map(({id, gallery, name, prices, category, inStock} ) => (
//     <div>
//       {category === "tech" ?
//         <div key={id}>
//           {inStock ?
//           <div >
//             <Link to={`catalogTech/${id}`}>
//             <a href="/" className="styleCatalog">
//               <CartProduct images={gallery} name={name} currency={prices[0].currency} amount={prices[0].amount} />
//             </a>
//             </Link>
//           </div> 
//           : <CartProductFalse images={gallery} name={name} currency={prices[0].currency} amount={prices[0].amount} />
//           }
//         </div> : <></>
//       }
//     </div>
//   ));
// }


class Catalogs extends Component{
  render(){
    return (
      <div>
        <h2 className="categoryName">Clothes and Technology</h2>
        <div className="listGalleryClothes">
          <LIST_ITEMS/>
        </div>
  
        {/* <h2 className="categoryName">Tech</h2>
        <div className="listGalleryTech">
          <LIST_ITEMS_TECH/>
        </div> */}
        
      </div>
    );
  }
  
}


export default Catalogs;

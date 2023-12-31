import { useEffect, useState } from "react";
import './result.css';
import { Product, ResultComponentProps } from "../../interfaces/respose.interface";
import { getProducts, getProductsByCategory } from "../../services/services"
import { ToastComponent } from "../toastComponent/toastComponent";

export const ResultComponent = ({selectedCategory}: ResultComponentProps) => {

    const [ products, setProducts ] = useState<Product[]>([]);
    const [ permissionToShowError, setPermissionToShowError ] = useState<boolean>(false);

    useEffect( ()=> {

        // console.log(selectedCategory);

        if (selectedCategory) {

            getProductsByCategory( selectedCategory )            
            .then( resp => {
                if ( resp ) {
                    setProducts( resp )
                    // console.log(resp);              
                }
            })
            .catch((error) => {
                
               console.log(error);
            })
            .finally();
            
        } else {

            getProducts()
                .then( resp => {
                    if ( resp) {
                        setProducts( resp )
                        // console.log(resp);              
                    }
                })
                .catch( () => 
                
                    setPermissionToShowError(true)
                )
                .finally();
        }   
        
    },[selectedCategory])

    return (<div>
        <ToastComponent permissionToShowError = {permissionToShowError} />
        { products.map((res:Product, i: number)=> {
        return(    
            <article className="card" key={i.toString()}>
                <span className="title">{i} - <strong>{res.title}</strong></span>
                <header>
                    <span>{res.description}</span>
                    <div className="info">
                        <img className="photo" src={res.image} alt="Product Image" />
                        <span><strong> Category: </strong>{res.category}</span>
                        <span><strong> Price: </strong>{res.price}</span>
                        <span><strong> Rating: </strong>{res.rating.rate}</span>
                    </div>
                </header>
            </article>
        )
    }) }</div>)
}
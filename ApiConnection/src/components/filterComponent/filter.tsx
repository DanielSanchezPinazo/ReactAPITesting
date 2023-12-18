import { useEffect, useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { productCategories } from "./utils/filterComponent.utils";
import { Category } from "../../interfaces/respose.interface";
import { ResultComponent } from "../resultComponent/result";
import SpinnerComponent from "../spinnerComponent/spinnerComponent";

export const FilterComponent = () => {

    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [loading, setLoading] = useState(false);
    
    useEffect( () => {

        setTimeout( () => {setLoading(true)}, 3000);
    }, [selectedCategory])


    return (
        <div>
            <div className="card flex justify-content-center">
                <Dropdown value= { selectedCategory }
                          onChange= {(e) => setSelectedCategory(e.value)}
                          options= { productCategories } 
                          optionLabel="code" 
                          optionValue="name" 
                          placeholder="Select a Category"
                          className="w-full md:w-14rem" />
            </div>
            { loading ? (
                    <ResultComponent selectedCategory = { selectedCategory } />
                ) : (
                    <SpinnerComponent />
                )            
            }
        </div>
    )
}
    
             
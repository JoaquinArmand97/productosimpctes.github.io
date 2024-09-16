import Product from '../components/Product/Product'; 
import ButtonCategory from '../components/buttonCategory/ButtonCategory';
import { ProductsData } from '../components/data/productData';

export const Productos = () => {
    return (
        <div> 
            <ButtonCategory />
            <Product products={ProductsData} /> 
        </div>
    );
};

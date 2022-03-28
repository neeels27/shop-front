import React from 'react';
import Link from "next/link";


import { getProducts } from "../../graphql/queries/products";
import { useQuery } from "@apollo/react-hooks";

import ProductGrid from '../../components/product/ProductGrid/ProductGrid';
import TitlePage from "../../components/UI/Title/TitlePage";

import Filter from "../../components/filter/Filter";



const Index = () => {

    const { loading, error, data } = useQuery(getProducts);
    
    if (loading) {
        return "loading...";
    }

    if (error) {
        console.log(error);
        return null;
    }

    console.log(data);

    return (
        <div className="page__shop">
            <TitlePage title="CR7 Store"/>
            
            <Filter/>
            <ProductGrid products={data.getProducts}/>
        </div>
    );
}

export default Index;

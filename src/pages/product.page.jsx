import React from 'react';
import PageBanner from '../components/page-banner/banner.component';
import ProductList from '../components/products-lists/products-list.component';

const ProductsPage = () => {
    return (
        <div>
            <PageBanner heading="Services" text="A wide of range of products to choose from" />
            <ProductList/>
        </div>
    )
}

export default ProductsPage;
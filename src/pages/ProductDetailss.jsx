
import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetailss() {

    const params = useParams()
    const [product, setProduct] = useState({})

    //initial details
    useEffect(() => {
        if(params?.slug) getProduct()
    }, [params?.slug ])
   
    //get product
    const getProduct = async () => {
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_API}/api/vl/product/get-product/${params.slug}`)
            setProduct(data?.product)
            console.log("success");
        } catch (error) {
            console.log("eror in getting product details",error);
        }
    }
    console.log(params.slug );
    console.log("pro",product);

  return (
<Layout>
    <h1>Product Details</h1>
    {JSON.stringify(product, null ,4)}
</Layout>

  )
}

export default ProductDetailss

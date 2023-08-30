import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import axios from "axios";
import {  Checkbox, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import { Prices } from "../components/Prices";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [total,setTotal] = useState(0)
  const [page,setPage] = useState(1)

  const navigate = useNavigate()


  // Get all categories
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/category/get-category`
      );
      if (data.success) {
        setCategories(data.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Get all products
  const getAllProducts = async () => {
    try {
      
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/product/get-Product`
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  // Handle category filter
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  // Handle price filter
  const handlePriceFilter = (value) => {
    setSelectedPrice(value);
  };

  // Filter products by category and price
  const filterProducts = () => {
    let filtered = [...products];

    // Apply category filtering if there are selected categories
    if (checked.length > 0) {
      filtered = filtered.filter((product) =>
        checked.includes(product.category._id)
      );
    }

    // Apply price filtering if a price range is selected
    if (selectedPrice) {
      filtered = filtered.filter(
        (product) =>
          product.price >= selectedPrice.min &&
          product.price <= selectedPrice.max
      );
    }

    setFilteredProducts(filtered);
  };

    //get total count
    const getTotal = async () =>{
      try {
        const {data} = await axios.get( `${process.env.REACT_APP_API}/api/v1/product/product-count`)
        setTotal(data?.total)
      } catch (error) {
        console.log(error);
        
      }
    }

  // Handle the case when no filters are applied
  const showAllProducts = () => {
    setFilteredProducts(products);
  };

  useEffect(() => {
    getAllCategories();
    getAllProducts();
    getTotal()
   
  }, []);

  useEffect(() => {
    if (checked.length || selectedPrice) {
      filterProducts();
    } else {
      showAllProducts();
    }
  }, [checked, selectedPrice]);



  return (
    <Layout title={"All products-Best offers"}>
      <div className="row mt-3">
        <div className="col-md-2">
          <h4 className="text-center">Filter By Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => handlePriceFilter(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id} pid={p._id}>
                  <Radio value={p}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
           <button className="btn btn-danger" onClick={()=> window.location.reload()}>RESET FILTERS</button>
          </div>
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All products</h1>
          <div className="d-flex flex-wrap">
            {filteredProducts.length > 0
              ? filteredProducts?.map((p) => (
                  <div className="card m-2" key={p._id}>
                    <img
                      src={`${process.env.REACT_APP_API}/api/vl/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">
                        {p.description.substring(0, 30)}
                      </p>
                      <p className="card-text">$ {p.price}</p>
                      <button className="btn btn-primary ms-1">
                        See Details
                      </button>
                      <button className="btn btn-secondary ms-1">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))
              : products?.map((p) => (
                  <div className="card m-2" key={p._id}>
                    <img
                      src={`${process.env.REACT_APP_API}/api/vl/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">
                        {p.description.substring(0, 30)}
                      </p>
                      <p className="card-text">$ {p.price}</p>
                      <button className="btn btn-primary ms-1" onClick={() => navigate(`/product/${p.slug}`)}>
                        See Details
                      </button>
                      <button className="btn btn-secondary ms-1">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
          </div>
         
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;






























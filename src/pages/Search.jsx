import React from 'react'
import Layout from '../components/layout/Layout'
import { useSearch } from '../context/searchContext'

function Search() {
    const [values, setvalues] = useSearch()
  return (
   <Layout title={'Search results'}>
 <div className="container">
    <div className="text-center">
        <h1>Search results</h1>
        <h6>{values?.result.length < 1 ? 'No products found' : `Found${values?.result.length}`}</h6>
        <h6>
        {values?.result.map((p) => (
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
                ))}
        </h6>
    </div>
 </div>
   </Layout>
  )
}

export default Search

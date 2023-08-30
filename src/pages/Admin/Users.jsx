import React from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'

function Users() {
  return (
    <Layout title={'Dashboard-all users'}>
        <div className="container-fluid m-3 p-3">
        <div className="row">
      <div className="col-md-3">
        <AdminMenu/>
      </div>
      <div className="col-md-9">
      <h1>all users</h1>
      </div>
      </div>
      </div>
    </Layout>
  )
}

export default Users

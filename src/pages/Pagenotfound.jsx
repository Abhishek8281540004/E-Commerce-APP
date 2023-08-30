import React from "react";
import Layout from "../components/layout/Layout";

function Pagenotfound() {
  return (
    <Layout title={"page not found"}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "100px",
          paddingTop: "100px",
          fontWeight: "700",
        }}
      >
        404
      </h1>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>
        Oops ! Page Not Found
      </h1>
      \
    </Layout>
  );
}

export default Pagenotfound;

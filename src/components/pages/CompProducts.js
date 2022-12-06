import { useState, useEffect } from "react";
import CompAddProduct from "./CompAddProduct";
import axios, { all } from "axios";

let products = [];

function CompProducts() {
  let [productViewLg, setProductViewLg] = useState({
    name: "",
    price: 0,
    desc: "",
    sku: 0,
  });
  const [allProducts, setAllProducts] = useState(null);
  //   function ProductAdd() {
  //     console.log("hi Mom");
  //     products.push({ pName: "Product 3", pPrice: 500, pSku: 4 });
  //   }

  const AddProduct = (newProduct) => {
    // const clear = []
    // setAllProducts(clear);

    newProduct.pSku = allProducts.length + 1;
    const updatedProducts = [...allProducts, newProduct];
    setAllProducts(updatedProducts);
    // start
    // axios.post("/save-product", {body: updatedProducts})
    axios
      .put("/save-product", { body: updatedProducts })
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        // console.log(error);
      });
    // end
  };
  useEffect(() => {
    axios.get("/load-products").then((response) => {
      setAllProducts(response.data.body);
    });
  }, []);
  // function loadProducts() {

  //   axios.get("/load-products")
  //   fetch("/load-products")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setAllProducts(data.body);
  //     });
  // }

  // useState(loadProducts)

  return (
    <>
      <div className="custom-bg-3 min-vh-100 p-3">
        <div className="container min-vh-100 custom-bg-4 c-text-white text-center">
          <h2 className="display-3 fw-semibold">Products</h2>
          <hr />
          <CompAddProduct addProduct={AddProduct} />
          <hr />
          <div className="row justify-content-center p-1">
            {allProducts &&
              allProducts.map((product) => (
                <div
                  className="col-12 col-lg-3 custom-bg-5 m-1 p-2"
                  key={product.pSku}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  onClick={(evt) => {
                    setProductViewLg({
                      name: evt.currentTarget.querySelector(".name").innerHTML,
                      price:
                        evt.currentTarget.querySelector(".price").innerHTML,
                      desc: evt.currentTarget.querySelector(".desc").innerHTML,
                      sku: evt.currentTarget.querySelector(".sku").innerHTML,
                    });
                  }}
                >
                  <img
                    src={"./upload-images/" + product.image}
                    alt=""
                    width={100}
                  />
                  <h2 className="name">{product.pName}</h2>
                  <h3 className="price">{product.pPrice}$</h3>
                  <p className="desc d-none">{product.pDesc}</p>
                  <p className="sku">Sku: {product.pSku}</p>
                </div>
              ))}
          </div>
          {!allProducts && setAllProducts(products)}
          <div>{/* <button onClick={ProductAdd}>add</button> */}</div>
        </div>
        {/* <button
          onClick={() => {
            ProductAdd();
            setAllProducts(products);
          }}
        >
          Test
        </button> */}
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {productViewLg.sku} &nbsp;
                {productViewLg.name}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <span className="fw-bold">Price: {productViewLg.price}</span>
              <br />
              {productViewLg.desc}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Contact
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompProducts;

import { useState } from "react";
import CompAddProduct from "../CompAddProduct";

let products = [
  { pName: "Product 1", pPrice: 200,pDesc:`Test Desc`, pSku: 0 },
  { pName: "Product 2", pPrice: 400,pDesc:`Test Desc`, pSku: 1 },
  { pName: "Product 3", pPrice: 500,pDesc:`Test Desc`, pSku: 2 },
];

function CompProductsTest() {
  const [allProducts, setAllProducts] = useState(null);

  const AddProduct = (newProduct) => {
    newProduct.pSku = allProducts.length + 1
    const updatedProducts = [...allProducts, newProduct];
    setAllProducts(updatedProducts)
  };
  const RemoveProduct = (newProduct) => {
    newProduct.pSku = allProducts.length + 1
    const updatedProducts = [...allProducts];
    setAllProducts(updatedProducts.splice(1,1))
  };

  return (
    <>
      <div className="custom-bg-3 min-vh-100 p-3">
        <div className="container min-vh-100 custom-bg-4 c-text-white text-center">
          <h2 className="display-3 fw-semibold">Products</h2>
          <hr />
          <CompAddProduct addProduct={AddProduct} />
          <hr />
          <div className="row justify-content-center">
            {allProducts &&
              allProducts.map((product) => (
                <div className="col-12 col-lg-3" key={product.pSku}>
                  <h2>{product.pName}</h2>
                  <h3>{product.pPrice}$</h3>
                  <h5>{product.pDesc}</h5>
                  <h5>Sku: {product.pSku}</h5>
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
    </>
  );
}

export default CompProductsTest;

import { useState, useEffect } from "react";
import CompUploadImage from "./CompUploadImage";
import axios from "axios";

function CompAddProduct(props) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDesc, setProductDesc] = useState("");

  const [imageName, setImageName] = useState("1");

  function doWork() {
    if (!(imageName === "1")) {
      props.addProduct({
        pName: productName,
        pPrice: productPrice,
        pDesc: productDesc,
        pSku: 0,
        image: imageName,
      });
    } else {
      alert("ERROR Select Image");
      console.log(imageName);
    }
  }

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    axios.get("/images-dir").then((response) => {
      // setAllProducts(response.data.body);
      setBackendData(response.data);
    });
  }, []);

  // useEffect(() => {
  //   fetch("/images-dir")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBackendData(data);
  //     });
  // }, []);





  return (
    <>
      <CompUploadImage />
      <div className="container p-4">
        <select
          onChange={(evt) => {
            if (evt.currentTarget.value === 1) {
              console.log(Error);
            } else {
              setImageName(evt.currentTarget.value);
            }
          }}
        >
          <option value={"1"}>Select Image</option>
          {typeof backendData.FilesArray === "undefined" ? (
            <option value={""} disabled="disabled">
              Loading...
            </option>
          ) : (
            backendData.FilesArray.map((file, i) => (
              <option key={i} value={file}>
                {file}
              </option>
            ))
          )}
        </select>
        <div className="row d-flex justify-content-center">
          <div className="col-3">
            <label htmlFor="pNameInput" className="form-label">
              Product Name
            </label>
            <input
              type="pNameInput"
              id="pNameInput"
              className="form-control"
              onChange={(evt) => setProductName(evt.currentTarget.value)}
              value={productName}
            />
          </div>
          <div className="col-3">
            <label htmlFor="pPriceInput" className="form-label">
              Product Price
            </label>
            <input
              type="pPriceInput"
              id="pPriceInput"
              className="form-control"
              onChange={(evt) => setProductPrice(evt.currentTarget.value)}
              value={productPrice}
            />
          </div>
          <div className="col-3">
            <label htmlFor="pDescInput" className="form-label">
              Product Desc
            </label>
            <input
              type="pDescInput"
              id="pDescInput"
              className="form-control"
              onChange={(evt) => setProductDesc(evt.currentTarget.value)}
              value={productDesc}
            />
          </div>
          <div className="col-3 d-flex justify-content-center">
            <button
              type="button"
              className="btn btn-lg btn-primary align-self-end"
              onClick={doWork}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompAddProduct;

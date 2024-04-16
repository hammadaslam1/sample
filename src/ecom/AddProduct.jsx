const AddProduct = () => {
  return (
    // get a react bootstrap form for adding products which includes product name, product price, product description and image upload options
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header fs-3">Add Product</div>
            <div className="card-body">
              <form>
                <div className="form-group row my-3">
                  <label
                    htmlFor="exampleInputEmail1"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Product Name
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Enter product name"
                    />
                  </div>
                </div>
                <div className="form-group row my-3">
                  <label
                    htmlFor="exampleInputPrice1"
                    className=" col-md-4 col-form-label text-md-right"
                  >
                    Product Price
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPrice1"
                      placeholder="Enter product price"
                    />
                  </div>
                </div>
                <div className="form-group row my-3">
                  <label
                    htmlFor="exampleInputDescription1"
                    className=" col-md-4 col-form-label text-md-right"
                  >
                    Product Description
                  </label>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputDescription1"
                      placeholder="Enter product description"
                    />
                  </div>
                </div>
                <div className="form-group row my-3">
                  <label
                    htmlFor="exampleInputImage1"
                    className=" col-md-4 col-form-label text-md-right"
                  >
                    Product Image
                  </label>
                  <div className="col-md-6">
                    <input
                      type="file"
                      className="form-control"
                      id="exampleInputImage1"
                      placeholder="Enter product image"
                    />
                  </div>
                </div>
              </form>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="card-footer text-muted">
              <a href="/products">Back to Products</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

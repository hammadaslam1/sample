const ProductList = () => {
  return (
    // create a new ProductList which will contain serial numbers, product names, product prices, product images, update buttons and delete buttons
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3>Product List</h3>
            </div>
            <div className="card-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>

                <tbody>
                  {new Array(5).fill(1).map((data, i) => (
                    <tr key={i}>
                      <th scope="row">{i+1}</th>
                      <td>Laptop</td>
                      <td>10000</td>
                      <td>laptop.jpg</td>
                      <td>
                        <button className="btn btn-primary">Update</button>
                      </td>
                      <td>
                        <button className="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;

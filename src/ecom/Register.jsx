import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    // get a registration form in react bootstrap
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header fs-3">Register</div>
            <div className="card-body">
              <form>
                <div className="form-group row my-3">
                  <label
                    htmlFor="name"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Name
                  </label>

                  <div className="col-md-6">
                    <input id="name" type="text" className="form-control" />
                  </div>
                </div>

                <div className="form-group row my-3">
                  <label
                    htmlFor="email"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Email
                  </label>

                  <div className="col-md-6">
                    <input id="email" type="email" className="form-control" />
                  </div>
                </div>

                <div className="form-group row my-3">
                  <label
                    htmlFor="password"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Password
                  </label>

                  <div className="col-md-6">
                    <input
                      id="password"
                      type="password"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="form-group row my-3">
                  <label
                    htmlFor="confirmPassword"
                    className="col-md-4 col-form-label text-md-right"
                  >
                    Confirm Password
                  </label>

                  <div className="col-md-6">
                    <input
                      id="confirmPassword"
                      type="password"
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-group  my-3 mb-0">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-muted">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => navigate("/")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

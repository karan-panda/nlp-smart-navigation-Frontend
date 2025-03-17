import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";

export default function AddPolicy() {
  return (
    <>
    <NavBar/>
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Add a New Policy</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Policy Name</label>
            <input type="text" className="form-control" placeholder="Enter policy name" />
          </div>
          <div className="mb-3">
            <label className="form-label">Policy Type</label>
            <input type="text" className="form-control" placeholder="Enter policy type" />
          </div>
          <div className="mb-3">
            <label className="form-label">Premium Amount</label>
            <input type="number" className="form-control" placeholder="Enter premium amount" />
          </div>
          <div className="mb-3">
            <label className="form-label">Coverage Amount</label>
            <input type="number" className="form-control" placeholder="Enter coverage amount" />
          </div>
          <button type="button" className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}

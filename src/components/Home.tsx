import { useNavigate } from "react-router-dom";
import { dataSet } from "./StateAndLocationData";
import { ShowTurbine } from "./ShowTurbine";
export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1> Home Page</h1>
      <div className="row">
        {dataSet.map((val, index) => {
          return (
            <div
              key={index}
              className="col-6 col-lg-3 col-md-4"
              style={{ border: "2px solid red" }}
            >
              <h2>Site Name: {val.siteName}</h2>
              <ShowTurbine data={val.turbineDataSet} />
            </div>
          );
        })}
        <button onClick={() => navigate("/process")}>Process</button>
      </div>
    </>
  );
};

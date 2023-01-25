interface props {
  data: string[];
}
export const ShowTurbine: React.FC<props> = ({ data }) => {
  return (
    <div>
      {data.map((val, index) => {
        return (
          <button
            key={index}
            className="btn btn-primary"
            // style={{ width: "20px", height: "20px" }}
          >
            {val}
          </button>
        );
      })}
    </div>
  );
};

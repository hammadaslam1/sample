import LaptopCard from "./LaptopCard";
import { LaptopData } from "./LaptopData";

const Main = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        padding: "50px",
        gap: 30,
      }}
    >
      {LaptopData.map((data, i) => (
        <LaptopCard data={data} i={i} />
      ))}
    </div>
  );
};

export default Main;

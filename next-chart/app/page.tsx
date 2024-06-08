import Image from "next/image";
import BarChart from "./Components/BarChart";
import Piechart from "./Components/PieChart";
import Bubchart from "./Components/BubleChart";
import Dhochart from "./Components/DhoChart";
import RadharChart from "./Components/RadharChart";

export default function Home() {
  return (
    <div className="container ml-12 items-center justify-center">
      Chart js
      <div>
        <h1>Bar chart</h1>
        <RadharChart />
        <h1>Pie Chart</h1>
        <Bubchart />
        <h1>Dot Chart</h1>
        <Piechart />
        <h1>Line</h1>
        <BarChart />
        <h1>Dhore chart</h1>
        <Dhochart />
      </div>
    </div>
  );
}

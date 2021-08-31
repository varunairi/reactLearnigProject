import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const totalMax = Math.max(...props.dataPoints.map((data) => data.value));

  return (
    <div className="chart">
      {props.dataPoints.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={totalMax}
          label={data.label}
        />
      ))}
    </div>
  );
};
export default Chart;

import { Chart, Interval } from 'bizcharts';
import Title from "../../commons/components/title/title";

const data = [
  { year: '1951 年', sales: 38 },
  { year: '1952 年', sales: 52 },
  { year: '1956 年', sales: 61 },
  { year: '1957 年', sales: 45 },
  { year: '1958 年', sales: 48 },
  { year: '1959 年', sales: 38 },
  { year: '1960 年', sales: 38 },
  { year: '1962 年', sales: 38 },
];

function CategorySummary() {
  return (
  <div>
    <Title text="Category" level="level2"/>
    <Chart height={300} autoFit data={data} >
        <Interval position="year*sales"  />
    </Chart>
  </div>
  )
}

export default CategorySummary;

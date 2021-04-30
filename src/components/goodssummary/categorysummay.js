import { Chart, Interval } from 'bizcharts';
import Title from "../../commons/components/title/title";


function CategorySummary(props) {

  const {data}=props;

  return (
  <div className="category-graph">
    <Title text="Category" level="level2"/>
    <Chart height={300} autoFit data={data} >
        <Interval position="category*total"  />
    </Chart>
  </div>
  )
}

export default CategorySummary;

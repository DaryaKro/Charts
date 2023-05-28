import styled from "styled-components";
import replaceEnding from "./replaceEnding";
import PieChartWithLegend from "./charts/PieChart";
import {BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell} from 'recharts';

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px;
  gap: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(70px);
  border-radius: 24px;


  grid-column: ${({gridColumn}) => gridColumn};
`

const ChartText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

const ChartHeader = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  text-align: start;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  /* gray/400 */
  color: #9CA3AF;
`

const ChartInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ChartNumber = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  text-align: start;
  letter-spacing: -0.01em;
  /* gray/900 */
  color: #111928;
`

const ChartDescription = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: start;
  line-height: 150%;
  /* gray/700 */
  color: #374151;
`

interface ISmallChart {
  data: any[],
  colors: string[],
  header: string,
  textArray?: [string, string, string],
  description: string,
  mainInfo: number | string;
  size: 'small' | 'large';
  gridColumn: string;
  type?: 'pie' | 'bar';
}

const CustomAxisTick = (props) => {
  const {x, y, payload} = props;

  return (
    <text x={x} y={y} dy={16} textAnchor="end" fill="#111928" fontSize={12}>
      {payload.value}
    </text>
  );
};

const Chart = ({
                 data,
                 colors,
                 header,
                 textArray,
                 description,
                 mainInfo,
                 size = 'small',
                 gridColumn,
                 type = 'pie'
               }: ISmallChart) => {
  return (
    <ChartWrapper gridColumn={gridColumn}>
      <ChartText>
        <ChartHeader>{header}</ChartHeader>
        <ChartInfo>
          <ChartNumber>{mainInfo + ' ' + replaceEnding(mainInfo, textArray)}</ChartNumber>
          <ChartDescription>{description}</ChartDescription>
        </ChartInfo>
      </ChartText>
      {
        type === 'pie' ? <PieChartWithLegend data={data} colors={colors} size={size}></PieChartWithLegend> :
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={600}
              height={300}
              data={data}
              margin={{
                left: -32,
              }}
            >
              <XAxis dataKey="name" tickLine={false} tick={<CustomAxisTick/>} stroke="#9CA3AF" interval={0}/>
              <YAxis tickLine={false} tick={<CustomAxisTick/>} stroke="#9CA3AF"/>
              <Tooltip/>
              <Bar dataKey="value" fill="#6875F5" />
            </BarChart>
          </ResponsiveContainer>
      }
    </ChartWrapper>
  )
}

export default Chart;

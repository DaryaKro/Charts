import {ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend} from "recharts";
import styled from "styled-components";
import CustomLegend from "./CustomLegend";

const ChartWithLegend = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
`

interface ISmallPieChart {
  data: any[],
  colors: string[],
  size: 'small' | 'large',
}

const PieChartWithLegend = ({data, colors, size = 'small'}: ISmallPieChart) => {
  return (
    <ChartWithLegend>
      <ResponsiveContainer width={size === 'small' ? 100 : 160} height={size === 'small' ? 100 : 160}>
        <PieChart width={size === 'small' ? 50 : 80} height={size === 'small' ? 50 : 80}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            startAngle={90}
            endAngle={-270}
            outerRadius={size === 'small' ? 45 : 70}
            innerRadius={size === 'small' ? 30 : 50}
            paddingAngle={2}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
            ))}
          </Pie>
          <Tooltip wrapperStyle={{outline: 0, borderRadius: 24}}/>
        </PieChart>
      </ResponsiveContainer>
      <CustomLegend data={data} colors={colors}/>
    </ChartWithLegend>
  )
}

export default PieChartWithLegend;

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Progress', value: 90 },
  { name: 'ProgressLeft', value: 10 }
];
const COLORS = ['#f3ce3a', '#00C49F'];

export default class ProgressChart extends PureComponent{
  render() {
    return (
      <>
      <PieChart width={800} height={400} onMouseEnter={this.onPieEnter}>
        <Pie
          data={data}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={3}
          dataKey="value"
          >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
      </PieChart>

      <div>
        <p></p>
      </div>
            </>
    );
  }
};
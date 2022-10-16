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
      <div>
      <PieChart width={200} height={300} onMouseEnter={this.onPieEnter}>
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
      <div className='flex items-center font-bold text-xl'>
        <p className='mr-4'>Progress</p>
        <div className='bg-primary mr-2 w-3 h-3'></div>
        <p>90%</p>
      </div>
      </div>
    );
  }
};
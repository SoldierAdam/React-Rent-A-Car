import * as d3 from 'd3';
import React from 'react';


type Car = {
	id: number;
	kilometer: number;
	plate: string;
	modelYear: number;
	dailyPrice: number;
	minFindeksRate: number;
	imagePath: string;
	modelName: string;
	colorName: string;
};

interface DataChartProps {
	data: Car[];
  }

const DataChart: React.FC<DataChartProps> = ({ data }) => {
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };
  const width = 150 - margin.left - margin.right;
  const height = 150 - margin.top - margin.bottom;

  const x = d3.scaleBand()
  .range([0, width])
  .domain(data.map(d => d.colorName))
  .padding(0.2);

const maxValue = d3.max(data, (d: Car) => d.dailyPrice);

const y = d3.scaleLinear()
  .domain([0, maxValue !== undefined ? maxValue : 0])
  .range([height, 0]);

  return (
    <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
	  {data.map((d: Car) => (
  <rect key={d.colorName} x={x(d.colorName)} y={y(d.dailyPrice)} width={x.bandwidth()} height={height - y(d.dailyPrice)} />
))}
      </g>
    </svg>
  );
};

export default DataChart;
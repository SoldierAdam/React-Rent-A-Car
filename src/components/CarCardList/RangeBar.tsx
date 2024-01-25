import React, { useState } from 'react';
import DataChart from './DataChart';
import { Range } from 'react-range';
import * as d3 from 'd3';

interface Car {
  id: number;
  kilometer: number;
  plate: string;
  modelYear: number;
  dailyPrice: number;
  minFindeksRate: number;
  imagePath: string;
  modelName: string;
  colorName: string;
}

type FilterCriteria = {
  minDailyPrice: number;
  maxDailyPrice: number;
};

interface AppProps {
  data: Car[];
  onFilterChange: (newFilter: FilterCriteria) => void;
}

const App: React.FC<AppProps> = ({ data }) => {
  const [filterRange, setFilterRange] = useState<[number, number]>([0, d3.max(data, d => d.dailyPrice)!]);

  const filteredData = data.filter(d => d.dailyPrice >= filterRange[0] && d.dailyPrice <= filterRange[1]);

  return (
    <div>
      <Range
        min={0}
        max={d3.max(data, d => d.dailyPrice)!}
        values={filterRange}
		onChange={(newValues: number[]) => setFilterRange([newValues[0], newValues[1]])}        
		renderTrack={({ props }: { props: any }) => (
          <div {...props} style={{ ...props.style, height: '30px', width: '100%', backgroundColor: '#ccc' }} />
        )}
        renderThumb={({ props }: { props: any }) => (
          <div {...props} style={{ backgroundColor: '#f00', height: '20px', width: '20px' }} />
        )}
      />
      <DataChart data={filteredData} />
    </div>
  );
};

export default App;
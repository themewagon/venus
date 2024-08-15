import { useMemo } from 'react';
import { SxProps, useTheme } from '@mui/material';
import * as echarts from 'echarts/core';
import ReactEchart from 'components/base/ReactEchart';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';

import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components';

echarts.use([
  LineChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  CanvasRenderer,
]);


interface ClientChartProps {
  data: number[];
  sx?: SxProps;
}

const ClientChart = ({ data, ...rest }: ClientChartProps) => {
  const theme = useTheme();

  const option = useMemo(
    () => ({
      xAxis: {
        type: 'category',
        data: ['', '', '', '', ''],
      },
      yAxis: {
        type: 'value',
        min: 10,
        minInterval: 1,
      },
      series: [
        {
          data,
          type: 'line',
          smooth: true,
        },
      ],
    }),
    [theme, data],
  );

  return <ReactEchart echarts={echarts} option={option} {...rest} />;
};

export default ClientChart;

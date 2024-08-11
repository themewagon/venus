import * as echarts from 'echarts/core';
import ReactEchart from 'components/base/ReactEchart';
import { BarChart } from 'echarts/charts';
import { TooltipComponent, GridComponent, AxisPointerComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { SxProps, useTheme } from '@mui/material';
import { useMemo } from 'react';

echarts.use([BarChart, TooltipComponent, GridComponent, AxisPointerComponent, CanvasRenderer]);

interface TotalSpentChartProps {
  data: number[];
  sx?: SxProps;
}

const TotalSpentChart = ({ data, ...rest }: TotalSpentChartProps) => {
  const theme = useTheme();
  const option = useMemo(
    () => ({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          axis: 'y',
          label: {
            show: true,
            formatter: (params: { value: number | string }) => {
              return `$${params.value}`;
            },
            fontWeight: 500,
            color: theme.palette.primary.main,
            fontSize: theme.typography.caption.fontSize,
            backgroundColor: theme.palette.info.light,
          },
        },
      },
      grid: {
        top: '10%',
        left: '0%',
        right: '0%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          data: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          axisLabel: {
            margin: 15,
            fontWeight: 500,
            color: theme.palette.text.disabled,
            fontSize: theme.typography.caption.fontSize,
            fontFamily: theme.typography.fontFamily,
          },
        },
      ],
      yAxis: [
        {
          type: 'value',
          min: 100,
          minInterval: 1,
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data,
          itemStyle: {
            color: theme.palette.info.dark,
            barBorderRadius: [10, 10, 10, 10],
            emphasis: {
              color: theme.palette.primary.main,
            },
          },
        },
      ],
    }),
    [theme, data],
  );

  return <ReactEchart echarts={echarts} option={option} {...rest} />;
};

export default TotalSpentChart;

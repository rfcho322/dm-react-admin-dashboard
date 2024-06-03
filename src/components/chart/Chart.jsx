import { useState } from "react";
import Chart from "react-apexcharts";
import PropTypes from "prop-types";

const ChartComponent = ({ title, subtitle, height, width, strokeWidth, type, yaxis, categories, seriesData }) => {

    const markerSize = 10;
    const markerStrokeWidth = 7;
    const markerStrokeColors = '#a855f7';
    const markerHoverSizeOffset = 2;

    const markerDiscrete = Array.from({ length: 11 }, (_, i) => ({
        seriesIndex: 0,
        dataPointIndex: i,
        size: 0
    }));
    
    // const xAxisData = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    const [options] = useState({
        grid: {
            show: false,
        },
        fill: {
            colors: ['#a855f7'], // Area color below the line
            pattern: {
              style: 'verticalLines',
          },
        },
        stroke: {
            show: true,
            curve: 'smooth',
            colors: ['#a855f7'],
            width: strokeWidth,
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: markerSize,
            colors: '#fff',
            strokeColors: markerStrokeColors,
            strokeWidth: markerStrokeWidth,
            hover: {
                sizeOffset: markerHoverSizeOffset
            },
            discrete: markerDiscrete
        },
        chart: {
          id: "basic-area",
          foreColor: "#A3A4CC",
          toolbar: {
            show: false,
          },
        },
        xaxis: {
          categories: categories,
        },
        yaxis: {
          show: yaxis,
        }
      });
    
      const [series] = useState([
        {
          name: "series-1",
          data: seriesData,
        }
      ]);

    return (
        <div className={``}>
            <div className="text-card-foreground">{title}</div>
            <small className="text-gray-500">{subtitle}</small>
            <Chart
                options={options}
                series={series}
                type={type}
                height={height}
                width={width}
            />
        </div>
    )
}

ChartComponent.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  strokeWidth: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  yaxis: PropTypes.bool.isRequired,
  categories: PropTypes.array.isRequired,
  seriesData: PropTypes.array.isRequired,
}

export default ChartComponent
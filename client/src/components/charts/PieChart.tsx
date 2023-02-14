import React from "react";
import ReactApexChart from "react-apexcharts";

import { Box, Typography, Stack } from "@pankod/refine-mui";
import { PieChartProps } from "interfaces/home";

const PieChart = ({ title, value, series, colors, width="130px" }: PieChartProps) => {
  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor="background.paper"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
    >
      <Stack direction="column">
        <Typography fontSize={14} color="text.secondary">
          {title}
        </Typography>
        <Typography fontSize={24} color="text.primary" fontWeight={700} mt={1}>
          {value}
        </Typography>
      </Stack>

      <ReactApexChart
        options={{
          chart: { type: "donut" },
          colors,
          legend: { show: false },
          dataLabels: { enabled: false },
        }}
        series={series}
        type="donut"
        width={width}
      />
    </Box>
  );
};

export default PieChart;

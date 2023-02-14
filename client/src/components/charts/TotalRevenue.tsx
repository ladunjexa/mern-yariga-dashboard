import React from "react";
import ReactApexChart from "react-apexcharts";

import { Box, Typography, Stack } from "@pankod/refine-mui";
import { ArrowCircleUpRounded } from "@mui/icons-material";
import { TotalRevenueOptions, TotalRevenueSeries } from "./chart.config";
import { useList } from "@pankod/refine-core";

function CalculateTotalRevenue() {
  const { data } = useList({
    resource: "properties",
  });

  let totalRevenue = 0;
  if (data) {
    data.data.forEach((property) => {
      totalRevenue += property.price;
    });
  }
  return totalRevenue;
}

const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="background.paper"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
      <Typography fontSize={18} fontWeight={600} color="text.primary">
        Total Revenue
      </Typography>
      <Stack my="20px" direction="row" gap={4} flexWrap="wrap">
        <Typography fontSize={28} fontWeight={700} color="text.primary">
          ${CalculateTotalRevenue()}
        </Typography>
        <Stack direction="row" alignItems="center" gap={1}>
          <ArrowCircleUpRounded sx={{ fontSize: 25, color: "#475BE8" }} />
          <Stack>
            <Typography fontSize={15} color="#475BE8">
              0.8%
            </Typography>
            <Typography fontSize={12} color="#808191">
              Than Last Month
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <ReactApexChart
        series={TotalRevenueSeries}
        type="bar"
        height={310}
        options={TotalRevenueOptions}
      />
    </Box>
  );
};

export default TotalRevenue;

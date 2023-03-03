import React from "react";
import { useList } from "@pankod/refine-core";
import { Typography, Box, Stack } from "@pankod/refine-mui";

import {
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  Loader,
} from "components";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: "properties",
    config: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  const latestProperties = data?.data ?? [];

  if (isLoading) return <Loader path="Dashboard" />;
  if (isError) return <Loader path="Dashboard" isError={true} />;

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color="text.primary">
        Dashboard
      </Typography>
      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}> 
        <PieChart
          title="Properties for Sale"
          value={data.total}
          series={[75, 25]}
          colors={["#275BE8", "#F4F4F4"]}
        />
        <PieChart
          title="Properties for Rent"
          value={550}
          series={[60, 40]}
          colors={["#FD8539", "#F4F4F4"]}
        />
        <PieChart
          title="Total Customers"
          value={5684}
          series={[85, 15]}
          colors={["#2ED480", "#F4F4F4"]}
        />
        <PieChart
          title="Total Agents"
          value={684}
          series={[63, 37]}
          colors={["#FE6D8E", "#F4F4F4"]}
        />
      </Box>
      <Stack
        mt="25px"
        width="100%"
        direction={{ xs: "column", lg: "row" }}
        gap={4}
      >
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="background.paper"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize={18} fontWeight={600} color="text.primary">
          Latest Properties
        </Typography>
        <Box
          mt={2.5}
          sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}
          justifyContent={{ md: "flex-start", xs: "center" }}
        >
          {latestProperties.map((property) => (
            <PropertyCard
              key={property._id}
              id={property._id}
              title={property.title}
              location={property.location}
              price={property.price}
              photo={property.photo}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;

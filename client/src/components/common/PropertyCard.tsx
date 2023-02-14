import React from "react";
import { Place } from "@mui/icons-material";
import { Link } from "@pankod/refine-react-router-v6";
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@pankod/refine-mui";

import { PropertyCardProps } from "interfaces/property";

const PropertyCard = ({
  id,
  title,
  location,
  price,
  photo,
}: PropertyCardProps) => {
  return (
    <Card
      component={Link}
      to={`/properties/show/${id}`}
      sx={{
        maxWidth: "330px",
        padding: "10px",
        "&:hover": {
          boxShadow: "0 22px 45px 2px rgba(176, 176, 176, 0.1)",
        },
        cursor: "pointer",
        backgroundColor: "background.paper",
        borderRadius: "15px"
      }}
    >
      <CardMedia
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt="card image"
        sx={{ borderRadius: "10px" }}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "10px",
          padding: "5px",
        }}
      >
        <Stack direction="column" gap={1}>
          <Typography fontSize={16} fontWeight={500} color="text.primary">
            {title}
          </Typography>
          <Stack direction="row" gap={0.5} alignItems="flex-start">
            <Place
              sx={{ fontSize: 18, color: "text.primary", marginTop: 0.5 }}
            />
            <Typography fontSize={14} color="text.secondary">
              {location}
            </Typography>
          </Stack>
        </Stack>
        <Box
          px={1.5}
          py={0.5}
          borderRadius={1}
          bgcolor="primary.dark"
          height="fit-content"
        >
          <Typography fontSize={12} fontWeight={600} color="#475BE8">
            ${price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;

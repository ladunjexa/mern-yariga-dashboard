import { InfinitySpin } from "react-loader-spinner";
import { LoaderProps } from "interfaces/common";
import { Box, Typography } from "@pankod/refine-mui";

const Loader = ({ width = 200, path, isError = false }: LoaderProps) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
    >
      {isError ? (
        <Typography fontSize={17} color="text.primary">
          Error occured while loading {path}..
        </Typography>
      ) : (
        <>
          <Typography fontSize={17} color="text.primary">
            Loading {path}..
          </Typography>
          <InfinitySpin width={`${width}`} color="#475BE8" />
        </>
      )}
    </Box>
  );
};

export default Loader;

import React, { useContext } from "react";
import { useGetIdentity } from "@pankod/refine-core";
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Avatar,
} from "@pankod/refine-mui";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

import { ColorModeContext } from "contexts";

export const Header: React.FC = () => {
  const { mode, setMode } = useContext(ColorModeContext);

  const { data: user } = useGetIdentity();
  const shouldRenderHeader = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.
  // sx={{ background: "#fcfcfc" }}
  return shouldRenderHeader ? (
    <AppBar color="default" position="sticky" elevation={0} bgcolor="secondary.main">
      <Toolbar>
        <Stack
          direction="row"
          width="100%"
          justifyContent="flex-end"
          alignItems="center"
          gap={1}
        >
          <IconButton
            sx={{ background: "transparent" }}
            onClick={() => {
              setMode();
            }}
          >
            {mode === "dark" ? <LightModeOutlined /> : <DarkModeOutlined />}
          </IconButton>
          <Stack
            direction="row"
            gap="16px"
            alignItems="center"
            justifyContent="center"
          >
            {user?.avatar ? (
              <Avatar src={user?.avatar} alt={user?.name} />
            ) : null}
            {user?.name ? (
              <Typography variant="subtitle2">{user?.name}</Typography>
            ) : null}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  ) : null;
};

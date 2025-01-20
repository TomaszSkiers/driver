import { Box, Typography } from "@mui/material"

export const Header = () => {
  return (
    <Box>
      <Typography
        variant="h2"
        color="text.primary"
        sx={{
          backgroundColor: "background.default",
          width: "100%",
          p: 3
        }}
      >
        DRIVER Header will be soon
      </Typography>
    </Box>
  )
}

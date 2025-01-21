import { Alert, Button, CircularProgress, Stack } from "@mui/material"

export const isLoading = () => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "200px" }}
    >
      <CircularProgress />
    </Stack>
  )
}

export const isError = () => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "200px" }}
    >
      <Alert severity="error">
        Something went wrong while fetching advices.
      </Alert>
      <Button variant="contained" onClick={() => window.location.reload()}>
        Try Again
      </Button>
    </Stack>
  )
}

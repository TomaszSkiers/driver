import { Alert, Button, CircularProgress, Stack, Typography } from "@mui/material"

export const isLoading = () => {
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: "200px" }}
    >
      <Typography variant="h5" color="text.primary" sx={{p: 2, }}>pobieram dane.... czekaj</Typography>
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
        Coś poszło nie tak z pobieraniem danych.
      </Alert>
      <Button variant="contained" onClick={() => window.location.reload()}>
        Try Again
      </Button>
    </Stack>
  )
}

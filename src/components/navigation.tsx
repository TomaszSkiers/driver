import { Button, Box } from "@mui/material"
// import { useState } from "react"
import { Link } from "react-router-dom"

export const Navigation = () => {
  // const [activeButton, setActiveButton] = useState<string>("/")
  // const handleButtonClick = (path: string) => {
  //   setActiveButton(path)
  // }
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "background.default",
        gap: 2,
        p: 2
      }}
    >
      <Button
        component={Link}
        to="/"
        fullWidth
        // onClick={() => handleButtonClick("/")}
        color="warning"
        variant="outlined"
        disableRipple={true}
      >
        porady
      </Button>
      {/* <Button
        component={Link}
        to="/forum"
        color="warning"
        variant="outlined"
        fullWidth
        // onClick={() => handleButtonClick("forum")}

        disableRipple={true}
      >
        Forum
      </Button> */}
      <Button
        component={Link}
        to="/search"
        fullWidth
        // onClick={() => handleButtonClick("search")}
        color="warning"
        variant="outlined"
        disableRipple={true}
      >
        wyszukaj
      </Button>
    </Box>
  )
}

import { Button, Box } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

export const Navigation = () => {
  const [activeButton, setActiveButton] = useState<string>("/")
  const handleButtonClick = (path: string) => {
    setActiveButton(path)
  }
  return (
    <Box sx={{ display: "flex" }}>
      <Button
        component={Link}
        to="/"
        color="inherit"
        fullWidth
        onClick={() => handleButtonClick("/")}
        sx={{
          backgroundColor:
            activeButton === "/" ? "primary.light" : "transparent",
          "&:hover": { backgroundColor: "primary.main", color: "white" },
          borderRadius: 0,
        }}
        disableRipple={true}
      >
        porady
      </Button>
      <Button
        component={Link}
        to="/forum"
        color="inherit"
        fullWidth
        onClick={() => handleButtonClick("forum")}
        sx={{
          backgroundColor:
            activeButton === "forum" ? "primary.light" : "transparent",
          "&:hover": { backgroundColor: "primary.main", color: "white" },
          borderRadius: 0,
        }}
        disableRipple={true}
      >
        Forum
      </Button>
      <Button
        component={Link}
        to="/search"
        color="inherit"
        fullWidth
        onClick={() => handleButtonClick("search")}
        sx={{
          backgroundColor:
            activeButton === "search" ? "primary.light" : "transparent",
          "&:hover": { backgroundColor: "primary.main", color: "white" },
          borderRadius: 0,
        }}
        disableRipple={true}
      >
        wyszukaj
      </Button>
    </Box>
  )
}

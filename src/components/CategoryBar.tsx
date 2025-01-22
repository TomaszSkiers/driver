import React, { useEffect, useRef, useState } from "react"
import { Link as RouterLink } from "react-router-dom"
import Link from "@mui/material/Link"
import { Box, IconButton, Typography } from "@mui/material"
import { ArrowForward, ArrowBack } from "@mui/icons-material"

// Typowanie kategorii jako tablica stringów
const categories: string[] = [
  "bezpieczeństwo",
  "technika",
  "korki",
  "kultura",
  "sport",
  "rozrywka"
]

export const HorizontalLinksWithButtons: React.FC = () => {
  // Typowanie referencji do kontenera
  const containerRef = useRef<HTMLDivElement>(null)

  const [showButtons, setShowButtons] = useState(false)

  // Funkcja sprawdzająca, czy przyciski są potrzebne
  const checkButtonsVisibility = () => {
    if (containerRef.current) {
      const { scrollWidth, clientWidth } = containerRef.current
      setShowButtons(scrollWidth > clientWidth) // Przyciski widoczne tylko, gdy zawartość wykracza poza kontener
    }
  }

  // Funkcja do przewijania w lewo
  const scrollLeft = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: "smooth" })
    }
  }

  // Funkcja do przewijania w prawo
  const scrollRight = (): void => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: "smooth" })
    }
  }

  // Ustawienie widoczności przycisków przy montażu i zmianie rozmiaru okna
  useEffect(() => {
    checkButtonsVisibility()
    window.addEventListener("resize", checkButtonsVisibility)
    return () => {
      window.removeEventListener("resize", checkButtonsVisibility)
    }
  }, [])

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: !showButtons ? "center" : "space-between"
      }}
    >
      {showButtons && (
        <IconButton onClick={scrollLeft} sx={{ marginRight: 1 }}>
          <ArrowBack />
        </IconButton>
      )}

      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          overflow: "hidden",
          whiteSpace: "nowrap"
          //   width: "100%",
        }}
      >
        {categories.map((category, index) => (
          <React.Fragment key={category}>
            <Link
              component={RouterLink}
              to={`/category-bar-link/${category}`}
              underline="none"
              sx={{ margin: "0 8px", color: "primary.main" }}
            >
              {category}
            </Link>
            {index < categories.length - 1 && (
              <Typography color="primary.main">|</Typography>
            )}
          </React.Fragment>
        ))}
      </Box>

      {showButtons && (
        <IconButton onClick={scrollRight} sx={{ marginLeft: 1 }}>
          <ArrowForward />
        </IconButton>
      )}
    </Box>
  )
}



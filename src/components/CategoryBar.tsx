import React, { useRef } from "react"
import { Box, Chip, IconButton } from "@mui/material"
import { ArrowForward, ArrowBack } from "@mui/icons-material"


export const HorizontalLinksWithButtons: React.FC<{
  setTag: React.Dispatch<React.SetStateAction<{tag: string; tagNb: number | null}>>,
  tags: string[]
  tagNb: number | null
}> = ({ setTag, tags, tagNb }) => {


  //funkcja ogarniająca handleclicka zapis do stanu w Home i zapamiętanie klikniętego taga
  const handleClick = (category: string, tagNumber: number) => {
    setTag((prev) => ({
      ...prev,
      tag: category,
      tagNb: tagNumber,
    }))
  }

  // Typowanie referencji do kontenera
  const containerRef = useRef<HTMLDivElement>(null)


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

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <IconButton onClick={scrollLeft} sx={{ marginRight: 1 }}>
        <ArrowBack />
      </IconButton>

      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          overflow: "hidden",
          whiteSpace: "nowrap"
          //   width: "100%",
        }}
      >
        {tags.map((category, index) => (
          <React.Fragment key={category}>
            <Chip
              variant="outlined"
              label={category}
              color= {index === tagNb ? 'secondary' : 'primary'} 
              sx={{m: 1}}
              onClick={()=> {handleClick(category, index)}}
            />
          </React.Fragment>
        ))}
      </Box>

      <IconButton onClick={scrollRight} sx={{ marginLeft: 1 }}>
        <ArrowForward />
      </IconButton>
    </Box>
  )
}


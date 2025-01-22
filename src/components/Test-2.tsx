import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography
} from "@mui/material"

import { useState } from "react"
import { CustomLabel } from "../styles/Test.style"

export const Test2 = () => {
  const [selectedValue, setSelectedValue] = useState<string>("")

  const handleRadioChange = (data: string) => {
    setSelectedValue(data)
  }

  return (
    <FormControl
      component="fieldset"
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.default"
      }}
    >
      <Typography color="text.primary" variant="h4" sx={{ p: 2 }}>
        Pytanie do testu
      </Typography>

      <RadioGroup
        name="grupa2"
        value={selectedValue}
        onChange={(e) => {
          handleRadioChange(e.target.value)
        }}
      >
        <Grid container spacing={2} sx={{ p: 2 }}>
          <Grid item xs={12} sm={4}>
            <Box component="img" src="/test1.jfif"></Box>

            <FormControlLabel
              sx={{ display: "flex", m: 0 }}
              value="option1"
              control={<Radio sx={{ alignSelf: "flex-start" }} />}
              label={
                <CustomLabel>
                  <strong style={{ textAlign: "left", display: "block" }}>
                    1.
                  </strong>
                  <br />
                  <div style={{ textAlign: "left" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, quod dolorum eum iure a perspiciatis error quasi
                    adipisci doloribus maxime, sunt, labore perferendis quo
                    vitae asperiores veritatis distinctio! Voluptatem, odio?
                  </div>
                </CustomLabel>
              }
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box component="img" src="/test2.jfif"></Box>

            <FormControlLabel
              sx={{ display: "flex", m: 0 }}
              value="option2"
              control={<Radio sx={{ alignSelf: "flex-start" }} />}
              label={
                <CustomLabel>
                  <strong style={{ textAlign: "left", display: "block" }}>
                    1.
                  </strong>
                  <br />
                  <div style={{ textAlign: "left" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, quod dolorum eum iure a perspiciatis error quasi
                    adipisci doloribus maxime, sunt, labore perferendis quo
                    vitae asperiores veritatis distinctio! Voluptatem, odio?
                  </div>
                </CustomLabel>
              }
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Box component="img" src="/test3.jfif"></Box>

            <FormControlLabel
              sx={{ display: "flex", m: 0 }}
              value="option3"
              control={<Radio sx={{ alignSelf: "flex-start" }} />}
              label={
                <CustomLabel>
                  <strong style={{ textAlign: "left", display: "block" }}>
                    1.
                  </strong>
                  <br />
                  <div style={{ textAlign: "left" }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, quod dolorum eum iure a perspiciatis error quasi
                    adipisci doloribus maxime, sunt, labore perferendis quo
                    vitae asperiores veritatis distinctio! Voluptatem, odio?
                  </div>
                </CustomLabel>
              }
            />
          </Grid>
        </Grid>
      </RadioGroup>
      <Button
        variant="outlined"
        color="warning"
        sx={{ p: "10px 40px 10px 40px", mt: 2, mb: 8, alignSelf: "center" }}
      >
        sprawdź
      </Button>
    </FormControl>
  )
}

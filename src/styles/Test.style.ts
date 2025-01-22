import { styled } from "@mui/material/styles";

export const Style = {
    header: {
        p: 2, backgroundColor: 'darkgreen'
    },
    quickFlex: {
        display: 'flex',
        flexDirection: 'column',
    }
}

export const CustomLabel = styled("div")(({ theme }) => ({
  textAlign: "left",
  marginBottom: "10px",
  fontSize: "1.2rem",
  marginLeft: "20px",
  color: theme.palette.text.primary 
}))
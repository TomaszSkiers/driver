import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import "./App.css"
import { Navigation } from "./components/navigation"
import { Home } from "./pages/Home"
import { Header } from "./components/header"
import { Forum } from "./pages/forum"
import { Search } from "./pages/Sarch"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Test } from "./pages/test"
import { createTheme, ThemeProvider } from "@mui/material/styles"

const AppStructure = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
    </>
  )
}
const theme = createTheme({
  palette: {
    mode: "dark"
  }
})

function App() {

  const queryClient = new QueryClient()

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppStructure />}>
              <Route path="/" element={<Home />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/search" element={<Search />} />
              <Route path="/test/:id" element={<Test />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App

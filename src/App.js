import "./App.css";
import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";

const theme = createTheme({
  typography: {
    fontFamily: ["Popping"],
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Card
          sx={{
            minWidth: 275,
            marginTop: "25vh",
            background: "#1563ae",
            color: "white",
            borderRadius: "15px",
            padding: 2
          }}
        >
          <CardContent>
            <div style={{ display: "flex", alignItems: "end" }}>
              <Typography sx={{ ml: 2 }} variant="h2" component="div">
                Rabat
              </Typography>
              <Typography sx={{ ml: 3 }}>12/08/2023</Typography>
            </div>
            <hr />
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Typography variant="h1">
                  86
                </Typography>
              </Grid>
              <Grid item xs={7}>
                <CloudIcon sx={{fontSize: 200}}/>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;

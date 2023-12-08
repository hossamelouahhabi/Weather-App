import "./App.css";
import {
  Card,
  CardContent,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import CloudIcon from "@mui/icons-material/Cloud";

import { useEffect, useState } from "react";
import axios from "axios";

const theme = createTheme({
  typography: {
    fontFamily: ["Popping"],
  },
});

let cancelAxios = null;

function App() {

  const [temp, setTemp] = useState({
    number: null,
    description: "",
    min: null,
    max: null,
    icon: null
  });
  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=34.0531&lon=-6.79846&appid=88b51be3fbad8fb2eb940fa232ef84d9",
        {
          cancelToken: new axios.CancelToken((c) => {
            cancelAxios = c
          })
        }
      )
      .then(function (response) {
        // en cas de réussite de la requête
        const responseTemp = Math.round(response.data.main.temp - 272.15);
        const min =  Math.round(response.data.main.temp_min - 272.15);
        const max =  Math.round(response.data.main.temp_max - 272.15);
        const description = response.data.weather[0].description;
        const responseIcon = response.data.weather[0].icon

        setTemp({
          number: responseTemp,
          description: description,
          min: min,
          max: max,
          icon: `https://openweathermap.org/img/wn/${responseIcon}@2x.png`
        })

        console.log(response);
      })
      .catch(function (error) {
        // en cas d’échec de la requête
        console.log(error);
      });
      
      return () => {
        console.log("canceling");
        cancelAxios()
      }

  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        {/*Card*/}
        <Card
          sx={{
            minWidth: 275,
            marginTop: "27vh",
            background: "#1563ae",
            color: "white",
            borderRadius: "15px",
            padding: 2,
            width: "100%",
          }}
        >
          {/*Content*/}
          <CardContent sx={{ marginBottom: "-25px" }}>
            {/*City/Time*/}
            <div style={{ display: "flex", alignItems: "end" }}>
              <Typography
                sx={{ ml: 2, fontWeight: "800" }}
                variant="h2"
                component="div"
              >
                Rabat
              </Typography>
              <Typography sx={{ ml: 3, pb: 1 }}>12/08/2023</Typography>
            </div>
            {/*=====City/Time=====*/}
            <hr />

            {/*Degree & Description*/}
            <Grid container spacing={6}>
              <Grid item xs={6}>

                {/*Temp*/}
                <Typography
                  variant="h1"
                  sx={{ width: "100%", fontSize: "100px" }}
                >
                  {temp.number}
                  <img src={temp.icon}/>
                </Typography>

                {/*=====Temp=====*/}
                <Typography variant="h6">{temp.description}</Typography>

                {/* Min / Max */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h5>min: {temp.min}</h5>
                  <h5>|</h5>
                  <h5>max: {temp.max}</h5>
                </div>
                {/*=====Min / Max=====*/}
              </Grid>

              <Grid item xs={6}>
                <CloudIcon sx={{ fontSize: 200 }} />
              </Grid>
            </Grid>
            {/*=====Degree & Description=====*/}
          </CardContent>
          {/*=====Content=====*/}
        </Card>
        {/*=====Card====*/}

      </Container>
    </ThemeProvider>
  );
}

export default App;

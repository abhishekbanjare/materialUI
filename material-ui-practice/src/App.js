import './App.css';
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import Form from "./components/Form";
import Navigation from "./components/Navigation";
import Cards from "./components/Cards";
import DialogBox from './components/DialogBox';

function App() {
  return (
    <div className='App'>
      {/* <Navigation /> */}


      {/* <Typography variant="h3" sx={{ color: "blue" }}>TechInfo YT</Typography> */}

      {/* BUTTON......................................................................... */}

      {/* <Button variant="contained" color="success" sx={{margin:"30px"}} disabled>Click Me</Button>
       <Button variant="text">Click Me</Button>
       <Button variant="outlined" onClick={() => alert("you clicked")} size="large">Click Me for Appction</Button>
       <br />
       <br/> */}

      {/* TextField............................................................................. */}
      {/* <input type="text" placeholder="First Name.... " /> <br/> */}
      {/* <TextField type="text" placeholder="Name" variant="standard" sx={{margin:"30px"}}/>
       <TextField type="text" placeholder="Email..." variant="outlined" sx={{margin:"30px"}}/>
       <TextField type="text" placeholder="Password" variant="filled" sx={{margin:"30px"}}/> */}

      {/* <Form /> */}

      {/* <div>
        <Cards />
      </div> */}
      <DialogBox />

    </div>
  );
}

export default App;

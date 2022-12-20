import Hedare from "./Component/Header";
import Home from "./Component/Home/Home";
import { Box } from "@mui/material";
import Dataprovider from "./context/Dataprovider";
import Stt from "./constants/Stt";

function App() {
  return (
    <Dataprovider>
      {/* <Box><Stack direction="row" spacing={0}justifyContent ="space-evenly" >
        <Stt/>
        </Stack> */}
      <Hedare />
      <Box style={{ marginTop: 54 }}>
        <Home />
      </Box>
      {/* </Box> */}
    </Dataprovider>
  );
}

export default App;
 
import React, { useState } from "react";
import { Box, Grid, Select, MenuItem, TextField, FormControl, InputLabel, Button } from "@material-ui/core";
import './CariMobil1.css'
import Kartu from '../../src/Assets/Kartu/Kartu'

export const CariMobil1 = () => {
  const [buttonPopup, setbuttonPopup] = useState(false)

  // const [userData, setUserData] = useState([]);

  // React.useEffect(({ item }) => {
  //   const Data = [{ item }];
  //   setUserData(Data);
  // });

  // const handleSearch = () => {
  //   const newData = userData.filter(y => y.)
  // };

  return (
    <div className="Search" boxShadow={4} style={{ display: "flex", position: "relative", justifyContent: "center", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}>
      <Box
        boxShadow={4}
        borderRadius={8}
        sx={{ flexGrow: 1 }}
        style={{ position: "absolute", top: "-56px", background: "white", width: "80%", display: "flex", padding: "10px", margin: "auto", boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.15)" }}
      >
        <Grid elevation={0} spacing={1} style={{ margin: "10px" }}>
          <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Tipe Driver</InputLabel>
          <FormControl sx={{ m: 1 }} size="small" margin="dense" variant="outlined" style={{ borderRadius: 4, width: "200px", borderColor: "#5cb85f" }}>
            <Select id="demo-customized-select-native">
              <MenuItem value={10}>Dengan Sopir</MenuItem>
              <MenuItem value={10}>Tanpa Sopir</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs style={{ margin: "10px" }}>
          <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Tanggal</InputLabel>
          <TextField
            fullWidth
            size="small"
            margin="dense"
            color="success"
            variant="outlined"
            id="date"
            type="date"
            defaultValue={new Date()}
            sx={{ width: 200 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>

        <Grid item xs style={{ margin: "10px" }}>
          <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Waktu Jemput/ Ambil</InputLabel>
          <TextField
            fullWidth
            size="small"
            margin="dense"
            variant="outlined"
            id="time"
            type="time"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300,
            }}
            sx={{ width: 220 }}
          />
        </Grid>

        <Grid item xs style={{ margin: "10px" }}>
          <InputLabel style={{ justifyContent: "flex-start", marginBottom: "10px", fontSize: "small" }}>Jumlah Penumpang (Optional)</InputLabel>
          <TextField
            fullWidth
            size="small"
            margin="dense"
            variant="outlined"
            id="outlined-number"
            defaultValue="0"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            sx={{ input: { color: "yellow" }, label: { color: "blue" } }}
          />
        </Grid>

        <Grid>
          <Button onClick={()=> setbuttonPopup(true)} variant="contained" id = 'btn-cari'>
            Cari Mobil
          </Button>
        </Grid>
      </Box>
      <br></br><br></br>
      <Kartu trigger={buttonPopup} setTrigger={setbuttonPopup}></Kartu>
    </div>
  );
}

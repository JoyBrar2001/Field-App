import { Autocomplete, Button, Fab, FormControlLabel, FormGroup, Switch, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { Add, Edit, Navigation, Favorite, Laptop, Tv, PhoneAndroid } from '@mui/icons-material';
import React from 'react';

const App = () => {
  const [devices, setDevices] = React.useState(() => ['phone']);
  const autocompleteOptions = ["option 1", "option 2", "option 3", "option 4", "option 5", "option 6"];

  const handleDevices = (event, newDevices) => {
    if (newDevices.length) {
      setDevices(newDevices);
    }
  };

  return (
    <>
    <div className="flex md:hidden justify-center items-center h-screen bg-gray-100">
        <p className="text-lg font-semibold text-gray-700">Go to Desktop to get the full experience</p>
      </div>
      <div className="hidden md:flex h-screen w-full">
        {/* Left side - iframe */}
        <div className="w-full flex justify-center items-center p-4">
          <iframe
            src="https://fieldapp-39256.firebaseapp.com/"
            title="FieldApp"
            className="scale-[60%] border-4 border-googleBlue-500/50 rounded-2xl"
            width="820"
            height="1180"
          ></iframe>
        </div>

        {/* Right side - form */}
        <div className="w-full p-6 bg-white shadow-lg rounded-lg overflow-y-auto">
          <h1 className="text-3xl font-bold mb-6 text-googleBlue-700">Field App</h1>
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Text Fields</h2>
              <div className="space-y-4">
                <TextField
                  id="outlined-basic"
                  label="Outlined"
                  variant="outlined"
                  fullWidth
                  className="bg-gray-50"
                />
                <TextField
                  id="filled-basic"
                  label="Filled"
                  variant="filled"
                  fullWidth
                  className="bg-gray-50"
                />
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  fullWidth
                  className="bg-gray-50"
                />
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Autocomplete</h2>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={autocompleteOptions}
                sx={{ width: '100%' }}
                renderInput={(params) => <TextField {...params} label="Movie" variant="outlined" />}
              />
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Buttons</h2>
              <div className="flex gap-4">
                <Button variant="text" color="primary">Text</Button>
                <Button variant="contained" color="primary">Contained</Button>
                <Button variant="outlined" color="primary">Outlined</Button>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Floating Action Buttons</h2>
              <div className="flex gap-4">
                <Fab color="primary" aria-label="add">
                  <Add />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                  <Edit />
                </Fab>
                <Fab variant="extended" color="info">
                  <Navigation sx={{ mr: 1 }} />
                  Navigate
                </Fab>
                <Fab disabled aria-label="like" color="default">
                  <Favorite />
                </Fab>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Switches</h2>
              <FormGroup>
                <FormControlLabel control={<Switch defaultChecked />} label="Label" />
                <FormControlLabel required control={<Switch />} label="Required" />
                <FormControlLabel disabled control={<Switch />} label="Disabled" />
              </FormGroup>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">Toggle Buttons</h2>
              <ToggleButtonGroup
                value={devices}
                onChange={handleDevices}
                aria-label="device"
              >
                <ToggleButton value="laptop" aria-label="laptop">
                  <Laptop />
                </ToggleButton>
                <ToggleButton value="tv" aria-label="tv">
                  <Tv />
                </ToggleButton>
                <ToggleButton value="phone" aria-label="phone">
                  <PhoneAndroid />
                </ToggleButton>
              </ToggleButtonGroup>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

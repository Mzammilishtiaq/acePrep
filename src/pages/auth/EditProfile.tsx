import React from "react";
import { TextField, Button, MenuItem } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const cities = ["City 1", "City 2", "City 3"]; // Replace with your cities

const EditProfile: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 border-b">
        <span className="text-2xl font-bold text-[#6C7CFF]">AcePrep</span>
        <div className="flex items-center gap-8">
          <Button variant="outlined" className="!border-[#6C7CFF] !text-[#6C7CFF] !rounded-full px-6">
            Download App
          </Button>
          <span className="text-[#6C7CFF] font-semibold cursor-pointer">Features</span>
          <span className="text-[#6C7CFF] font-semibold cursor-pointer">About</span>
          <span className="text-[#6C7CFF] font-semibold cursor-pointer">Log out</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-12">
        {/* Back Button */}
        <div className="w-full max-w-4xl flex items-center mb-4">
          <Button startIcon={<ArrowBackIosNewIcon />} className="!text-gray-400 !font-bold !normal-case" disableRipple>
            Back
          </Button>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold mb-8">Edit Profile</h1>

        {/* Form */}
        <form className="w-full max-w-4xl grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <TextField label="First Name" variant="filled" InputProps={{ disableUnderline: true }} fullWidth />
            <TextField label="Contact Number" variant="filled" InputProps={{ disableUnderline: true }} fullWidth />
            <TextField label="Class" variant="filled" InputProps={{ disableUnderline: true }} fullWidth />
            <TextField
              label="City"
              variant="filled"
              InputProps={{ disableUnderline: true }}
              select
              fullWidth
              defaultValue=""
            >
              <MenuItem value="" disabled>
                City
              </MenuItem>
              {cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </TextField>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <TextField label="Last Name" variant="filled" InputProps={{ disableUnderline: true }} fullWidth />
            <TextField label="Institution" variant="filled" InputProps={{ disableUnderline: true }} fullWidth />
            <TextField label="Group" variant="filled" InputProps={{ disableUnderline: true }} fullWidth />
            {/* Empty for alignment */}
            <div />
          </div>
        </form>

        {/* Update Button */}
        <Button
          variant="contained"
          className="!bg-[#6C7CFF] !text-white !rounded-full !mt-12 !w-[600px] !h-16 !text-lg !font-bold"
          style={{ boxShadow: "none" }}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default EditProfile;

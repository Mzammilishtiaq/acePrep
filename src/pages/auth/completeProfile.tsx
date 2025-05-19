import { TextField, Button, MenuItem } from "@mui/material";

const classes = [
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

const groups = [
  "Science",
  "Commerce",
  "Arts",
];

const cities = [
  "Lahore",
  "Karachi",
  "Islamabad",
  "Other",
];

export default function CompleteProfile() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-20 py-4 border-b">
        <span className="text-2xl font-bold text-[#6C77FF]">AcePrep</span>
        <nav className="flex items-center gap-8">
          <Button variant="outlined" sx={{ borderRadius: 20, color: "#6C77FF", borderColor: "#6C77FF" }}>
            Download App
          </Button>
          <a href="#" className="text-[#6C77FF] font-semibold">Features</a>
          <a href="#" className="text-[#6C77FF] font-semibold">About</a>
        </nav>
      </header>

      {/* Profile Form */}
      <div className="flex flex-col items-center mt-16">
        <h1 className="text-4xl font-bold mb-2">Profile</h1>
        <p className="mb-8 text-lg">Please complete your profile</p>
        <form className="w-full max-w-4xl grid grid-cols-2 gap-6">
          <TextField label="First Name" variant="outlined" fullWidth />
          <TextField label="Last Name" variant="outlined" fullWidth />
          <TextField label="Father Name" variant="outlined" fullWidth />
          <TextField label="Email Adress" variant="outlined" fullWidth />
          <TextField label="Contact Number" variant="outlined" fullWidth />
          <TextField label="Institution" variant="outlined" fullWidth />
          <TextField
            label="Class"
            select
            fullWidth
            defaultValue=""
          >
            {classes.map((option) => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </TextField>
          <TextField
            label="Group"
            select
            fullWidth
            defaultValue=""
          >
            {groups.map((option) => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </TextField>
          <TextField
            label="City"
            select
            fullWidth
            className="col-span-2"
            defaultValue=""
          >
            {cities.map((option) => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </TextField>
        </form>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#6C77FF",
            borderRadius: 9999,
            marginTop: 6,
            width: "50%",
            height: 60,
            fontSize: 20,
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": { backgroundColor: "#5a63d8" }
          }}
        >
          Login
        </Button>
      </div>
    </div>
  );
}

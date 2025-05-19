import React from "react";
import Button from "@mui/material/Button";

interface SocialButtonProps {
  text: string;
  onClick?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ text, onClick }) => (
  <Button
    variant="contained"
    fullWidth
    onClick={onClick}
    className="!bg-gray-100 !text-black !rounded-full !py-6 !text-lg !font-semibold !shadow-none hover:!bg-gray-200 mb-4"
    disableElevation
  >
    {text}
  </Button>
);

export default SocialButton;
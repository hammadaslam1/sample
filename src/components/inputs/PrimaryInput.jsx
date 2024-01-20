import { Input } from "@mui/joy";

const PrimaryInput = ({ sx = {}, ...props }) => {
  return (
    <Input
      variant="plain"
        {...props}
        sx={{marginY: 3, ...sx}}
    />
  );
};

export default PrimaryInput;

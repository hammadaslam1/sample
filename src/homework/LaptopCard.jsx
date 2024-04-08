import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

const LaptopCard = ({ data, i }) => {
  return (
    <Card
      sx={{
        minWidth: 275,
        border: data.available ? "3px solid #fff" : "3px solid #f00",
      }}
    >
      <CardContent>
        <Typography variant="h4" color="text.secondary" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="h5" component="div">
          {data.price}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {data.quantity}
        </Typography>
        <Typography variant="body1">
          {data.available ? "available" : "out of stock"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{data.available.toString()}</Button>
      </CardActions>
    </Card>
  );
};

export default LaptopCard;

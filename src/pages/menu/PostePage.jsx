import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const PostePage = () => {
  return (
    <Grid container>
      <Card variant="outlined">
        {" "}
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Registrados
          </Typography>
          <Typography
            variant="h2"
            fontWeight={"bold"}
            color="text.secondary"
            component="div"
          >
            2145
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Postes
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <hr />
          </Typography>
          <CardActions style={{ padding: 0 }}>
            <Button fullWidth startIcon={<Add />} variant="contained">
              solucionar
            </Button>
            <Button fullWidth startIcon={<Add />} variant="contained">
              añadir
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PostePage;

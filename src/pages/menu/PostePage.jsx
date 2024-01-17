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
      <Grid item xs={12} md={4}>
        <Card variant="outlined">
          {" "}
          <CardContent
            style={{ display: "flex", flexDirection: "column", flex: 1 }}
          >
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Registrados
              <hr />
            </Typography>

            <Grid container flexDirection={"column"} margin={0} flex={1}>
              <Typography
                variant="h1"
                fontWeight={"bold"}
                color="text.secondary"
                component="div"
              >
                2145
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                postes
              </Typography>
            </Grid>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
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
    </Grid>
  );
};

export default PostePage;

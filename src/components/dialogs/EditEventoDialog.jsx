import PropTypes from "prop-types";
import AddEventoDialog from "./AddEventoDialog";
import {
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";

const EditEventoDialog = ({ evento, setevento }) => {
  return (
    <div>
      <AddEventoDialog />
      <Divider />
      <Grid item xs={6} p={0}>
        <FormControlLabel
          control={<Switch />}
          sx={{
            margin: 0,
          }}
          label={"Solucionado"}
        />
      </Grid>
    </div>
  );
};
EditEventoDialog.propTypes = {
  evento: PropTypes.object.isRequired,
  setevento: PropTypes.func.isRequired,
};
export default EditEventoDialog;

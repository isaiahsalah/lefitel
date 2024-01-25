import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { columnsData, rowsData } from "../../data/example";
import { GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useMemo, useState } from "react";
import FullDialogComponent from "../../components/FullDialogComponent";
import AddUserDialog from "../../components/dialogs/AddUserDialog";
import SeguridadSec from "./seguridad/SeguridadSec.JSX";
import SeguridadDetalleSec from "./seguridad/SeguridadDetalleSec";
const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

const SeguridadPage = () => {
  const [user, setuser] = useState(null);

  return (
    <>
      {user === null ? (
        <SeguridadSec setuser={setuser} />
      ) : (
        <SeguridadDetalleSec setuser={setuser} poste={user} />
      )}
    </>
  );
};

export default SeguridadPage;

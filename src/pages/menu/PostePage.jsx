import { Add, AddBox, Delete, Edit, EmojiObjects } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { columnsData, rowsData } from "../../data/example";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import TabsComponent from "../../components/TabsComponent";
import { useDemoData } from "@mui/x-data-grid-generator";
import { useState } from "react";
import PosteGeneralComponent from "../../components/poste/PosteGeneralComponent";
import PosteDetalleComponent from "../../components/poste/PosteDetalleComponent";

const PostePage = () => {
  const [poste, setposte] = useState(null);

  return (
    <>
      {poste === null ? (
        <PosteGeneralComponent setposte={setposte} />
      ) : (
        <PosteDetalleComponent setposte={setposte} poste={poste} />
      )}
    </>
  );
};

export default PostePage;

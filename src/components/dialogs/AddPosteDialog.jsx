import { ArrowDropDown, WhereToVote } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControlLabel,
  Grid,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { customIcon } from "../../assets/PinMap";
import { useState } from "react";
import { ubicacionExample } from "../../data/example";

const AddPosteDialog = () => {
  const [image, setImage] = useState(
    "https://i.pinimg.com/736x/ca/64/b1/ca64b142e07ff2ffbfc41b0be1796d8b.jpg"
  );

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <Grid container width={1} m={0}>
      <Grid item xs={12} md={4}>
        <TextField
          fullWidth
          style={{
            padding: 0,
            margin: 0,
          }}
          type="number"
          label="Numero de poste"
        />
      </Grid>

      <Grid item xs={12} md={4}>
        <Autocomplete
          options={[
            { label: "123", year: 1994 },
            { label: "323", year: 1972 },
          ]}
          renderInput={(params) => (
            <TextField
              required
              style={{
                width: "100%",
              }}
              fullWidth
              {...params}
              label="Propietario"
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={4}>
        <Autocomplete
          style={{
            padding: 0,
            margin: 0,
          }}
          options={[
            { label: "123", year: 1994 },
            { label: "323", year: 1972 },
          ]}
          renderInput={(params) => (
            <TextField
              required
              style={{
                padding: 0,
                margin: 0,
                width: "100%",
              }}
              fullWidth
              {...params}
              label="Tipo de poste"
            />
          )}
        />
      </Grid>

      <Grid item xs={12} paddingInline={0} paddingBlock={1}>
        <Typography
          display={"flex"}
          color="text.secondary"
          textAlign={"left"}
          paddingInline={1}
          pt={1}
        >
          Tramo:
        </Typography>

        <Grid container p={0} m={0}>
          <Grid item xs={6}>
            <Autocomplete
              options={[
                { label: "123", year: 1994 },
                { label: "323", year: 1972 },
              ]}
              renderInput={(params) => (
                <TextField
                  required
                  style={{
                    width: "100%",
                  }}
                  fullWidth
                  {...params}
                  label="Inicio"
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              options={[
                { label: "123", year: 1994 },
                { label: "323", year: 1972 },
              ]}
              renderInput={(params) => (
                <TextField
                  required
                  style={{
                    width: "100%",
                  }}
                  fullWidth
                  {...params}
                  label="Fin"
                />
              )}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} paddingInline={0} paddingBlock={1}>
        <Typography
          display={"flex"}
          color="text.secondary"
          textAlign={"left"}
          paddingInline={1}
          pb={0}
        >
          Ferreteria de sujeción:
        </Typography>

        <Grid container m={0} p={0}>
          {["item 1", "Item 2", "Item 3", "Item 4"].map((item, i) => (
            <Grid key={i} item xs={6} p={0}>
              <FormControlLabel
                control={<Checkbox />}
                sx={{
                  margin: 0,
                }}
                label="Ferreteria de sujeción"
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        sx={{
          height: "100%",
        }}
        xs={12}
        md={6}
        paddingBlock={1}
        paddingInline={0}
      >
        <Grid container m={0} p={0}>
          <Grid item xs={12}>
            <Typography
              display={"flex"}
              color="text.secondary"
              textAlign={"left"}
              paddingInline={1}
            >
              Ubicación:
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              style={{
                width: "100%",
                padding: 0,
                margin: 0,
              }}
              type="number"
              label="Latitud"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              style={{
                width: "100%",
                padding: 0,
                margin: 0,
              }}
              type="number"
              label="Longitud"
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <MapContainer
            center={ubicacionExample}
            zoom={13}
            style={{ height: "220px" }}
            scrollWheelZoom={false}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
            <Marker position={ubicacionExample} icon={customIcon}>
              <Popup>
                <Grid container flexDirection={"column"} gap={1}>
                  {ubicacionExample}
                </Grid>
              </Popup>
            </Marker>
          </MapContainer>
        </Grid>
      </Grid>

      <Grid
        item
        sx={{
          height: "100%",
        }}
        xs={12}
        md={6}
        paddingBlock={1}
      >
        <Grid display={"flex"} justifyContent={"space-between"}>
          <Typography
            display={"flex"}
            color="text.secondary"
            paddingInline={1}
            textAlign={"left"}
          >
            Imagen:
          </Typography>
          <Input fullWidth onChange={onImageChange} type={"file"} />
        </Grid>

        <img
          width={"100%"}
          style={{
            aspectRatio: "1/1",
            objectFit: "cover",
            borderRadius: 4,
          }}
          src={image}
          alt={"imagen"}
          loading="lazy"
        />
      </Grid>
    </Grid>
  );
};

export default AddPosteDialog;

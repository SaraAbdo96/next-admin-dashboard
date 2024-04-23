import { Grid } from "@mui/material";
import React from "react";
import DataCard from "../DataCard";

const DataRibbon = () => {
  return (
    <Grid container>
      <h1>Data Ribbon</h1>
      <DataCard />
      <DataCard />
      <DataCard />
    </Grid>
  );
};

export default DataRibbon;

import React from "react";
import { Container, Typography, Table, TableBody, TableCell, TableHead, TableRow, Button } from "@mui/material";

const FieldsPage = () => {
  const fields = [
    { id: 1, name: "Maize Field", area: "2 ha", soilType: "Loam" },
    { id: 2, name: "Tomato Field", area: "1 ha", soilType: "Sandy" },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Fields
      </Typography>
      <Button variant="contained" color="primary" sx={{ mb: 2 }}>
        Add Field
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Area</TableCell>
            <TableCell>Soil Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fields.map((field) => (
            <TableRow key={field.id}>
              <TableCell>{field.id}</TableCell>
              <TableCell>{field.name}</TableCell>
              <TableCell>{field.area}</TableCell>
              <TableCell>{field.soilType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default FieldsPage;

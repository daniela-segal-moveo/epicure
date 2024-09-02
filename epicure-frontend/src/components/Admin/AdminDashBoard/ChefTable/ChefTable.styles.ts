import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/system";

export const StyledAddButton = styled(Button)({
  marginBottom: "16px",
  backgroundColor: "#132442",
  display: "flex",
  alignItems: "flex-end"
});

export const StyledProfileImgDiv = styled("div")({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledProfileImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const StyledDataGridContainer = styled(Box)({
  width: 'max-content', // Container width based on content
  overflowX: 'auto', // Handle horizontal overflow
});

export const StyledDataGrid = styled(DataGrid)({
    maxWidth: "850px",
  "& .MuiDataGrid-cell": {
    padding: "8px",
  },
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "#132442",
    color: "white",
    fontWeight: "bold",
  },
  "& .MuiDataGrid-footerContainer": {
    borderTop: "1px solid #e0e0e0",
  },
  "& .MuiDataGrid-viewport": {
    overflowX: "auto", // Ensure horizontal overflow handling
  },
  "& .MuiDataGrid-root": {
    overflowX: "hidden", // Prevent extra horizontal scrolling
  },
});

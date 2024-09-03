import { useEffect, useState } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import {
  StyledAddButton,
  StyledProfileImgDiv,
  StyledProfileImg,
  StyledDataGrid,
} from "../DataTable/DataTable.styles";
import {
  addRestaurant,
  deleteRestaurant,
  getAllRestaurants,
  updateRestaurant,
} from "../../../../store/thunks/RestaurantThunk";
import { RestaurantModal } from "./RestaurantModal/RestuarantModal";

// Define columns based on Chef model properties
const createColumns = (
  onDelete: (id: string) => void,
  onEdit: (id: string) => void
): GridColDef[] => [
  {
    field: "id",
    headerName: "ID",
    hide: true, // Hide this column from the DataGrid
  },
  {
    field: "edit",
    headerName: "",
    width: 60,
    renderCell: (params) => (
      <IconButton onClick={() => onEdit(params.row.id)}>
        <EditIcon />
      </IconButton>
    ),
  },
  {
    field: "imageUrl",
    headerName: "Image",
    width: 100,
    renderCell: (params) => (
      <StyledProfileImgDiv>
        <StyledProfileImg src={params.value} />
      </StyledProfileImgDiv>
    ),
  },
  { field: "name", headerName: "Name", width: 140 },
  {
    field: "chef",
    headerName: "Chef",
    width: 180,
    renderCell: (params) => params.value?.name || "No Chef", // Adjust this as needed
  },
  {
    field: "dishes",
    headerName: "Dishes",
    width: 200,
    renderCell: (params) => {
      const dishes = params.value as { name: string }[];
      return dishes ? dishes.map((dish) => dish.name).join(", ") : "";
    },
  },
  {
    field: "isPopular",
    headerName: "Is Popular",
    type: "boolean",
    cellClassName: "justify-center",
  },
  {
    field: "stars",
    headerName: "Stars",
    type: "number",
    cellClassName: "justify-center",
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 180,
    type: "dateTime",
    sortable: true,
    hide: true, // Hide this column from the DataGrid
  },
  {
    field: "delete",
    headerName: "",
    flex: 1,
    cellClassName: "justify-center",
    renderCell: (params) => (
      <IconButton onClick={() => onDelete(params.row.id)}>
        <DeleteIcon />
      </IconButton>
    ),
  },
];

export const RestaurantTable = () => {
  const handleDeleteRestaurant = async (id: string) => {
    try {
      await dispatch(deleteRestaurant(id));
    } catch (error) {
      console.error("Error deleting chef:", error);
    }
  };

  const handleEditChef = (id: string) => {
    const restaurantToEdit = restaurants.find(
      (restaurant) => restaurant._id === id
    );
    if (restaurantToEdit) {
      setSelectedRestaurant(restaurantToEdit);
      setModalMode("edit");
      setModalOpen(true);
    }
  };

  const dispatch: AppDispatch = useDispatch();
  const { restaurants, status } = useSelector(
    (state: RootState) => state.restaurants
  );
  const [columns, setColumns] = useState<GridColDef[]>(
    createColumns(handleDeleteRestaurant, handleEditChef)
  );
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllRestaurants());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (restaurants.length > 0) {
      setColumns(createColumns(handleDeleteRestaurant, handleEditChef));
    }
  }, [restaurants]);

  const handleAddChef = async (newChef: any) => {
    try {
      if (modalMode == "add") {
        await dispatch(addRestaurant(newChef));
      } else {
        await dispatch(updateRestaurant(newChef));
      }
      setModalOpen(false);
    } catch (error) {
      console.error("Error adding Restaurant:", error);
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "succeeded" && restaurants.length === 0) {
    return <div>No chefs available</div>;
  }

  const transformedRestaurants = restaurants?.map((restaurant) => {
      return {
        id: restaurant._id,
        ...restaurant,
      };
  });

  return (
    <div style={{ height: 600 }}>
      <StyledAddButton
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => {
          setModalMode("add");
          setModalOpen(true);
        }}
      >
        Add Restaurant
      </StyledAddButton>
      {transformedRestaurants && columns.length > 0 && (
        <StyledDataGrid
          rows={transformedRestaurants}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
          getRowId={(row) => row.id}
          initialState={{
            sorting: { sortModel: [{ field: "createdAt", sort: "desc" }] },
          }}
        />
      )}
      <RestaurantModal
        open={modalOpen}
        onSubmit={handleAddChef}
        onClose={() => setModalOpen(false)}
        mode={modalMode}
        RestaurantToEdit={modalMode === "edit" ? selectedRestaurant : undefined}
      />
    </div>
  );
};

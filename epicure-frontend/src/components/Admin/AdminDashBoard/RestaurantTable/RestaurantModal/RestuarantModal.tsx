import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import {
  StyledBox,
  StyledModal,
} from "../../DataTable/Modal/Modal.styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../store/store";
import { getAllChefs } from "../../../../../store/thunks/ChefThunk";

interface EditChefModelProps {
  open: boolean;
  onSubmit: (chefData: any) => void;
  onClose: () => void;
  RestaurantToEdit?: any; // Optional prop for editing mode
  mode: "add" | "edit"; // Prop to distinguish between add and edit modes
}

export const RestaurantModal = ({
  open,
  onSubmit,
  onClose,
  RestaurantToEdit,
  mode,
}: EditChefModelProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { chefs } = useSelector((state: RootState) => state.chefs);
  const [newRestaurant, setNewRestaurant] = useState({
    _id: "" || undefined,
    name: "",
    imageUrl: "",
    chef: "",
    dishes: [],
    isPopular: false,
    stars: 0,
  });
  const [chefError, setChefError] = useState("");

  useEffect(() => {
    dispatch(getAllChefs());
  }, []);

  useEffect(() => {
    if (mode === "edit" && RestaurantToEdit) {
      setNewRestaurant({
        _id: RestaurantToEdit._id,
        name: RestaurantToEdit.name,
        imageUrl: RestaurantToEdit.imageUrl,
        chef: RestaurantToEdit.chef.name,
        dishes: RestaurantToEdit.dishes,
        isPopular: RestaurantToEdit.isPopular ?? false,
        stars: RestaurantToEdit.stars,
      });
    } else {
      setNewRestaurant({
        _id: "" || undefined,
        name: "",
        imageUrl: "",
        chef: "",
        dishes: [],
        isPopular: false,
        stars: 0,
      });
    }
  }, [mode, RestaurantToEdit]);

  // Handle change for text fields and checkbox
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNewRestaurant((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const getChefIdByName = (chefName: string) => {
    const chef = chefs.find((chef) => {
      return chef.name === chefName;
    });
    return chef ? chef._id : "";
  };

  const handleSubmit = () => {
    const chefId = getChefIdByName(newRestaurant.chef);
    if (chefId) {
      const restaurantData = {
        ...newRestaurant,
        chef: chefId, // Convert name to ID
      };
      onSubmit(restaurantData);
    }
    setChefError("chef doesnt exist in our website");
  };

  return (
    <StyledModal
      open={open}
      onClose={() => {
        setChefError("");
        onClose();
      }}
    >
      <StyledBox>
        <p>{mode === "add" ? "Add New Restaurant" : "Edit Restaurant"}</p>
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newRestaurant.name}
          onChange={handleChange}
        />
        <TextField
          label="Image URL"
          name="imageUrl"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newRestaurant.imageUrl}
          onChange={handleChange}
        />
        <TextField
          label="Chef Name"
          name="chef"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newRestaurant.chef}
          onChange={handleChange}
          error={!!chefError} // Show error styling if there's an error
          helperText={chefError} // Display the error message
        />
        <FormControlLabel
          sx={{ alignSelf: "flex-start", marginTop: "15px" }}
          control={
            <Checkbox
              name="isPopular"
              checked={newRestaurant.isPopular}
              onChange={handleChange}
            />
          }
          label="Popular"
        />
        <TextField
          label="Stars"
          name="stars"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={newRestaurant.stars}
          onChange={handleChange}
          inputProps={{
            min: 0, // Optional: Set minimum value
            max: 5, // Set maximum value
          }}
        />
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {mode === "add" ? <AddIcon /> : "Update"}
          </Button>
        </Box>
      </StyledBox>
    </StyledModal>
  );
};

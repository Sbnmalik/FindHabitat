import { useNavigate } from "react-router-dom";
import { createHouse } from "../../api/houseApi";
import {useForm} from "react-hook-form";
import Button from "../../components/ui/Button";
import { notifyError, notifySuccess } from "../../utils/toast";
import "./HouseForm.css";

export default function CreateHouse() {
    const {    
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      bedrooms: 0,
      bathrooms: 0,
      parkingAvailable: "No",
      available: true,
    },
  });

    const onSubmit = async (data) => {
        try {
            console.log("House form data:", data);
            // Later await createHouse(data);
            notifySuccess("House created successfully!");
            reset();
        } catch (error) {
            console.error(error);
            notifyError("Failed to create house");
        }
    };


    return (
    );
}
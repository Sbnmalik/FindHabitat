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

    async function handleCreate(data) {
        try {
            await createHouse(data);
            navigate("/");
        } catch (error) {
            console.error(error);
            alert("Failed to create house");
        }
    }

    return (
        <div>
            <h1>Create House</h1>
            <HouseForm onSubmit={handleCreate} submitLabel="Create House" />
        </div>
    );
}
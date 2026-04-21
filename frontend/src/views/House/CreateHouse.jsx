import HouseForm from "../../components/layout/HouseForm";
import { useNavigate } from "react-router-dom";
import {createHouse} from "../src/api/houseApi";

export default function CreateHouse() {
    const navigate = useNavigate();

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
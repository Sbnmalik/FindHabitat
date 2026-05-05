import HouseForm from "../../components/layout/HouseForm";
import { notifyError, notifySuccess } from "../../utils/toast";
import { useNavigate } from "react-router-dom";
import {createHouse} from "../../api/houseApi";
import "../../styles/HouseForm.css";

export default function CreateHouse() {
    const navigate = useNavigate();


    const onSubmit = async (data) => {
    try {
         await createHouse(data);
         notifySuccess("House created successfully.");
         navigate("/");
    } catch {
        notifyError("Failed to create house.");
    }
    };

  return (
        <main className="house-page">
      <section className="house-card">
        <div className="house-header">
          <h1>Create House</h1>
          <p>Add a new property with accurate details.</p>
        </div>

        <HouseForm onSubmit={onSubmit} submitLabel="Create House" />
      </section>
    </main>
  );
}
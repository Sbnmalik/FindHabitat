import { useNavigate, useParams } from "react-router-dom";
import { getHouseById, updateHouse } from "../../api/houseApi";
import { useEffect,useState } from "react";
import { notifyError, notifySuccess } from "../../utils/toast";
import "../../styles/HouseForm.css";
import HouseForm from "../../components/layout/HouseForm";

export default function EditHouse() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [house, setHouse] = useState(null);

    useEffect(() => {
    async function loadHouse() {
      try {
        const data = await getHouseById(id);
        setHouse(data);
      } catch {
        notifyError("Failed to load house");
      }
    }

    loadHouse();
  }, [id]);

    const handleUpdate = async (payload) => {
    try {
      await updateHouse(id, payload);
      notifySuccess("House updated successfully.");
      navigate("/");
    } catch {
      notifyError("Failed to update house");
    }
  }

  if (!house) {
    return <p>Loading house...</p>;
  }

    return (
    <main className="house-page">
      <section className="house-card">
        <div className="house-header">
          <h1>Edit House</h1>
          <p>Update the selected property details.</p>
        </div>

        <HouseForm
          initialData={house}
          onSubmit={handleUpdate}
          submitLabel="Update House"
        />
      </section>
    </main>
  );
}
import { useNavigate, useParams } from "react-router-dom";
import { getHouseById, updateHouse } from "../../api/houseApi";
import { useEffect,useState } from "react";
import { notifyError, notifySuccess } from "../../utils/toast";

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

    const onSubmit = async (data) => {
    try {
      await updateHouse(id, data);
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
      <HouseForm
        title="Edit House"
        defaultValues={house}
        onSubmit={onSubmit}
        submitLabel="Update House"
      />
    );
}
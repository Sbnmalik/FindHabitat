import HouseForm from "../../components/HouseForm";
import { useNavigate, useParams } from "react-router-dom";
import { getHouseById, updateHouse } from "../api/houseApi";
import { useEffect,useState } from "react";

export default function EditHouse() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [house, setHouse] = useState(null);

      useEffect(() => {
    async function loadHouse() {
      try {
        const data = await getHouseById(id);
        setHouse(data);
      } catch (error) {
        console.error(error);
        alert("Failed to load house");
      }
    }

    loadHouse();
  }, [id]);

    async function handleUpdate(data) {
    try {
      await updateHouse(id, data);
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to update house");
    }
  }

  if (!house) return <p>Loading house...</p>;
    return (
        
    );
}
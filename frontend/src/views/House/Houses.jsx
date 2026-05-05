import { useEffect, useState } from "react";
import { getAllHouses, deleteHouse } from "../../api/houseApi";
import { useNavigate } from "react-router-dom";
import { notifySuccess, notifyError } from "../../utils/toast";
import Button from "../../components/ui/Button";

export default function ListHouses() {
    const [houses, setHouses] = useState([]);
    const navigate = useNavigate();

    async function fetchHouses() {
        try {
            const data = await getAllHouses();
            setHouses(data);
        } catch {
            notifyError("Failed to fetch houses");
        }   
    }
useEffect(() => {
  async function loadHouses() {
    try {
      const data = await getAllHouses();
      setHouses(data);
    } catch {
      notifyError("Failed to fetch houses");
    }
  }

  loadHouses();
}, []);

    async function handleDelete(id) {
        try {
            await deleteHouse(id);
            setHouses((prev) => prev.filter((house) => house.houseId !== id));
            notifySuccess("House deleted successfully.");
            fetchHouses();
        } catch {
            notifyError("Failed to delete house");
        }
    }

return (
        <main className="house-list-page">
      <div className="list-header">
        <h1>Houses</h1>
        <Button onClick={() => navigate("/houses/create")}>
          + Create House
        </Button>
      </div>

      <div className="house-grid">
        {houses.length === 0 ? (
          <p>No houses found.</p>
        ) : (
          houses.map((house) => (
            <article key={house.houseId} className="house-card-item">
              <h3>{house.addressLine}</h3>
              <p>{house.city}</p>
              <p>€{house.monthlyPrice}</p>

              <div className="card-actions">
                <Button
                  variant="secondary"
                  onClick={() =>
                    navigate(`/houses/${house.houseId}/edit`)
                  }
                >
                  Edit
                </Button>

                <Button
                  onClick={() => handleDelete(house.houseId)}
                >
                  Delete
                </Button>
              </div>
            </article>
          ))
        )}
      </div>
    </main>
  );
}

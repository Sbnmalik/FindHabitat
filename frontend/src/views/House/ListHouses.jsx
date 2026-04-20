import { useEffect,useState } from "react";
import { deleteHouse, getAllHouses } from "../api/houseApi";
import { Link } from "react-router-dom";

export default function ListHouses() {
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchHouses() {
        try {
            const data = await getAllHouses();
            setHouses(data);
        } catch (error) {
            console.error(error);
            alert("Failed to fetch houses");
        } finally {
            setLoading(false);
        }   
    }

     async function handleDelete(id) {
     const confirmed = window.confirm("Are you sure you want to delete this house?");
        if (!confirmed) return;

        try {
        await deleteHouse(id);
            setHouses((prev) => prev.filter((house) => house.houseId !== id));
        } catch (error) {
            console.error(error);
            alert("Failed to delete house");
        }
    }

      useEffect(() => {
      loadHouses();}, []);

     if (loading) return <p>Loading houses...</p>;

    return (
            <div>
      <h1>Houses</h1>
      <Link to="/houses/create">Create New House</Link>

      {houses.length === 0 ? (
        <p>No houses found.</p>
      ) : (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Address</th>
              <th>City</th>
              <th>Type</th>
              <th>Price</th>
              <th>Bedrooms</th>
              <th>Available</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {houses.map((house) => (
              <tr key={house.houseId}>
                <td>{house.houseId}</td>
                <td>{house.addressLine}</td>
                <td>{house.city}</td>
                <td>{house.propertyType}</td>
                <td>{house.monthlyPrice}</td>
                <td>{house.bedrooms}</td>
                <td>{house.isAvailable ? "Yes" : "No"}</td>
                <td>
                  <Link to={`/houses/${house.houseId}`}>View</Link>{" "}
                  <Link to={`/houses/edit/${house.houseId}`}>Edit</Link>{" "}
                  <button onClick={() => handleDelete(house.houseId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    ),
}

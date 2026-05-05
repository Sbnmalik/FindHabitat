import { useEffect,useState } from "react";
import { getAllHouses, deleteHouse } from "../../api/houseApi";
import { Link } from "react-router-dom";
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
    );
}

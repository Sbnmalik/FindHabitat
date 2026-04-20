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
}
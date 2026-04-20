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
}
import HouseForm from "../../components/HouseForm";
import { useNavigate, useParams } from "react-router-dom";
import { getHouseById, updateHouse } from "../api/houseApi";
import { useEffect,useState } from "react";

export default function EditHouse() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [house, setHouse] = useState(null);
}
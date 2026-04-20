import {useState, useEffect} from 'react';

export default function HouseForm({initialData, onSubmit, submitLabel}){
    const [formData, setFormData] = useState({
    addressLine: "",
    city: "",
    postalCode: "",
    propertyType: "",
    ownershipStatus: "",
    floorLevel: "",
    parkingAvailability: false,
    description: "",
    bedrooms: 0,
    bathrooms: 0,
    moveInDate: "",
    monthlyPrice: "",
    livingAreaSqm: "",
    isAvailable: true,
    });
}
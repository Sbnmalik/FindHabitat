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

      useEffect(() => {
    if (initialData) {
      setFormData({
        addressLine: initialData.addressLine || "",
        city: initialData.city || "",
        postalCode: initialData.postalCode || "",
        propertyType: initialData.propertyType || "",
        ownershipStatus: initialData.ownershipStatus || "",
        floorLevel: initialData.floorLevel ?? "",
        parkingAvailability: initialData.parkingAvailability ?? false,
        description: initialData.description || "",
        bedrooms: initialData.bedrooms ?? 0,
        bathrooms: initialData.bathrooms ?? 0,
        moveInDate: initialData.moveInDate || "",
        monthlyPrice: initialData.monthlyPrice ?? "",
        livingAreaSqm: initialData.livingAreaSqm ?? "",
        isAvailable: initialData.isAvailable ?? true,
      });
    }
  }, [initialData])

    function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
}
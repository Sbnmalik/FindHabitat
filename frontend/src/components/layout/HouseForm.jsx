import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../ui/Button";
import "../../styles/HouseForm.css";

function buildFormData(initialData) {
  return {
    addressLine: initialData?.addressLine || "",
    city: initialData?.city || "",
    postalCode: initialData?.postalCode || "",
    propertyType: initialData?.propertyType || "",
    ownershipStatus: initialData?.ownershipStatus || "",
    floorLevel: initialData?.floorLevel ?? "",
    parkingAvailability: initialData?.parkingAvailability ?? false,
    description: initialData?.description || "",
    bedrooms: initialData?.bedrooms ?? 0,
    bathrooms: initialData?.bathrooms ?? 0,
    moveInDate: initialData?.moveInDate || "",
    monthlyPrice: initialData?.monthlyPrice ?? "",
    livingAreaSqm: initialData?.livingAreaSqm ?? "",
    isAvailable: initialData?.isAvailable ?? true,
  };
}

export default function HouseForm({ initialData, onSubmit, submitLabel }) {
  const [formData, setFormData] = useState(() => buildFormData(initialData));

  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      ...formData,
      floorLevel: formData.floorLevel === "" ? null : Number(formData.floorLevel),
      bedrooms: Number(formData.bedrooms),
      bathrooms: Number(formData.bathrooms),
      monthlyPrice: Number(formData.monthlyPrice),
      livingAreaSqm:
        formData.livingAreaSqm === "" ? null : Number(formData.livingAreaSqm),
    };

    onSubmit(payload);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="addressLine"
          value={formData.addressLine}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Postal Code</label>
        <input
          type="text"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Property Type</label>
        <select
          name="propertyType"
          value={formData.propertyType}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Apartment">Apartment</option>
          <option value="Studio">Studio</option>
          <option value="Room">Room</option>
          <option value="House">House</option>
          <option value="Shared House">Shared House</option>
        </select>
      </div>

      <div>
        <label>Ownership Status</label>
        <select
          name="ownershipStatus"
          value={formData.ownershipStatus}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Rent">Rent</option>
          <option value="Sale">Sale</option>
          <option value="Sublet">Sublet</option>
        </select>
      </div>

      <div>
        <label>Floor Level</label>
        <input
          type="number"
          name="floorLevel"
          value={formData.floorLevel}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Parking Available</label>
        <select
          name="parkingAvailability"
          value={String(formData.parkingAvailability)}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              parkingAvailability: e.target.value === "true",
            }))
          }
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>

      <div>
        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Bedrooms</label>
        <input
          type="number"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Bathrooms</label>
        <input
          type="number"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Move-in Date</label>
        <input
          type="date"
          name="moveInDate"
          value={formData.moveInDate}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Monthly Price</label>
        <input
          type="number"
          step="0.01"
          name="monthlyPrice"
          value={formData.monthlyPrice}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label>Living Area (sqm)</label>
        <input
          type="number"
          step="0.01"
          name="livingAreaSqm"
          value={formData.livingAreaSqm}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Available</label>
        <input
          type="checkbox"
          name="isAvailable"
          checked={formData.isAvailable}
          onChange={handleChange}
        />
      </div>

      <button type="submit">{submitLabel}</button>
    </form>
  );
}
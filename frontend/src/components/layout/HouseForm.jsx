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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: buildFormData(initialData),
  });

  useEffect(() => {
    reset(buildFormData(initialData));
  }, [initialData, reset]);

  function submitForm(data) {
    const payload = {
      ...data,
      floorLevel: data.floorLevel === "" ? null : Number(data.floorLevel),
      bedrooms: Number(data.bedrooms),
      bathrooms: Number(data.bathrooms),
      monthlyPrice: Number(data.monthlyPrice),
      livingAreaSqm:
        data.livingAreaSqm === "" ? null : Number(data.livingAreaSqm),
      parkingAvailability: data.parkingAvailability === "true",
      isAvailable: Boolean(data.isAvailable),
    };

    onSubmit(payload);
  }

  return (
        <form onSubmit={handleSubmit(submitForm)} className="house-form">
      <div className="form-grid">
        <div className="form-field form-field--full">
          <label>Address *</label>
          <input
            type="text"
            {...register("addressLine", {
              required: "Address is required",
              maxLength: {
                value: 200,
                message: "Address cannot exceed 200 characters",
              },
            })}
          />
          {errors.addressLine && <span>{errors.addressLine.message}</span>}
        </div>

        <div className="form-field">
          <label>City *</label>
          <input
            type="text"
            {...register("city", {
              required: "City is required",
              maxLength: {
                value: 100,
                message: "City cannot exceed 100 characters",
              },
            })}
          />
          {errors.city && <span>{errors.city.message}</span>}
        </div>

        <div className="form-field">
          <label>Postal Code</label>
          <input
            type="text"
            {...register("postalCode", {
              maxLength: {
                value: 20,
                message: "Postal code cannot exceed 20 characters",
              },
            })}
          />
          {errors.postalCode && <span>{errors.postalCode.message}</span>}
        </div>

        <div className="form-field">
          <label>Property Type *</label>
          <select
            {...register("propertyType", {
              required: "Property type is required",
            })}
          >
            <option value="">Select</option>
            <option value="Apartment">Apartment</option>
            <option value="Studio">Studio</option>
            <option value="Room">Room</option>
            <option value="House">House</option>
            <option value="Shared House">Shared House</option>
          </select>
          {errors.propertyType && <span>{errors.propertyType.message}</span>}
        </div>

        <div className="form-field">
          <label>Ownership Status *</label>
          <select
            {...register("ownershipStatus", {
              required: "Ownership status is required",
            })}
          >
            <option value="">Select</option>
            <option value="Rent">Rent</option>
            <option value="Sale">Sale</option>
            <option value="Sublet">Sublet</option>
          </select>
          {errors.ownershipStatus && (
            <span>{errors.ownershipStatus.message}</span>
          )}
        </div>

        <div className="form-field">
          <label>Floor Level</label>
          <input
            type="number"
            {...register("floorLevel", {
              min: {
                value: 0,
                message: "Floor level cannot be negative",
              },
            })}
          />
          {errors.floorLevel && <span>{errors.floorLevel.message}</span>}
        </div>

        <div className="form-field">
          <label>Parking Available</label>
          <select {...register("parkingAvailability")}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="form-field">
          <label>Bedrooms *</label>
          <input
            type="number"
            {...register("bedrooms", {
              required: "Bedrooms are required",
              min: {
                value: 0,
                message: "Bedrooms cannot be negative",
              },
            })}
          />
          {errors.bedrooms && <span>{errors.bedrooms.message}</span>}
        </div>

        <div className="form-field">
          <label>Bathrooms *</label>
          <input
            type="number"
            {...register("bathrooms", {
              required: "Bathrooms are required",
              min: {
                value: 0,
                message: "Bathrooms cannot be negative",
              },
            })}
          />
          {errors.bathrooms && <span>{errors.bathrooms.message}</span>}
        </div>

        <div className="form-field">
          <label>Move-in Date</label>
          <input type="date" {...register("moveInDate")} />
        </div>

        <div className="form-field">
          <label>Monthly Price *</label>
          <input
            type="number"
            step="0.01"
            {...register("monthlyPrice", {
              required: "Monthly price is required",
              min: {
                value: 0,
                message: "Monthly price cannot be negative",
              },
            })}
          />
          {errors.monthlyPrice && <span>{errors.monthlyPrice.message}</span>}
        </div>

        <div className="form-field">
          <label>Living Area (sqm)</label>
          <input
            type="number"
            step="0.01"
            {...register("livingAreaSqm", {
              min: {
                value: 0.01,
                message: "Living area must be greater than 0",
              },
            })}
          />
          {errors.livingAreaSqm && <span>{errors.livingAreaSqm.message}</span>}
        </div>

        <div className="form-field form-field--full">
          <label>Description</label>
          <textarea
            rows="4"
            {...register("description", {
              maxLength: {
                value: 2000,
                message: "Description cannot exceed 2000 characters",
              },
            })}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </div>

        <label className="checkbox-field">
          <input type="checkbox" {...register("isAvailable")} />
          Available
        </label>
      </div>

      <div className="form-actions">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : submitLabel}
        </Button>
      </div>
    </form>
  );
}
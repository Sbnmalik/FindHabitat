import {useForm} from "react-hook-form";
import Button from "../../components/ui/Button";
import { notifyError, notifySuccess } from "../../utils/toast";
import "../../styles/HouseForm.css";

export default function CreateHouse() {
    const {    
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      bedrooms: 0,
      bathrooms: 0,
      parkingAvailable: "No",
      available: true,
    },
  });

    const onSubmit = async (data) => {
        try {
            console.log("House form data:", data);
            // Later await createHouse(data);
            notifySuccess("House created successfully!");
            reset();
        } catch (error) {
            console.error(error);
            notifyError("Failed to create house");
        }
    };
    const onInvalid = () => {
    notifyError("Please fix the validation errors.");
    };


    return (
        <main className="house-page">
      <section className="house-card">
        <div className="house-header">
          <h1>Create House</h1>
          <p>Add a new property with accurate details.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit, onInvalid)} className="house-form">
          <div className="form-grid">
            <div className="form-field form-field--full">
              <label>Address *</label>
              <input
                placeholder="Street name and number"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && <span>{errors.address.message}</span>}
            </div>

            <div className="form-field">
              <label>City *</label>
              <input
                placeholder="Eindhoven"
                {...register("city", { required: "City is required" })}
              />
              {errors.city && <span>{errors.city.message}</span>}
            </div>

            <div className="form-field">
              <label>Postal Code *</label>
              <input
                placeholder="5611 AA"
                {...register("postalCode", {
                  required: "Postal code is required",
                })}
              />
              {errors.postalCode && <span>{errors.postalCode.message}</span>}
            </div>

            <div className="form-field">
              <label>Property Type *</label>
              <select {...register("propertyType", { required: "Property type is required" })}>
                <option value="">Select</option>
                <option value="APARTMENT">Apartment</option>
                <option value="HOUSE">House</option>
                <option value="STUDIO">Studio</option>
                <option value="ROOM">Room</option>
              </select>
              {errors.propertyType && <span>{errors.propertyType.message}</span>}
            </div>

            <div className="form-field">
              <label>Ownership Status *</label>
              <select {...register("ownershipStatus", { required: "Ownership status is required" })}>
                <option value="">Select</option>
                <option value="OWNER">Owner</option>
                <option value="LANDLORD">Landlord</option>
                <option value="AGENT">Agent</option>
              </select>
              {errors.ownershipStatus && <span>{errors.ownershipStatus.message}</span>}
            </div>

            <div className="form-field">
              <label>Bedrooms *</label>
              <input
                type="number"
                {...register("bedrooms", {
                  required: "Bedrooms are required",
                  min: { value: 0, message: "Bedrooms cannot be negative" },
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
                  min: { value: 0, message: "Bathrooms cannot be negative" },
                })}
              />
              {errors.bathrooms && <span>{errors.bathrooms.message}</span>}
            </div>

            <div className="form-field">
              <label>Monthly Price *</label>
              <input
                type="number"
                placeholder="1200"
                {...register("monthlyPrice", {
                  required: "Monthly price is required",
                  min: { value: 1, message: "Price must be greater than 0" },
                })}
              />
              {errors.monthlyPrice && <span>{errors.monthlyPrice.message}</span>}
            </div>

            <div className="form-field">
              <label>Living Area (sqm) *</label>
              <input
                type="number"
                placeholder="85"
                {...register("livingArea", {
                  required: "Living area is required",
                  min: { value: 1, message: "Living area must be greater than 0" },
                })}
              />
              {errors.livingArea && <span>{errors.livingArea.message}</span>}
            </div>

            <div className="form-field">
              <label>Floor Level</label>
              <input placeholder="2" {...register("floorLevel")} />
            </div>

            <div className="form-field">
              <label>Parking Available</label>
              <select {...register("parkingAvailable")}>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className="form-field">
              <label>Move-in Date *</label>
              <input
                type="date"
                {...register("moveInDate", {
                  required: "Move-in date is required",
                })}
              />
              {errors.moveInDate && <span>{errors.moveInDate.message}</span>}
            </div>

            <div className="form-field form-field--full">
              <label>Description</label>
              <textarea
                placeholder="Describe the house..."
                rows="4"
                {...register("description", {
                  maxLength: {
                    value: 500,
                    message: "Description cannot exceed 500 characters",
                  },
                })}
              />
              {errors.description && <span>{errors.description.message}</span>}
            </div>

            <label className="checkbox-field">
              <input type="checkbox" {...register("available")} />
              Available
            </label>
          </div>

          <div className="form-actions">
            <Button variant="secondary" onClick={() => reset()}>
              Reset
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create House"}
            </Button>
          </div>
        </form>
      </section>
    </main>
  );
}
import { Label, TextInput } from "flowbite-react";
import React from "react";
import { useFormContext } from "react-hook-form";

const UserAddressDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <h3 className="text-xl font-semibold mt-8 mb-4">Address</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Street */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="street">Street</Label>
          </div>{" "}
          <TextInput
            placeholder="Street"
            id="street"
            {...register("street", { required: true })}
            color={errors.street ? "failure" : "gray"}
          />
          {errors.street && (
            <span className="text-red-500 text-xs mt-1 px-2">
              {errors.street?.message || "Street is required"}
            </span>
          )}
        </div>

        {/* Postal code */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="postel-code">Postal Code</Label>
          </div>{" "}
          <TextInput
            placeholder="Postal Code"
            id="postal-code"
            {...register("postalCode", { required: true })}
            type="text"
            color={errors.postalCode ? "failure" : "gray"}
          />
          {errors.postalCode && (
            <span className="text-red-500 text-xs mt-1 px-2">
              {errors.postalCode?.message || "Postal-code is required"}
            </span>
          )}
        </div>

        {/* City */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="city">City</Label>
          </div>{" "}
          <TextInput
            placeholder="City"
            id="city"
            {...register("city", { required: true })}
            color={errors.city ? "failure" : "gray"}
          />
          {errors.city && (
            <span className="text-red-500 text-xs mt-1 px-2">
              {errors.city?.message || "City is required"}
            </span>
          )}
        </div>

        {/* Country */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="country">Country</Label>
          </div>{" "}
          <TextInput
            id="country"
            placeholder="Country"
            {...register("country", { required: true })}
            color={errors.country ? "failure" : "gray"}
          />
          {errors.country && (
            <span className="text-red-500 text-xs mt-1 px-2">
              {errors.country?.message || "Country is required"}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default UserAddressDetails;

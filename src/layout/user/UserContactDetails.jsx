import { Label, TextInput } from "flowbite-react";
import React from "react";
import { useFormContext } from "react-hook-form";

const UserContactDetails = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Email */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email">Email</Label>
        </div>{" "}
        <TextInput
          placeholder="Email"
          id="email"
          {...register("email", { required: true })}
          type="email"
          color={errors.email ? "failure" : "gray"}
        />
        {errors.email && (
          <span className="text-red-500 text-xs mt-1 px-2">
            {errors.email?.message || "Email is required"}
          </span>
        )}
      </div>

      {/* Phone */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone">Phone</Label>
        </div>{" "}
        <TextInput
          placeholder="Phone"
          id="phone"
          {...register("phone", { required: true, valueAsNumber: true })}
          type="number"
          color={errors.phone ? "failure" : "gray"}
        />
        {errors.phone && (
          <span className="text-red-500 text-xs mt-1 px-2">
            {errors.phone?.message || "Phone is required"}
          </span>
        )}
      </div>
    </div>
  );
};

export default UserContactDetails;

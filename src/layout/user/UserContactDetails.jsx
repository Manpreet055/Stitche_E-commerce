import { Label, TextInput } from "flowbite-react";
import React from "react";
import { useFormContext } from "react-hook-form";

const UserContactDetails = () => {
  const { register } = useFormContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email">Email</Label>
        </div>{" "}
        <TextInput
          placeholder="Email"
          id="email"
          {...register("email", { required: true })}
          type="email"
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="phone">Phone</Label>
        </div>{" "}
        <TextInput
          placeholder="Phone"
          id="phone"
          {...register("phone", { valueAsNumber: true })}
          type="number"
        />
      </div>
    </div>
  );
};

export default UserContactDetails;

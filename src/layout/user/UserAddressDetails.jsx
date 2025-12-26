import { Label, TextInput } from "flowbite-react";
import React from "react";
import { useFormContext } from "react-hook-form";

const UserAddressDetails = () => {
  const { register } = useFormContext();
  return (
    <>
      <h3 className="text-xl font-semibold mt-8 mb-4">Address</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="street">Street</Label>
          </div>{" "}
          <TextInput placeholder="Street" id="street" {...register("street")} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="postel-code">Postal Code</Label>
          </div>{" "}
          <TextInput
            placeholder="Postal Code"
            id="postal-code"
            {...register("postalCode")}
            type="text"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="city">City</Label>
          </div>{" "}
          <TextInput placeholder="City" id="city" {...register("city")} />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="country">Country</Label>
          </div>{" "}
          <TextInput
            id="country"
            placeholder="Country"
            {...register("country")}
          />
        </div>
      </div>
    </>
  );
};

export default UserAddressDetails;

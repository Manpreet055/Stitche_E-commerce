import { FileInput, Label, TextInput } from "flowbite-react";
import { User2 } from "lucide-react";
import React from "react";
import { useFormContext } from "react-hook-form";

const UserProfilePreview = ({ preview }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col md:flex-row w-full gap-10 items-center">
      {/* Avatar Preview */}
      <div className="rounded-full overflow-hidden border-2 border-gray-300 w-40  flex items-center justify-center theme-transparent">
        {preview ? (
          <img
            src={preview}
            loading="lazy"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          <User2 className="h-20 w-20 text-gray-400" strokeWidth={1} />
        )}
      </div>

      <div className="flex flex-col gap-y-5 w-full">
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          {/* Username */}
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="username">Username</Label>
            </div>{" "}
            <TextInput
              placeholder="Username"
              {...register("username", {
                required: true,
              })}
              id="username"
              color={errors.username ? "failure" : "gray"}
            />
            {errors.username && (
              <span className="text-red-500 text-xs mt-1 px-2">
                {errors.username?.message || "Username is required"}
              </span>
            )}
          </div>

          {/* Full name */}
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="fullname">Full Name</Label>
            </div>{" "}
            <TextInput
              placeholder="Full Name"
              id="fullname"
              {...register("fullName", { required: true })}
              color={errors.fullName ? "failure" : "gray"}
            />
            {errors.fullName && (
              <span className="text-red-500 text-xs mt-1 px-2">
                {errors.fullName?.message || "Fullname is required"}
              </span>
            )}
          </div>
        </div>

        {/* Avatar input */}
        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="avatar">Upload Profile Pic </Label>
          </div>{" "}
          <FileInput {...register("avatar")} id="avatar" />
        </div>
      </div>
    </div>
  );
};

export default UserProfilePreview;

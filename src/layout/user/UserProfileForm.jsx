import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TextInput, FileInput, Label, Button } from "flowbite-react";
import { User2 } from "lucide-react";
import { useUser } from "../../context/UserDataProvider";
import { useNavigate } from "react-router-dom";
import BackButton from "../../ui/BackButton";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";

const UserProfileForm = () => {
  const api = useAxiosPrivate();
  const { user } = useUser();
  console.log(user);
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors, dirtyFields },
    reset,
    watch,
    getValues,
  } = useForm();

  // Watch the avatar field to create a live preview
  const avatarFile = watch("avatar");

  useEffect(() => {
    if (user) {
      reset({
        username: user?.username,
        email: user?.email,
        fullName: user?.profile?.fullName,
        phone: user?.profile?.phone,
        street: user?.profile?.address?.street || "",
        city: user?.profile?.address?.city || "",
        country: user?.profile?.address?.country || "",
        postalCode: user?.profile?.address?.postalCode || "",
      });
      // Set initial preview if user already has an avatar URL
      if (user?.profile?.avatar) setPreview(user.avatar);
    }
  }, [user, reset]);

  // Handle local image preview when a file is selected
  useEffect(() => {
    if (avatarFile && avatarFile.length > 0) {
      const file = avatarFile[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [avatarFile]);

  const updateUserProfile = async (data) => {
    // Filtering only those values which are actually changed
    const currentValues = getValues();
    data = Object.keys(dirtyFields).reduce((acc, key) => {
      acc[key] = currentValues[key];
      return acc;
    }, {});

    // Creating JS FormData for multer to find the image file
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (key !== "avatar") {
        formData.append(key, data[key]);
      }
    });

    if (data.avatar) {
      formData.append("avatar", data?.avatar[0]);
    }

    // API Call
    try {
      const updateProfile = await api.patch("/users/update-profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(updateProfile.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="mt-20 w-full text-theme sm:p-4 max-w-5xl">
        <BackButton text="Back" />
        <h2 className="poppins my-5 text-2xl font-semibold sm:text-3xl text-start">
          Edit Profile
        </h2>

        <form onSubmit={handleSubmit(updateUserProfile)} className="w-full p-4">
          <div className="flex flex-col md:flex-row w-full gap-10 items-center">
            {/* Avatar Preview */}
            <div className="rounded-full overflow-hidden border-2 border-gray-300 w-40 h-33  flex items-center justify-center theme-transparent">
              {preview ? (
                <img
                  src={preview}
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User2 className="h-20 w-20 text-gray-400" strokeWidth={1} />
              )}
            </div>

            <div className="flex flex-col gap-y-5 w-full">
              <div className="flex flex-col sm:flex-row gap-6 w-full">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="username">Username</Label>
                  </div>{" "}
                  <TextInput
                    placeholder="Username"
                    {...register("username", {
                      required: "Username is required",
                    })}
                    id="username"
                    color={errors.username ? "failure" : "gray"}
                  />
                </div>
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label htmlFor="fullname">Full Name</Label>
                  </div>{" "}
                  <TextInput
                    placeholder="Full Name"
                    id="fullname"
                    {...register("fullName", { required: true })}
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="mb-2 block">
                  <Label htmlFor="avatar">Upload Profile Pic </Label>
                </div>{" "}
                <FileInput {...register("avatar")} id="avatar" />
              </div>
            </div>
          </div>

          <hr className="border-theme my-8 opacity-70" />

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email">email</Label>
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

          <h3 className="text-xl font-semibold mt-8 mb-4">Address</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="street">Street</Label>
              </div>{" "}
              <TextInput
                placeholder="Street"
                id="street"
                {...register("street")}
              />
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

          <div className="flex gap-4 mt-10">
            <button className="w-full p-4 rounded" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button
              type="submit"
              isProcessing={isSubmitting}
              className="w-full theme-alt text-theme-alt p-4 rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileForm;

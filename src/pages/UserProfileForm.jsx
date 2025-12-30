import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useUser } from "../context/UserDataProvider";
import { useNavigate } from "react-router-dom";
import BackButton from "../ui/BackButton";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import ToastComp from "../ui/ToastComp";
import UserProfilePreview from "../layout/user/UserProfilePreview";
import UserContactDetails from "../layout/user/UserContactDetails";
import UserAddressDetails from "../layout/user/UserAddressDetails";
const UserProfileForm = () => {
  const api = useAxiosPrivate();
  const { user, setUser } = useUser();
  const navigate = useNavigate();
  if (!user) {
    return navigate("/login");
  }
  const methods = useForm();
  const [preview, setPreview] = useState(null);
  const [toastText, setToastText] = useState();

  // Clear toast after 3 seconds automatically
  useEffect(() => {
    if (toastText) {
      const timer = setTimeout(() => setToastText(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastText]);

  // Watch the avatar field to create a live preview
  const avatarFile = methods.watch("avatar");

  useEffect(() => {
    if (user) {
      methods.reset({
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
      if (user?.profile?.avatar) setPreview(user?.profile?.avatar);
    }
  }, [user, methods.reset]);

  // Handle local image preview when a file is selected
  useEffect(() => {
    if (avatarFile && avatarFile.length > 0) {
      const file = avatarFile[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [avatarFile]);

  const updateUserProfile = async (data) => {
    // Filtering only those values which are actually changed
    const currentValues = methods.getValues();
    data = Object.keys(methods.formState.dirtyFields).reduce((acc, key) => {
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

    // // API Call
    // try {
    //   const updateProfile = await api.patch("/users/update-profile", formData);
    //   setToastText(updateProfile.data?.msg);
    //   setUser(updateProfile.data?.user);
    //   setTimeout(async () => {
    //     navigate(-1);
    //   }, 1500);
    // } catch (error) {
    //   const serverMessage = error.response?.data?.message;
    //   if (error.response?.status === 409) {
    //     setToastText("Email or username already exists");
    //   } else if (error.response?.status === 500) {
    //     setToastText("Server error. Please try again later.");
    //   } else {
    //     setToastText(serverMessage || "An unexpected error occurred");
    //   }
    // }
  };

  return (
    <div className="w-full flex justify-center">
      <div className=" mt-20 w-full text-theme sm:p-4 max-w-5xl">
        <BackButton text="Back" />
        <h2 className="poppins my-5 text-2xl font-semibold sm:text-3xl text-start">
          Edit Profile
        </h2>

        <div className="w-full flex justify-center">
          {toastText && <ToastComp text={toastText} position="top-15" />}
        </div>

        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(updateUserProfile)}
            className="w-full p-4"
          >
            <UserProfilePreview preview={preview} />
            <hr className="border-theme my-8 opacity-70" />
            <UserContactDetails />
            <UserAddressDetails />

            <div className="flex flex-wrap gap-4 mt-10">
              <button
                type="button"
                className="w-full hover:bg-gray-500 dark:hover:bg-gray-300 dark:hover:text-black ease-in-out transition-colors  p-4 rounded"
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
              <button
                disabled={methods.formState.isSubmitting}
                type="submit"
                className={`w-full  ${methods.formState.isSubmitting ? "dark:bg-gray-400 bg-gray-200" : "theme-alt"}  text-theme-alt p-4 rounded`}
              >
                {methods.formState.isSubmitting
                  ? "Saving changes..."
                  : "Save Changes"}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default UserProfileForm;

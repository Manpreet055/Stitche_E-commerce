const updateUserProfile = async (data) => {
  // converting RHF data into JS FormData
  const formData = new FormData();
  if (data.profile.avatar && data.profile.avatar[0]) {
    formData.append("avatar", data?.avatar[0]);
  }
};

export default updateUserProfile;

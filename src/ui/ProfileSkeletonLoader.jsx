import React from "react";

const ProfileSkeletonLoader = () => {
  return (
    <div>
      {/* Profile Section Skeleton */}
      <div className="w-full flex items-center gap-5 px-4 animate-pulse">
        {/* Circle for Avatar */}
        <div className="w-11 h-11 bg-gray-300 dark:bg-gray-700 rounded-full"></div>

        {/* Rectangle for Username */}
        <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded-md w-37"></div>
      </div>
    </div>
  );
};

export default ProfileSkeletonLoader;

import { Outlet } from "react-router-dom";

export const AuthBase = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex w-full md:w-[50%] h-full justify-center items-center">
        <Outlet />
      </div>
      <div className="w-[50%] hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt=""
          className="object-cover h-full"
        />
      </div>
    </div>
  );
};

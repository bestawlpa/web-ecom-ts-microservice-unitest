import { useNavigate } from "react-router-dom";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import { Link, Outlet, useLocation } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path:string) => {
    if (location.pathname === "/profile" && path === "account") {
      return true;
    }
    return location.pathname.includes(path);
  };



  return (
    <div className="w-screen h-screen flex flex-col bg-[#E5E1DA]">
      <Headers />
      <main className="flex-grow overflow-y-auto flex justify-center px-40 ">
        <div className=" w-[1000px] flex my-4">
          <div className=" w-[200px]  flex flex-col items-center py-4 ">
            <Link
              to="account"
              className={`${isActive("account") ? "text-red-600" : ""}`}
            >
              <div className=" w-[80px] h-12 flex justify-start items-center text-xl font-semibold">
                Account
              </div>
            </Link>

            <Link
              to="purchase"
              className={`${isActive("purchase") ? "text-red-600" : ""}`}
            >
              <div className=" w-[80px] h-12 flex justify-start items-center text-xl font-semibold">
                Purchase
              </div>
            </Link>
          </div>

          <div style={{ flex: 1 }}>
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;

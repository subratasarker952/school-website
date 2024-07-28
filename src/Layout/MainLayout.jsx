import { Outlet } from "react-router-dom";
import Footer from "../Components/Shared/Footer/Footer";
import useAuth from "../Components/hooks/useAuth";
import Loading from "../Components/Shared/Loading/Loading";
import Header from "../Components/Shared/Header/Header";

const MainLayout = () => {
  const { userLoading } = useAuth();
  if (userLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div>
        <Header />
        <div className="p-4">
        <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

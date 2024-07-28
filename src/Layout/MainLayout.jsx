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
    <div className="flex flex-col min-h-screen justify-between max-w-5xl mx-auto">
      <div>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

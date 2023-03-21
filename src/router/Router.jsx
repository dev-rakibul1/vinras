import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AboutUs from "../pages/about/AboutUs";
import Home from "../pages/home/Home";
import Mission from "../pages/mission/Mission";
import Faq2 from "../pages/page/Faq2";
import Member from "../pages/page/Member";
import Page from "../pages/page/Page";
import TeamDetails from "../pages/page/TeamDetails";
import OurPortfolio from "../pages/portfolio/OurPortfolio";
import Portfolio from "../pages/portfolio/Portfolio";
import PortfolioDetails from "../pages/portfolio/PortfolioDetails";
import ServicePage from "../pages/services/ServicePage";
import ServicesPage2 from "../pages/services/ServicesPage2";
import ServicesDetails from "../pages/servicesDetails/ServicesDetails";
import ServicesDetails2 from "../pages/servicesDetails/ServicesDetails2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/page", element: <Page /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/servicePage", element: <ServicePage /> },
      { path: "/servicePage2", element: <ServicesPage2 /> },
      { path: "/serviceDetails", element: <ServicesDetails /> },
      { path: "/serviceDetails2", element: <ServicesDetails2 /> },
      { path: "/portfolio", element: <Portfolio /> },
      { path: "/ourPortfolio", element: <OurPortfolio /> },
      { path: "/portfolioDetails", element: <PortfolioDetails /> },
      { path: "/mission", element: <Mission /> },
      { path: "/member", element: <Member /> },
      { path: "/teamDetails", element: <TeamDetails /> },
      { path: "/faq-2", element: <Faq2 /> },
    ],
  },
]);

export default router;

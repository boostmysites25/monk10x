import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { LandingPageLayout, MainLayout } from "./Layout";
import ScrollToTopButton from "./Components/ScrollToTopButton";
import SpinnerContextProvider from "./Components/SpinnerContext";
import { Suspense, lazy } from "react";
import { LoadingSpinner } from "./Components/LoadingSpinner";
import ScrollToTop from "./Components/ScrollToTop";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import WhatsAppButton from "./Components/WhatsAppButton";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import AOS from "aos";
import "aos/dist/aos.css";

const Home = lazy(() => import("./Pages/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const OurServices = lazy(() => import("./Pages/OurServices"));
const ServiceDetails = lazy(() => import("./Pages/ServiceDetails"));
const Blogs = lazy(() => import("./Pages/Blogs"));
const BlogDetails = lazy(() => import("./Pages/BlogDetails"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const ThankYou = lazy(() => import("./Pages/ThankYou"));

AOS.init({
  once: true,
  duration: 500,
  easing: "ease-in-out-quart",
  offset: -70,
});

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <ScrollToTopButton />
      <ScrollToTop />
      <WhatsAppButton />
      <TawkMessengerReact
        propertyId="6870cd9dcf2f271910ba8b96"
        widgetId="1ivsa6cj6"
      />
      <SpinnerContextProvider>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="about-us" element={<AboutUs />} />
              <Route path="services" element={<OurServices />} />
              <Route path="services/:title" element={<ServiceDetails />} />
              <Route path="blogs" element={<Blogs />} />
              <Route path="blogs/:title" element={<BlogDetails />} />
              <Route path="contact-us" element={<ContactUs />} />
            </Route>

            <Route path="thank-you" element={<ThankYou />} />

            <Route path="/" element={<LandingPageLayout />}>
              {/* Landing Page */}
              <Route
                path="web-development"
                element={<LandingPage page="web" />}
              />
              <Route
                path="app-development"
                element={<LandingPage page="app" />}
              />
            </Route>
          </Routes>
        </Suspense>
      </SpinnerContextProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;


import { useState } from "react";

import WelcomeScreen from "./components/WelcomeScreen";
import BackgroundMusic from "./components/BackgroundMusic";
import FloatingPetals from "./components/FloatingPetals";

import Header from "./components/Header";
import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      {/* Background music */}
      <BackgroundMusic />

      {/* Welcome / Opening Screen */}
      {!isOpened && (
        <WelcomeScreen onOpen={() => setIsOpened(true)} />
      )}

      {/* Main Birthday Invitation */}
      {isOpened && (
        <main className="invitation-reveal min-h-screen overflow-hidden">
          <FloatingPetals />

          <Header />

          <Hero />

          <EventDetails />

          <RSVPForm />

          <Footer />
        </main>
      )}
    </>
  );
}

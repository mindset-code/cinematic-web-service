import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import DemoLanding from "./sections/DemoLanding.jsx";
import { applyBrand } from "./brand.js";

export default function App() {
  const root = useRef(null);

  // Inyecta los design tokens de marca antes de pintar las animaciones.
  useGSAP(() => {
    applyBrand();
  }, { scope: root });

  return (
    <div ref={root}>
      <DemoLanding />
    </div>
  );
}

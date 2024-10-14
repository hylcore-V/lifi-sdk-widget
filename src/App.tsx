// src/App.tsx
import React from "react";
import { LiFiWidget } from "@lifi/widget";
import QuoteFetcher from "./components/QuoteFetcher"; // Assuming you still want to use this component

function App() {
  return (
    <div>
      <h1>Welcome to Our dApp</h1>
      {/* LI.FI Widget integration */}
      <div style={{ margin: "20px", padding: "20px" }}>
        <LiFiWidget
          integrator="vite-example"
          config={{
            variant: "wide",
            subvariant: "split",
            appearance: "auto",
            theme: {
              palette: {
                primary: {
                  main: "#5C67FF",
                },
                secondary: {
                  main: "#F5B5FF",
                },
              },
              typography: {
                fontFamily: "Inter, sans-serif",
              },
              container: {
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
                borderRadius: "16px",
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;

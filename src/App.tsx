// src/App.tsx
import React from "react";
import { LiFiWidget } from "@lifi/widget";
import { ChainId } from '@lifi/widget';


function App() {
  return (
    <div>
      <div style={{ margin: "20px", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "85vh" }}>
        <LiFiWidget
          integrator="vite-example"
          config={{
            variant: "wide",
            subvariant: "split",
            appearance: "dark",
            theme: {
              palette: {
                primary: {
                  main: "#5C67FF"
                },
                secondary: {
                  main: "#F5B5FF"
                }
              },
              typography: {
                fontFamily: "Inter, sans-serif",
              },
              container: {
                boxShadow: "0px 8px 32px rgba(0, 0, 0, 0.08)",
                borderRadius: "16px",
                zIndex: "2",
                borderBottom: "6px solid #000"
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default App;

// src/App.tsx
import React from "react";
import { LiFiWidget } from "@lifi/widget";
import { ChainId } from '@lifi/widget';


function App() {
  return (
    <div>
      <div style={{ margin: "20px", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: "85vh" }}>
        <LiFiWidget
          integrator="BrixoApp"
          config={{
            variant: "compact",
            subvariant: "default",
            appearance: "dark",
            fee: 0.003,
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
        <div className="wallet-footer">
          <div>
            <h6>
              Best Price Execution – Any Chain to Any Chain
            </h6>
            <p>
              Seamlessly swap, bridge, and zap across all blockchains and protocols. Get the best rates by trading through top DEX aggregators, bridges, and intent-systems - all in one place.
            </p>
            <p>
              Start optimizing your crypto transactions with ease on Brixo!
            </p>
            <div className="copyright">
              <p>Integrated for the community by Red Guy</p>
              <img src="./fav.webp" alt="red guy logo fav" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

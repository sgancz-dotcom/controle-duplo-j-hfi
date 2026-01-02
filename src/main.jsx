import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{padding:20,fontFamily:'system-ui'}}>
      <h1>Controle de Duplo J - HFI</h1>
      <p>Frontend carregado com sucesso.</p>
      <p>Próximo passo: integrar com Apps Script.</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

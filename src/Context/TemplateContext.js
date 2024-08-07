import React, { createContext, useState } from "react";

export const TemplateContext = createContext(null);

function TemplateProvider({ children }) {
  const [selectedTemplate, setselectedtemplate] = useState(null);
  return (
    <TemplateContext.Provider value={{ selectedTemplate, setselectedtemplate }}>
      {children}
    </TemplateContext.Provider>
  );
}

export default TemplateProvider;

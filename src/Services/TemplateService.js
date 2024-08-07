const TemplateServices = {};

TemplateServices.getAllTemplates = (buisnessInfo, setTemplate) => {
  try {
    setTemplate([{ item: "hello" }]);
    console.log(buisnessInfo);
  } catch (error) {
    console.log(error);
  }
};

export default TemplateServices;

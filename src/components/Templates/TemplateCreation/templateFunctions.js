export const handleTextChange = (componentType, newText, setTemplateData) => {
  setTemplateData((oldTemplate) => ({
    ...oldTemplate,
    components: oldTemplate.components.map((component) => {
      const updatedComponent = {
        type: component.type,
        ...serializeTextMappingsAndSubstitutions(
          component.type,
          newText,
          component.mappings,
          component.substitutions
        ),
      };
      if (component.type === "HEADER" || component.type === "FOOTER") {
        updatedComponent.format = component.format;
      }
      return component.type === componentType ? updatedComponent : component;
    }),
  }));
};

export const handleEmojiClick = (
  componentType,
  emoji,
  templateData,
  setTemplateData,
  handleClose
) => {
  const tf = document.getElementById(`${componentType}`);
  const component = templateData.components.find(
    (component) => component.type === componentType
  );
  const pos = tf.selectionStart;
  const newText = component.text
    ? component.text.substring(0, pos) +
      `${emoji}` +
      component.text.substring(pos)
    : `${emoji}`;
  tf.value = newText;
  handleTextChange(componentType, newText, setTemplateData);
  tf.focus();
  handleClose();
};

export const handleMappingValueChange = (
  componentType,
  variable,
  newValue,
  setTemplateData
) => {
  setTemplateData((oldTemplate) => ({
    ...oldTemplate,
    components: oldTemplate.components.map((component) =>
      component.type === componentType
        ? {
            ...component,
            mappings: { ...component.mappings, [variable]: newValue },
          }
        : component
    ),
  }));
};

export const handleSubstitutionValueChange = (
  componentType,
  valueIndex,
  newValue,
  setTemplateData
) => {
  setTemplateData((oldTemplate) => ({
    ...oldTemplate,
    components: oldTemplate.components.map((component) =>
      component.type === componentType
        ? {
            ...component,
            substitutions: component.substitutions.map(
              (substitution, index) => {
                return index === valueIndex ? newValue : substitution;
              }
            ),
          }
        : component
    ),
  }));
};

export const handleAddVariable = (
  componentType,
  TemplateData,
  setTemplateData
) => {
  const tf = document.getElementById(`${componentType}`);
  tf.focus();
  const component = TemplateData?.components?.find(
    (component) => component.type === componentType
  );
  const variable = component?.variables?.length ?? 0;
  const pos = tf?.selectionStart;
  const newText = component?.text
    ? component?.text?.substring(0, pos) +
      `{{${variable + 1}}}` +
      component?.text?.substring(pos)
    : `{{${variable + 1}}}`;
  tf.value = newText;
  handleTextChange(componentType, newText, setTemplateData);
  tf.focus();
};

export const findVariablesAndReplacements = (text) => {
  /* Match numbers between 1-9 */
  const regex = /\{\{([1-9]\d*)\}\}/g;
  let match;
  const variables = [];
  var index = 0;
  while ((match = regex.exec(text)) !== null) {
    index++;
    variables.push({
      matchString: match[0],
      matchVariable: match[1],
      startIndex: match.index,
      endIndex: match.index + match[0].length,
      replacementString: `{{${index}}}`,
      replacementVariable: `${index}`,
    });
  }
  return variables;
};

export const serializeTextMappingsAndSubstitutions = (
  componentType,
  inputText,
  existingMapping = {},
  existingSubstitutions = []
) => {
  try {
    var variables = findVariablesAndReplacements(inputText);
    var serializedVariables = [],
      outputText = inputText;

    if (componentType === "HEADER" && variables.length > 1) {
      variables.forEach((variable, index) => {
        if (index > 0) {
          outputText =
            outputText.substring(0, variable.startIndex) +
            outputText.substring(variable.endIndex);
        }
      });
      variables = [variables[0]];
    }

    variables.forEach((variable, index) => {
      outputText =
        outputText.substring(0, variable.startIndex) +
        variable.replacementString +
        outputText.substring(variable.endIndex);
      serializedVariables.push(`${index + 1}`);
    });

    const finalMapping = {};
    serializedVariables.forEach((variable, index) => {
      if (existingMapping.hasOwnProperty(variable))
        finalMapping[index + 1] = existingMapping[variable];
      else finalMapping[index + 1] = "";
    });

    const finalSubstitutions = serializedVariables.map(
      (variable, index) => existingSubstitutions[index] || ""
    );
    return {
      text: outputText,
      mappings: finalMapping,
      substitutions: finalSubstitutions,
      variables: variables,
    };
  } catch (error) {
    console.log(error);
  }
};

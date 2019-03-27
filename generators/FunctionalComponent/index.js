/* eslint-disable no-useless-escape */
/* tslint:disable */
module.exports = projectPath => {
  const cwd = process.cwd();

  const basePath = `${projectPath}/\{{ componentType }}s/\{{ pascalCase name }}`;

  return {
    name: "FunctionalComponent",
    generator: {
      description: "Create pages or dumb components",
      prompts: [
        {
          type: "list",
          name: "componentType",
          choices: ["component", "page"],
          message: "What type of component is this?",
          default: "component",
          basePath: projectPath
        },
        {
          type: "input",
          name: "name",
          message:
            "What should it be called? (you can add a path here like `dir/ExampleButton`)",
          default: "ExampleButton"
        }
      ],
      actions: [
        {
          type: "add",
          path: `${basePath}/\{{ name }}.tsx`,
          templateFile: `${cwd}/generators/FunctionalComponent/templates/component.tsx.hbs`,
          abortOnFail: true
        },
        {
          type: "add",
          path: `${basePath}/\{{ name }}.style.ts`,
          templateFile: `${cwd}/generators/Shared/templates/component.style.ts.hbs`,
          abortOnFail: true
        },
        {
          type: "add",
          path: `${basePath}/index.ts`,
          templateFile: `${cwd}/generators/Shared/templates/index.ts.hbs`,
          abortOnFail: true
        }
      ]
    }
  };
};

const projectPath = `${process.cwd()}/src`;

const generators = [
  require("./generators/ClassComponent")(projectPath),
  require("./generators/FunctionalComponent")(projectPath)
];

module.exports = plop => {
  generators.map(g => plop.setGenerator(g.name, g.generator));
};

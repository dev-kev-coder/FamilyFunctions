// Basic library
const Kelvin = {
  appRoot: null,

  render(app) {
    this.appRoot.appendChild(app());
    console.log("rendering");
  },

  getRootElement(elementId) {
    this.appRoot = document.getElementById(elementId);
  },
};

const component = (val) => {
  const heading = document.createElement("h1");
  heading.innerText = val;
  return heading;
};

const app = () => {
  const div = document.createElement("div");
  div.appendChild(component('Test1'));
  div.appendChild(component('Test1'));
  div.appendChild(component('Test1'));
  div.appendChild(component('Test1'));
  return div;
};

const root = Kelvin.getRootElement("root");

Kelvin.render(app);

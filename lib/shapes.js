// Import the generateSvgText function from the "./svg" module
const { generateSvgText } = require("./svg");

// Base class for shapes, stores the color property
class Shapes {
  constructor(color) {
    this.color = color;
  }
}

// Circle class, extends the Shapes class
class Circle extends Shapes {
    // Render method to generate the SVG content for a circl
  render(svgText) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

      <circle cx="150" cy="100" r="80" fill="${this.color}" />

      ${svgText}

    </svg>`;
  }
}

// Square class, extends the Shapes class
class Square extends Shapes {
    // Render method to generate the SVG content for a square
  render(svgText) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      
      <rect x="90" y="40" width="120" height="120" fill="${this.color}" />

      ${svgText}

    </svg>`;
  }
}

// Triangle class, extends the Shapes class
class Triangle extends Shapes {
    // Render method to generate the SVG content for a triangle
  render(svgText) {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      
      <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />

      ${svgText}

    </svg>`;
  }
}

// Export the Circle, Triangle, and Square classes as an object
module.exports = {
  Circle,
  Triangle,
  Square,
};
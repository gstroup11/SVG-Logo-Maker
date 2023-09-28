const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
  describe('render', () => {
    it('should return the SVG content for a circle with the specified color', () => {
      const circle = new Circle('blue');
      const svgText = '<text>Some text</text>';
      const expectedCircleElement = `<circle cx="150" cy="100" r="80" fill="blue" />`;

      const renderedSvg = circle.render(svgText);

      expect(renderedSvg).toContain(expectedCircleElement);
      expect(renderedSvg).toContain(svgText);
    });
  });
});

describe('Square', () => {
  describe('render', () => {
    it('should return the SVG content for a square with the specified color', () => {
      const square = new Square('red');
      const svgText = '<text>Some text</text>';
      const expectedSquareElement = `<rect x="90" y="40" width="120" height="120" fill="red" />`;

      const renderedSvg = square.render(svgText);

      expect(renderedSvg).toContain(expectedSquareElement);
      expect(renderedSvg).toContain(svgText);
    });
  });
});

describe('Triangle', () => {
  describe('render', () => {
    it('should return the SVG content for a triangle with the specified color', () => {
      const triangle = new Triangle('green');
      const svgText = '<text>Some text</text>';
      const expectedTriangleElement = `<polygon points="150, 18 244, 182 56, 182" fill="green" />`;

      const renderedSvg = triangle.render(svgText);

      expect(renderedSvg).toContain(expectedTriangleElement);
      expect(renderedSvg).toContain(svgText);
    });
  });
});
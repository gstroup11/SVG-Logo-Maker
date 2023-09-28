const { generateSvgText } = require('./svg');

// Generated Text Test
describe('generateSvgText', () => {
  it('should return the SVG text element with the specified text and text color', () => {
    const text = 'Hello, World!';
    const textColor = 'red';
    const expected = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="red">Hello, World!</text>`;

    const generatedSvgText = generateSvgText(text, textColor);

    expect(generatedSvgText).toEqual(expected);
  });
});
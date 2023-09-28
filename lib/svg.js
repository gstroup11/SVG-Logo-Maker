//Function for generating svg's text.
function generateSvgText(text, textColor) {
    //Returns the generated text and text color.
    return `<text x="150" y="125" font-size= "60" text-anchor="middle" fill="${textColor}">${text}</text>`;
  }
  
  //Export the generateSvgText function.
  module.exports = {
    generateSvgText,
  };
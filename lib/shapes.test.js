const {triangle, circle, square} = require("./shapes.js");

test('Triangle render method returns correct SVG string', () => {
    const shape = new triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="green" />')
});

test('Circle render method returns correct SVG string', () => {
    const shape = new circle();
    shape.setColor('red');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red" />');
  });

test('Square render method returns correct SVG string', () => {
    const shape = new square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect width="300" height="200" fill="blue" />')
});
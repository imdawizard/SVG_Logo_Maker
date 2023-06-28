const {triangle, circle, square} = required("./shapes.js");

Test('Triangle render method returns correct SVG string', () => {
    const shape = new triangle();
    shape.setColor('green');
    expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"')
});
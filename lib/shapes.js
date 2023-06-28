class shape {
    constructor() {
        this.color = '';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        //not sure yet
    }
}

class triangle extends shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill=${this.color} />'`
    }
}

class circle extends shape {
    renter() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`
    }
}

class square extends shape {
    return() {
        return `<rect width="300" height="200" fill="${this.color}" />`
    }
}

module.exports = {
    shape,
    triangle,
    circle,
    square,
};
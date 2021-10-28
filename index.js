class Frog {
    constructor(name, jumpStrength, colour)
    {
        this.name = name;
        this.legs = 4;
        this.jumpStrength = jumpStrength;
        this.colour = colour;
    }

}

const dougie = new Frog('dougie', 68, 'orange');

module.exports = {
    Frog,
    dougie
}

// ----------------------------
// Simple Pattern
// ----------------------------
class WoodenDoor {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}

const DoorFactory = {
    makeDoor: (width, height) => new WoodenDoor(width, height)
}

const door = DoorFactory.makeDoor(100,200);
console.log('width: ' + door.getWidth());
console.log('height: ' + door.getHeight());
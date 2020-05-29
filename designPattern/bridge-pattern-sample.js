// ----------------------------
// Bridge Pattern
// ----------------------------
class About {
    constructor(theme) {
        this.theme = theme;
    }

    getContent() {
        return 'About page in ' + this.theme.getColor();
    }
}

class Careers {
    constructor(theme) {
        this.theme = theme;
    }

    getContent() {
        return 'Chreers page in ' + this.theme.getColor();
    }
}


// -- Color.js
class DarkTheme {
    getColor() {
        return 'Dark Black';
    }
}

class LightTheme {
    getColor() {
        return 'Off white';
    }
}

class Aquatheme {
    getColor() {
        return 'Light blue';
    }
}


const darkTheme = new DarkTheme();

const about = new About(darkTheme);
const careers = new Careers(darkTheme);

console.log(about.getContent());
console.log(careers.getContent());
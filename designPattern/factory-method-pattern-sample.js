// ----------------------------
// Factory Method Pattern
// ----------------------------
class Deleloper {
    askQuestions() {
        console.log('Asking about design pattens!');
    }
}

class CommunityExecutive {
    askQuestions() {
        console.log('Asking about community building');
    }
}

class HiringManager {
    takeInterview() {
        const interviewer = this.makeInterviewer();
        interviewer.askQuestions();
    }
}

class DevelopmentManager extends HiringManager {
    makeInterviewer() {
        return new Deleloper();
    }
}

class MarketingManager extends HiringManager {
    makeInterviewer() {
        return new CommunityExecutive();
    }
}

const devManager = new DevelopmentManager();
const devRes = devManager.takeInterview();

const marketingManager = new MarketingManager();
const marketingRes = marketingManager.takeInterview();
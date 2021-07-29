"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CallIf = exports.Call = exports.Repeat = exports.Wait = exports.Timer = exports.Done = exports.Print = exports.Seq = void 0;
const Seq = (sm1, sm2) => ({
    sm1: sm1,
    sm2: sm2,
    current: sm1,
    next: sm2,
    busy: true,
    update: function () {
        if (this.busy) {
            this.current.update();
            if (!this.current.busy) {
                this.current = this.next;
            }
            if (!this.next.busy) {
                this.busy = false;
            }
        }
    },
    reset: function () {
        this.sm1.reset();
        this.sm2.reset();
        this.current = this.sm1;
        this.busy = true;
    },
});
exports.Seq = Seq;
const Print = (msg) => ({
    message: msg,
    busy: true,
    update: function () {
        console.log(this.message);
        this.busy = false;
    },
    reset: function () {
        this.busy = true;
    }
});
exports.Print = Print;
const Done = () => ({
    busy: true,
    update: function () {
        this.busy = false;
    },
    reset: function () {
        this.busy = true;
    }
});
exports.Done = Done;
const Timer = (time) => ({
    time: time,
    busy: true,
    update: function () {
        setTimeout(() => {
            this.busy = false;
        }, time);
    },
    reset: function () {
        this.busy = true;
    }
});
exports.Timer = Timer;
const Wait = (p) => ({
    predicate: p,
    busy: true,
    update: function () {
        if (this.predicate()) {
            this.busy = false;
        }
    },
    reset: function () {
        this.busy = true;
    }
});
exports.Wait = Wait;
const Repeat = (action) => ({
    action: action,
    busy: true,
    update: function () {
        if (!this.action.busy) {
            this.reset();
        }
        this.action.update();
    },
    reset: function () {
        action.reset();
    }
});
exports.Repeat = Repeat;
const Call = (action) => ({
    action: action,
    busy: true,
    update: function () {
        this.action();
        this.busy = false;
    },
    reset: function () {
        this.busy = true;
    }
});
exports.Call = Call;
const CallIf = (guard, action) => ({
    guard: guard,
    action: action,
    busy: true,
    update: function () {
        if (this.guard()) {
            this.action();
        }
        this.busy = false;
    },
    reset: function () {
        this.busy = true;
    }
});
exports.CallIf = CallIf;

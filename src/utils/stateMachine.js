export const Seq = (sm1, sm2) => ({
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

export const Print = (msg) => ({
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

export const Done = (msg) => ({
    busy: true,
    update: function () {
        this.busy = false;
    },
    reset: function () {
        this.busy = true;
    }
});
export const Timer = (time) => ({
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

export const Wait = (p) => ({
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
export const Repeat = (action) => ({
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

export const Call = (action) => ({
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

export const CallIf = (guard, action) => ({
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




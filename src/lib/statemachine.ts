export interface StateMachine {
    busy: boolean
    update: () => void
    reset: () => void
}

export interface Seq extends StateMachine {
    sm1: StateMachine 
    sm2: StateMachine
    current: StateMachine, 
    next: StateMachine
}

export const Seq = (sm1: StateMachine, sm2: StateMachine): Seq => ({
    sm1: sm1, 
    sm2: sm2, 
    current: sm1, 
    next: sm2, 
    busy: true, 

    update: function() {
        if (this.busy) {
            this.current.update()
            if (!this.current.busy) {
                this.current = this.next
            } 
            if (!this.next.busy) {
                this.busy = false
            }
        }
    }, 

    reset: function () {
        this.sm1.reset() 
        this.sm2.reset()
        this.current = this.sm1
        this.busy = true
    },

})

export interface Print extends StateMachine {
    message: string
}

export const Print = (msg: string): Print => ({
    message: msg, 
    busy: true, 
    
    update: function() {
        console.log(this.message)
        this.busy = false
    }, 

    reset: function() {
        this.busy = true
    }
})

export interface Done extends StateMachine {
}

export const Done = (): Done => ({
    busy: true, 

    update: function() {
        this.busy = false
    }, 

    reset: function() {
        this.busy = true
    }
})

export interface Timer extends StateMachine {
    time: number
}

export const Timer = (time: number): Timer => ({
    time:  time,
    busy: true, 
    
    update: function() {
        setTimeout(() => {
            this.busy = false
        }, time)
    }, 

    reset: function() {
        this.busy = true
    }
})

export interface Wait extends StateMachine {
    predicate: () => boolean
}

export const Wait = (p: () => boolean): Wait => ({
    predicate: p, 
    busy: true, 
    
    update: function() {
        if (this.predicate()) {
            this.busy = false
        }
    }, 

    reset: function() {
        this.busy = true
    }
})

export interface Repeat extends StateMachine {
    action: StateMachine
}

export const Repeat = (action: StateMachine): Repeat => ({
    action: action, 
    busy: true, 
    
    update: function() {
        if (!this.action.busy) {
            this.reset()
        }
        this.action.update()
    }, 

    reset: function() {
        action.reset()
    }
})

export interface Call extends StateMachine {
    action: () => void
}

export const Call = (action: () => void): Call => ({
    action: action, 
    busy: true, 
    
    update: function() {
        this.action()
        this.busy = false
    }, 

    reset: function() {
        this.busy = true
    }
})

export interface CallIf extends StateMachine {
    guard: () => boolean
    action: () => void
}

export const CallIf = (guard: () => boolean, action: () => void): CallIf => ({
    guard: guard,
    action: action, 
    busy: true, 
    
    update: function() {
        if (this.guard()) {
            this.action()
        }
        this.busy = false
    }, 

    reset: function() {
        this.busy = true
    }
})

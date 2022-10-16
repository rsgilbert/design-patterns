// based on switch-state-machine
// The create machine function is the same but the stateMachineDefinition differs

function createMachine(stateMachineDefinition) {
    const machine = {
        value: stateMachineDefinition.initialState,
        transition(currentState, event) {
            const currentStateDefinition = stateMachineDefinition[currentState]
            const destinationTransition = currentStateDefinition.transitions[event]
            if (!destinationTransition) {
                console.error('no transition for event', event, 'and current state', currentState)
                return;
            }
            const destinationState = destinationTransition.target
            const destinationStateDefinition = stateMachineDefinition[destinationState]
            destinationTransition.action()
            currentStateDefinition.actions.onExit()
            destinationStateDefinition.actions.onEnter()
            machine.value = destinationState
            return machine.value
        }
    }
    return machine
}


const machine = createMachine({
    // state machine defintion
    initialState: 'open',
    open: {
        // state defintion. The actions and transitions
        actions: {
            onEnter() {
                console.log('open: onEnter')
            },
            onExit() {
                console.log('open: onExit')
            }
        },
        transitions: {
            // event is 'switch', transition is the switch object
            requestApproval: {
                target: 'pending',
                action() {
                    console.log('I am requesting for approval')
                }
            },
        }
    },
    pending: {
        // state definition..
        actions: {
            onEnter() {
                console.log('pending: onEnter')
            },
            onExit() {
                console.log('pending: onExit')
            }
        },
        transitions: {
            requestApproval: {
                target: 'pending',
                action() {
                    console.log('I am requesting for further approval')
                }
            },
            approve: {
                target: 'approved',
                action() {
                    console.log('I have fully approved the request')
                }
            },
            reject: {
                target: 'rejected',
                action() {
                    console.log('I have rejected your request')
                }
            },
            reopen: {
                target: 'open',
                action() {
                    console.log('I have reopened the request')
                }
            }
        }
    },
    approved: {
        // state definition..
        actions: {
            onEnter() {
                console.log('approved: onEnter')
            },
            onExit() {
                console.log('approved: onExit')
            }
        },
        transitions: {
        }
    },
    rejected: {
        // state definition..
        actions: {
            onEnter() {
                console.log('rejected: onEnter')
            },
            onExit() {
                console.log('rejected: onExit')
            }
        },
        transitions: {
            reopen() {
                console.log('I have reopened the request')
            },
        }
    },
})

let state = 'open'
state = machine.transition(state, 'requestApproval')
console.log('Current state', state, '\n')

state = machine.transition(state, 'requestApproval')
console.log('Current state', state, '\n')

state = machine.transition(state, 'approve')
console.log('Current state', state, '\n')

console.log('\n*** From open to Rejected ***')
state = 'open'

state = machine.transition(state, 'requestApproval')
console.log('Current state', state, '\n')

state = machine.transition(state, 'reopen')
console.log('Current state', state, '\n')

state = machine.transition(state, 'requestApproval')
console.log('Current state', state, '\n')

state = machine.transition(state, 'reject')
console.log('Current state', state, '\n')


state = machine.transition(state, 'reject') // should log an error

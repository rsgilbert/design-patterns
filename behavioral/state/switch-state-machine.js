// Implementing a simple switch using a state machine
// see: https://kentcdodds.com/blog/implementing-a-simple-state-machine-library-in-javascript

function createMachine(stateMachineDefinition) {
    const machine = {
        value: stateMachineDefinition.initialState,
        transition(currentState, event) {
            const currentStateDefinition = stateMachineDefinition[currentState]
            const destinationTransition = currentStateDefinition.transitions[event]
            if(!destinationTransition) {
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
    initialState: 'off',
    off: {
        // state defintion. The actions and transitions
        actions: {
            onEnter() { 
                console.log('off: onEnter')
            },
            onExit() { 
                console.log('off: onExit')
            }
        },
        transitions: {
            // event is 'switch', transition is the switch object
            switch: {
                target: 'on',
                action() {
                    console.log('transition action for switch in off state')
                }
            }
        }
    },
    on: {
        // state definition..
        actions: {
            onEnter() {
                console.log('on: onEnter')
             },
            onExit() { 
                console.log('on: onExit')
            }
        },
        transitions: {
            switch: {
                target: 'off',
                action() {
                    console.log('transition action for switch in on state')
                }
            }
        }
    },
})

// for a simple switch
let state = machine.value
console.log(`Current state: ${state}`) // off

state = machine.transition(state, 'switch')
console.log(`Current state: ${state}`) // on 


state = machine.transition(state, 'switch')
console.log(`Current state: ${state}`) // off

machine.transition('off', 'switch')


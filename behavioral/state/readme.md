# State design pattern

The state design pattern allows an object (the context) to alter
its behaviour when its current state changes.

The object will appear to change its class.

The state design pattern allows representation of the various states
an object can be in as objects. Each state is represented as an object.

The state objects also define state transitions. The context object
does not know when to change from one state to another.

The state design pattern can be used to design and implement state machines.


The way state machines are best implemented in javascript is 
different from how state machines are usually implemented in class-based
programming languages like java. In javascript we use functions and not classes in the implementation.

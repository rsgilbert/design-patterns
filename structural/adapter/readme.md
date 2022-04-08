# Adapter pattern


Also known as Wrapper. When we implement the adapter by subclassing the target we are wrapping the target. When we implement the adapter by using
a delegate object, the delegate object wraps the adaptee.

Convert the interface of a class into another interface clients expect.

An adapter is used to change the interface of an existing object that we are adapting(the adaptee) so that the existing object can be used can be used
by another object (the target) that expects a different interface from the adaptee.

This conversation is focused on the object adapters that use objects and leaves out class adapters that use multiple inheritence. 

The adapter implements a narrow interface we need to adapt. This is the smallest
subset of operations on the target interface that we need to adapt. We adapter implements this narrow interface using operations defined on the adaptee object.
The adaptee object is the mercenary object that knows how to take on 
the advanced/complicated tasks defined by the narrow interface.

The adapter is implemented either by subclassing the target class or by keeping it as a delegate object that the target defers to for performing operations defined on the narrow interface. When the adapter is implemented by subclassing the target interface, the client will now have to use the adapter as its new target.

Participants:

Target(Shape): Defines domain specific interface that Client uses.

Client(Drawing Editor): Collaborates with objects confirming to the Target interface.

Adaptee(TextView): Defines an existing interface that needs adapting.

Adapter(TextShape): Adapts the interface of Adaptee to the Target interface.




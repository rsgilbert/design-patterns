# Template design pattern

A template method defines the invariants parts of an algorithm.
It calls abstract methods that will need to be implemented by 
subclasses for subclass specific behaviour.

The template method fixes the ordering of the invariant parts.

Template methods leads to the inverted control structure where the parent 
class calls the operations of the subclass and not the other way around. This control structure is called
the Holywood principle, ie: Dont call us, we'll call you.

Template methods sometimes call hook operations. Hook operations are 
 empty methods that do nothing by default but can be overriden by subclasses to provide extension of the parent class.


The template method must not be overridden.


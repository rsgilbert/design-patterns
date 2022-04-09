# Composite Design pattern

Compose objects into tree structures to represent 
part-whole hierarchies.

Treat individual objects and compositions of objects
uniformly.


Participants:

Component: Declares a common interface that is extended by the Leaf and Composite participants.

Leaf: Represents individual objects that have no children. These are the primitive objects in the composition and are also called leaves in a tree structure.

Composite: Defines behaviour for components that have children.

Client: Manipulates objects in the composition through the component interface.



****** 

My understanding:

Composite design pattern is about representing data that may be originally represented in multiple formats into a single format that
can be interacted with through a single common interface.

For example, the data may be an array, other data an object, other data as null, other data as a certain class. Now we want that we can 
use a single interface to call methods on this data. So we find a way to represent this data using that new interface.

Its more of setting up adapters for each representation that target the same interface.

A composite interface provides a common set of operations
on many different objects that are of different types.






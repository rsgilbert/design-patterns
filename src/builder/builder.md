# Builder

The builder pattern separates the construction of a complex
object from its representation so that the 
same construction process can create different 
representations.

The builder hides the internal representation of the constructed object.
The client (director) does not have to know / interact with the classes that make up the different parts of the object.

Using a builder means you dont have to use a constructor that takes so many parameters, or using overloaded constructors (overloaded constructors are not supported in JavaScript).


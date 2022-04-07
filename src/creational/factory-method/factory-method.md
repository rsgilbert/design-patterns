# FACTORY METHOD

Also known as Virtual Constructor.

Define an interface for creating an object but let 
subclasses decide which class to instantiate.

For abstract factory methods, we follows a rule that says: Create objects in a separate operation
so that subclasses can override the way objects are created.

For parameterized factory methods, the factory method takes a parameter(s) that it uses to decide which
class or subclass to instantiate.

You can also use templates/generics on the Creator when implementing factory methods. You provide the subclass of the Product to the Creator using generics to avoid having to create multiple subclasses of the Creator.

The Creator is the class with the factory method.

The Product is the class with multiple variants/subclasses that is being instantiated.

The factory pattern separates the code that creates a product from the code that uses the product
so that the two can be extended independently.

Factory method is a specialization of the Template method.

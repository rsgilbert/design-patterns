# THE OBSERVER DESIGN PATTERN

Also known as Publisher-Subscriber.

The observer design pattern allows you to define a one-to-many
dependency between objects so that when one object changes the 
other objects are notified of the change.

The object that changes is referred to as the subject / observable / publisher.
The objects that are notified of a change in the subject are 
known as observers / subscribers.

In the Model-View-Controller triad, the model/datasource is the subject and 
the view/presentation is the observer.

Deleting a subject should not produce dangling references in its observers.
In a different observer pattern implementation, deleting an observer should also not produce dangling references on the subject's list of observers.
We achieve this by calling a deattach method on the subject eg sub.deattach(obs) to remove an observer from a subject's list of observers.






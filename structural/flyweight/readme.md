# Flyweight design pattern

A flyweight is an object that can be shared by multiple objects
simultaneously. It has readonly data and methods that act on outside state.

Flyweight design pattern means storing common sets of readonly data in flyweight objects and keeping
data that changes in context objects. Each context object has a flyweight. Multiple context objects can have the same flyweight. 

This is an optimization technique mostly used to minimize space usage. But I think we can use it even for those
cases where constructing objects is expensive in terms of time or cpu.  We  extract out the part that is time consuming and create it from  another class. We refer to such created
objects as flyweights. We use a factory that keeps a cache of instances of such objects
so we can return the same object next time they ask us to create a similar one.




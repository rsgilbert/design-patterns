# Mediator pattern 

The mediator pattern is followed when separating the interactions between colleague objects 
such that they dont have dependencies on one another. A mediator object is used a medium of 
communication. The mediator is notified by the colleague objects and the mediator also calls 
methods on the colleague objects. In this way, colleague objects know nothing about one another
and if one wants to do something done by another object, they send the request to the mediator object
the request and mediator chooses which object to forward the request to.




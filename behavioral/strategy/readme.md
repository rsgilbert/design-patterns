# Strategy design pattern

Also known as Policy

The strategy design pattern is used when we want to avoid 
exposing complex algorithm specify data structures to the client.

It also helps when there are multiple variants of the algorithm but the
client only needs to use one of these variants.

In javascript, strategies can be implemented as functions and
provided to the clients as construtor/function parameters.
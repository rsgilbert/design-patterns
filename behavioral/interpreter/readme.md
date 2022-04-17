# Interpreter pattern

The interpreter pattern is used to represent the 
grammar of a language in form of a tree. 

It then provides a way to interprete sentences in the language.

The tree implemented consists of terminal and 
non-terminal expression instnces.

A context object is used to lookup values for various
variables at the point of evaluating/interpreting the tree. The context
object is provided by the client at the point of evaluation/interpretation.

The interpreter pattern helps solve problems that 
can be represented as sentences in a simple language.

The interpreter pattern structures the abstract syntax
tree by following the composite pattern. Its behaviour and intent is to interprete the problem being represented
by the abstract syntax tree and punch in values provided by 
a context object so as to arrive at a single answer.


## My own understanding of interpreter pattern

Represent a problem inform of a tree structure such that
the overall solution to the problem can be calculated by
calling an interprete method at the root of the tree.
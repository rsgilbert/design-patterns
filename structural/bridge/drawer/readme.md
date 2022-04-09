# Drawer 

Implement a drawer using a shape-drawer abstraction and a write-impl implementation.

Shape drawer has its own class hierarchy and so does Write implementation.

This is a very good example of the bridge pattern.

We make write-impl handle the lower level details of how to write lines.

A similar implementation can be done for a JSON writer/parser.
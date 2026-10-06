---
layout: single
title: "Complexity"
permalink: /notes/complexity/
author_profile: true
---

[← Research Notes]({{ '/notes/' | relative_url }})

## Complexity reading journal

These notes collect ideas from my reading of Melanie Mitchell's *Complexity: A Guided Tour*, alongside reflections on their relevance to physical and engineering problems. They are paraphrases and working interpretations, rather than quotations.

### 1. Complex systems and information

Complex systems can sense information from their environment, store it in their internal dynamics, and use it to shape future behavior. This perspective draws attention to how information is acquired, retained, and used—not simply to the number of components in a system.

*Source: Melanie Mitchell, Complexity: A Guided Tour.*

### 2. Different physical systems, shared organizational principles

Complex systems with very different physical properties and components may share organizational principles in how they handle information and translate it into system behavior. Identifying these common principles can make it possible to transfer ideas and methods across disciplines.

*Source: Melanie Mitchell, Complexity: A Guided Tour.*

### 3. Finding the right abstraction

A central challenge is finding the right abstraction of the physical or engineering problem. Before selecting an algorithm or a complexity metric, we need to decide which variables, interactions, and scales capture the behavior we want to understand.

*Personal methodological reflection prompted by the reading.*

### 4. The limits of formal systems: Gödel

A consistent, effectively axiomatized formal system sufficiently powerful to express elementary arithmetic contains statements that cannot be proved or disproved within that system. Adding an undecidable statement as an axiom can strengthen the system, but any resulting system satisfying the same conditions will still have undecidable statements.

*Source: discussion of Gödel's incompleteness theorems in Mitchell, Complexity: A Guided Tour.*

### 5. Defining computation: Turing

Turing gave a mathematical formulation of what it means to carry out a precise, mechanically applicable procedure. This made computation an abstract object of study, independent of the particular machine used to perform it.

*Source: discussion of Turing and computation in Mitchell, Complexity: A Guided Tour.*

### 6. Fundamental limits of computation

The limits of computation are not only limits of processing speed or memory. Some problems cannot, in principle, be solved by a general algorithm. The halting problem is a central example: no algorithm can correctly decide, for every possible program and input, whether that program will eventually stop.

*Source: discussion of computability in Mitchell, Complexity: A Guided Tour.*

### 7. Complexity has no single universal definition

There is no single, generally accepted definition or measure of complexity. In approaches that emphasize organized structure, both extreme regularity and complete randomness can correspond to low complexity. This is not true of every measure: algorithmic information content, for example, can be high for random sequences.

The measures and perspectives discussed in the reading include algorithmic information content, logical depth, thermodynamic depth, computational capacity, statistical complexity, fractal dimension, and complexity as a degree of hierarchy. They capture different properties, so choosing a measure requires specifying what “complex” means for the problem at hand.

*Source: Mitchell, Complexity: A Guided Tour, Chapter 7.*

### 8. Evolutionary search and the limits of human intuition

Through selection, variation, and recombination, genetic algorithms can discover effective solutions that a human designer might not have anticipated. Finding a successful solution and understanding why it works are separate achievements: strong performance does not automatically provide a transparent explanation.

*Source: the genetic algorithms discussion in Mitchell, Complexity: A Guided Tour.*

import {
  TerminalSquare,
  FunctionSquare,
  GitMerge,
  Cpu,
  BrainCircuit,
  Binary,
  Database,
  Zap,
} from "lucide-preact";

export const courses = {
  Math: [
    { name: "Algebra Fundamentals", icon: FunctionSquare },
    { name: "Geometry I", icon: GitMerge },
    { name: "Logic", icon: BrainCircuit },
    { name: "Probability", icon: Binary },
    { name: "Pre-Calculus", icon: FunctionSquare },
    { name: "Calculus in a Nutshell", icon: GitMerge },
  ],
  ComputerScience: [
    { name: "Thinking in Code", icon: Cpu },
    { name: "Programming with Variables", icon: TerminalSquare },
    { name: "Thinking in Python", icon: BrainCircuit },
    { name: "Programming with Functions", icon: FunctionSquare },
    { name: "Algorithmic Thinking", icon: GitMerge },
    { name: "Computer Science Fundamentals", icon: Binary },
  ],
  DataAnalysis: [
    { name: "Data Structures", icon: Database },
    { name: "Applied Probability", icon: Binary },
    { name: "Statistics Foundations", icon: BrainCircuit },
    { name: "Data Analytics I", icon: TerminalSquare },
    { name: "Machine Learning Basics", icon: Cpu },
    { name: "Neural Networks", icon: GitMerge },
  ],
  Science: [
    { name: "Scientific Thinking", icon: BrainCircuit },
    { name: "Physics of the Everyday", icon: Zap },
    { name: "Classical Mechanics", icon: GitMerge },
    { name: "Electricity and Magnetism", icon: Zap },
    { name: "Quantum Computing", icon: Cpu },
    { name: "Chemistry Fundamentals", icon: Binary },
  ],
};

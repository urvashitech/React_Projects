const questions = [
  {
    question: "Which of the following sorting algorithms has the best average-case time complexity?",
    options: ["Quick Sort", "Heap Sort", "Merge Sort", "Bubble Sort"],
    answer: "Merge Sort",
  },
  {
    question: "Given an array of size `n`, what is the time complexity of finding the maximum subarray sum using Kadane's Algorithm?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n)",
  },
  {
    question: "What is the worst-case time complexity of inserting an element in a Binary Search Tree (unbalanced)?",
    options: ["O(log n)", "O(n)", "O(n log n)", "O(1)"],
    answer: "O(n)",
  },
  {
    question: "Which data structure is used in **Kosaraju's algorithm** to find Strongly Connected Components?",
    options: ["Stack", "Queue", "Priority Queue", "Deque"],
    answer: "Stack",
  },
  {
    question: "How many rotations are required to balance an AVL Tree after inserting a node in the left-right subtree?",
    options: ["0", "1", "2", "Depends on node value"],
    answer: "2",
  },
  {
    question: "Which of the following problems can be solved using a greedy algorithm?",
    options: ["Knapsack Problem (0/1)", "Minimum Spanning Tree", "Longest Increasing Subsequence", "Matrix Chain Multiplication"],
    answer: "Minimum Spanning Tree",
  },
  {
    question: "In a **trie** (prefix tree), what is the time complexity to search for a word of length `m`?",
    options: ["O(n)", "O(m)", "O(log m)", "O(m log n)"],
    answer: "O(m)",
  },
  {
    question: "Which traversal is used to **convert a binary tree into a binary search tree** while maintaining the original structure?",
    options: ["Preorder", "Postorder", "Inorder", "Level Order"],
    answer: "Inorder",
  },
  {
    question: "If a graph has `V` vertices and `E` edges, what is the time complexity of running **DFS**?",
    options: ["O(V)", "O(V + E)", "O(E log V)", "O(V^2)"],
    answer: "O(V + E)",
  },
  {
    question: "Which algorithm is used to detect **negative weight cycles** in a graph?",
    options: ["Dijkstra's Algorithm", "Floyd Warshall", "Prim's Algorithm", "Kruskal's Algorithm"],
    answer: "Floyd Warshall",
  }
];

export default questions;
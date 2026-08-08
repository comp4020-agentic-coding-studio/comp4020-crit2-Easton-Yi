export interface FaqEntry {
  question: string;
  answer: string;
}

// Grounded in docs/PROJECT_BRIEF.md §6 and §7 Page 3.
export const START_HERE_FAQ: FaqEntry[] = [
  {
    question: "Do I need a telescope?",
    answer:
      "No. Owning a telescope isn't a condition of taking part — curiosity is enough to begin.",
  },
  {
    question: "Do I need astronomy experience?",
    answer: "No. CAS welcomes beginners as well as experienced astronomers.",
  },
  {
    question: "Can I attend before joining?",
    answer:
      "Yes. Prospective members can attend up to two meetings before deciding whether to join.",
  },
  {
    question: "Where are meetings held?",
    answer:
      "CAS's monthly meetings are associated with Mt Stromlo. Confirm the venue and access details for a specific date through the official calendar.",
  },
  {
    question: "Where do I confirm the current date?",
    answer: "The official CAS calendar is the source to check before you go.",
  },
];

const spring = { type: "spring" };

export const fadeIn = {
  initial: { opacity: 0, y: 30, scale: 1.2 },
  animate: { opacity: 1, y: 0, scale: 1 },
};

export const buttons = {
  initial: { opacity: 0, y: 30, scale: 1.2 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", delay: 0.8 },
  },
};

export const publicLunchStagger = {
  initial: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

export const publicLunchChild = {
  animate: { opacity: 1, y: 0, transition: { spring } },
  inital: { opacity: 0, y: -100 },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true }
};

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true }
};

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true }
};

export const fadeInScale = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

export const orbitAnimation = (duration, reverse = false) => ({
  animate: { rotate: reverse ? -360 : 360 },
  transition: {
    duration,
    repeat: Infinity,
    ease: "linear"
  }
});

export const pulseAnimation = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
  }
};

export const particleAnimation = () => ({
  initial: {
    x: Math.random() * 400 - 200,
    y: Math.random() * 400 - 200,
  },
  animate: {
    x: Math.random() * 400 - 200,
    y: Math.random() * 400 - 200,
  },
  transition: {
    duration: 3 + Math.random() * 2,
    repeat: Infinity,
    repeatType: "reverse",
  }
});
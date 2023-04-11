const getXAnimation = (direction: string) => {
  switch (direction) {
    case "left":
      return 100;
    case "right":
      return -100;
    default:
      return 0;
  }
};

const getYAnimation = (direction: string) => {
  switch (direction) {
    case "up":
      return 100;
    case "down":
      return -100;
    default:
      return 0;
  }
};

const getAnimationProps = (delay: number) => {
  return {
    duration: 1.2,
    delay,
    ease: [0.25, 0.25, 0.25, 0.75],
  };
};

export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      x: getXAnimation(direction),
      y: getYAnimation(direction),
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        ...getAnimationProps(delay),
      },
    },
  };
};

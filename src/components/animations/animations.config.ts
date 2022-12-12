type AnimationsProps = {
  [key: string]: {};
};

const ANIMATIONS: AnimationsProps = {
  underLine: {
    initial: {
      width: 0,
    },
    animate: {
      width: '100%',
    },
    exit: {
      width: 0,
    },
    transition: {
      duration: 0.5,
    },
  },
};

export default ANIMATIONS;

import hmm from "../images/AAPLresults_plot.png";

type ProjectsType = {
  title: string;
  description: string;
  skills: string[];
  image: string;
  links: Record<"github", string>;
};

export default [
  {
    title: "Stock Market Predictor",
    description:
      "First coding project. For now an entirely backend project that trains a Hidden Markov Model on publicly available stock market data and will predict future stock prices for X amount of days. Predictions have a Mean Absolute Percentage error of 1.2%. Well tested with small, medium and large tests.",
    skills: [
      "Python",
      "Hidden Markov Models",
      "Machine Learning",
      "Docker",
      "Pytest",
    ],
    image: hmm,
    links: {
      github: "https://github.com/Jays-code-collection/HMMs_Stock_Market",
    },
  },
] as ProjectsType[];

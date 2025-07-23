export type Answer = {
  title: string;
  description: string;
};
export type Quiz = {
  type: "rate" | "base";
  question: string;
  answers: (string | Answer)[];
};

const quizes: Quiz[] = [
  {
    question: "Choose your main goal",
    type: "base",
    answers: [
      "Improve Erectile Function",
      "Improve Ejaculation Control",
      {
        title: "Maximize Sexual Wellness",
        description: "(Improve both of the above)",
      },
    ],
  },
  {
    type: "base",
    question: "Which one best describes your problem?",
    answers: [
      "Difficulty maintaining erection ",
      "Difficulty achieving erection ",
      "Both",
      "I don`t want to answer",
    ],
  },
  {
    type: "base",
    question: "How often do you experience problems with erection?",
    answers: [
      "Never",
      "Rarely",
      "Often",
      "All the time",
      "I don`t want to answer",
    ],
  },
  {
    type: "base",
    question: "How often do you experience problems with erection?",
    answers: [
      "Less than 1 year",
      "From 1 to 5 years",
      "From 5 to 10 years",
      "More than 10 years",
      "I don`t want to answer",
    ],
  },
  {
    type: "base",
    question: "How long have you been experiencing problems with erection?",
    answers: [
      "Yes,but I must try hard",
      "No,I can`t",
      "I don`t want to answer",
    ],
  },
  {
    type: "base",
    question: "Can you have sex 2 times in a row?",
    answers: [
      "Never",
      "Rarely",
      "Often",
      "All the time",
      "I don`t want to answer",
    ],
  },
  {
    type: "rate",
    question: "How hard is your erection during masturbation?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "rate",
    question: "How hard is your erection during sex?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "rate",
    question: "How satisfied are you with your sex life in the last 3 months?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "rate",
    question: "How much do you worry about having problem with erection?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "rate",
    question:
      "How much do erection problems affect the relationship with your partner?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "base",
    question: "Does your self-esteem suffer from problems with erection?",
    answers: ["Yes,it does", "No, it doesn`t", "I don`t want to answer"],
  },
  {
    type: "base",
    question: "How long does your sex typically last?",
    answers: [
      "Less than 2 minutes",
      "2-7 minutes",
      "7-15 minutes",
      "15 or more minutes",
    ],
  },
  {
    type: "base",
    question: "How often do you ejaculate earlier than you'd like?",
    answers: [
      "Never",
      "Rarely",
      "Often",
      "All the time",
      "I don`t want to answer",
    ],
  },
  {
    type: "base",
    question: "Do you want to improve ejaculation control?",
    answers: ["Yes,I`d like to", "No,I don`t want to"],
  },
  {
    type: "rate",
    question:
      "How would you rate your libido (sex drive) in the last 3 months?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "base",
    question: "Do you take any pills to improve erection?",
    answers: [
      "Yes, every time",
      "I take them sometimes",
      "No, I dont`t",
      "I don`t want to answer",
    ],
  },
  {
    type: "base",
    question: "How often do you drink alcohol?",
    answers: [
      "Every day",
      "Several times a week",
      "Once a week",
      "Once a month",
      "I don`t drink t all",
    ],
  },
  {
    type: "base",
    question: "Do you smoke?",
    answers: ["Yes, I do", "No, I don`t", "Sometimes"],
  },
  {
    type: "rate",
    question: "How healthy is your diet?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "rate",
    question: "What's your level of physical activity?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "rate",
    question: "How would you rate your daily stress level?",
    answers: ["1", "2", "3", "4", "5"],
  },
];

export default quizes;

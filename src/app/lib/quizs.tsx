import BaseCanGoals from "../ui/PersonalComponent/BaseCanGoals";
import BaseCanGoals2 from "../ui/PersonalComponent/BasedCanGoals2";
import BaseCanGoals3 from "../ui/PersonalComponent/BasedCanGoals3";
import BasedGoals from "../ui/PersonalComponent/BasedGoals";
import BasedGoals2 from "../ui/PersonalComponent/BasedGoals2";
import BasedGoals3 from "../ui/PersonalComponent/BasedGoals3";
import ControlEjaculation from "../ui/RedComponent/ControlEjaculation";
import EffectiveExercises from "../ui/RedComponent/EffectiveExercises";
import EffectiveExercises2 from "../ui/RedComponent/EffectiveExercises2";
import EffectiveExercises3 from "../ui/RedComponent/EffectiveExercises3";
import KegelPlan from "../ui/RedComponent/KegelPlan";
import MensImproved from "../ui/RedComponent/MensImproved";
import MensImproved2 from "../ui/RedComponent/MensImproved2";
import QualityErect from "../ui/RedComponent/QualityErect";
export type Answer = {
  title: string;
  description: string;
};

export type Quiz = {
  type: "rate" | "base" | "red" | "personal" | "healthy" | "lowhigh";
  question?: string;
  content?: React.ReactNode;
  answers?: (string | Answer)[];
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
    question: "How long have you been experiencing problems with erection?",
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
      "Yes, but I must try hard",
      "No, I can`t",
      "I don`t want to answer",
    ],
  },
  {
    type: "red",
    content: <QualityErect />,
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
  { type: "red", content: <EffectiveExercises /> },
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
    answers: ["Yes, it does", "No, it doesn`t", "I don`t want to answer"],
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
    type: "personal",
    content: <BasedGoals />,
  },
  {
    type: "base",
    question: "Do you want to improve ejaculation control?",
    answers: ["Yes, I`d like to", "No, I don`t want to"],
  },
  {
    type: "red",
    content: <MensImproved />,
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
    type: "red",
    content: <KegelPlan />,
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
    type: "healthy",
    question: "How healthy is your diet?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "personal",
    content: <BaseCanGoals />,
  },
  {
    type: "lowhigh",
    question: "What's your level of physical activity?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "lowhigh",
    question: "How would you rate your daily stress level?",
    answers: ["1", "2", "3", "4", "5"],
  },
];
export const quizes2: Quiz[] = [
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
    question: "How long do you want to last?",
    answers: [
      "7-15 minutes",
      "15-20 minutes",
      "20-25 minutes",
      "More than 25 minutes",
    ],
  },
  {
    type: "red",
    content: <ControlEjaculation />,
  },
  {
    type: "rate",
    question: "How hard is it for you to control your ejaculation during sex?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "rate",
    question:
      "How hard is it for you to control your ejaculation during masturbation?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "red",
    content: <EffectiveExercises2 />,
  },
  {
    type: "red",
    content: <MensImproved />,
  },
  {
    type: "rate",
    question: "How satisfied are you with your sex life in the last 3 months?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "rate",
    question:
      "How much do you worry about ejaculating earlier than you'd like?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "rate",
    question:
      "How much do problems with ejaculation control affect the relationship with your partner?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "base",
    question:
      "Does your self-esteem suffer from ejaculating earlier than you'd like?",
    answers: ["Yes, it does", "No, it doesn`t", "I don`t want to answer"],
  },
  {
    type: "personal",
    content: <BasedGoals2 />,
  },
  {
    type: "base",
    question: "How would you describe your Erectile function?",
    answers: [
      "Everything`s great",
      "Mostly fine, but sometimes I have problems",
      "I often have problems",
      "I don`t want to answer",
    ],
  },
  {
    type: "base",
    question:
      "How often do you experience difficulty getting an erection for sex?",
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
    question:
      "How often do you experience difficulty maintaining an erection during sex?",
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
    question: "Can you have sex 2 times in a row?",
    answers: [
      "Yes, without any problems",
      "Yes, but I must try hard",
      "No, I cant",
      "I don`t want to answer",
    ],
  },
  {
    type: "base",
    question: "Do you want to improve your erectile function?",
    answers: ["Yes, I`d like to", "No, I don`t want to"],
  },
  {
    type: "red",
    content: <MensImproved2 />,
  },
  {
    type: "rate",
    question:
      "How would you rate your libido (sex drive) in the last 3 months?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "base",
    question: "Do you take any pills for premature ejaculation?",
    answers: [
      "Yes, every time",
      "I take them sometimes",
      "No, I don`t",
      "I don`t want to answer",
    ],
  },
  {
    type: "red",
    content: <KegelPlan />,
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
    type: "healthy",
    question: "How healthy is your diet?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "personal",
    content: <BaseCanGoals2 />,
  },
  {
    type: "lowhigh",
    question: "What's your level of physical activity?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "lowhigh",
    question: "How would you rate your daily stress level?",
    answers: ["1", "2", "3", "4", "5"],
  },
];
export const quizes3: Quiz[] = [
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
    type: "rate",
    question:
      "How satisfied are you with your sexual wellness (erection quality & ejaculation control)?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "red",
    content: <ControlEjaculation />,
  },

  {
    type: "red",
    content: <QualityErect />,
  },
  {
    type: "base",
    question: "How long does your sex typically last?",
    answers: [
      "Less than 2 minutes",
      "2-7 minutes",
      "7-15 minutes",
      "15 minutes or more",
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
    question: "How long do you want to last?",
    answers: [
      "7-15 minutes",
      "15-20 minutes",
      "20-25 minutes",
      "More than 25 minutes",
    ],
  },
  {
    type: "red",
    content: <EffectiveExercises3 />,
  },
  {
    type: "red",
    content: <MensImproved />,
  },
  {
    type: "base",
    question: "How would you describe your Erectile function?",
    answers: [
      "Everything`s great",
      "Mostly fine, but sometimes I have problems",
      "I often have problems",
      "I don`t want to answer",
    ],
  },
  {
    type: "base",
    question:
      "How often do you experience difficulty getting an erection for sex?",
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
    question:
      "How often do you experience difficulty maintaining an erection during sex?",
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
    question: "Can you have sex 2 times in a row?",
    answers: [
      "Yes, without any problems",
      "Yes, but I must try hard",
      "No, I can`t",
      "I don`t want to answer",
    ],
  },
  {
    type: "red",
    content: <MensImproved2 />,
  },
  {
    type: "rate",
    question: "How satisfied are you with your sex life in the last 3 months?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "base",
    question: "Do you have a regular sexual partner?",
    answers: [
      "Yes, I do",
      "I have a parther, but not regular",
      "No, I don`t",
      "I don`t want to answer",
    ],
  },
  {
    type: "base",
    question: "How often do you have sex?",
    answers: [
      "Every day",
      "Several times a week",
      "Once a week",
      "Once a month",
      "I don`t want to answer",
    ],
  },
  {
    type: "personal",
    content: <BasedGoals3 />,
  },
  {
    type: "rate",
    question:
      "How would you rate your libido (sex drive) in the last 3 months?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "base",
    question: "Do you take any pills for premature ejaculation?",
    answers: [
      "Yes, every time",
      "I take them sometimes",
      "No, I don`t",
      "I don`t want to answer",
    ],
  },
  {
    type: "red",
    content: <KegelPlan />,
  },
  {
    type: "base",
    question: "How often do you drink alcohol?",
    answers: [
      "Every day",
      "Several times a week",
      "Once a week",
      "Once a month",
      "I don`t drink it all",
    ],
  },

  {
    type: "base",
    question: "Do you smoke?",
    answers: ["Yes, I do", "No, I don`t", "Sometimes"],
  },

  {
    type: "healthy",
    question: "How healthy is your diet?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "personal",
    content: <BaseCanGoals3 />,
  },
  {
    type: "lowhigh",
    question: "What's your level of physical activity?",
    answers: ["1", "2", "3", "4", "5"],
  },
  {
    type: "lowhigh",
    question: "How would you rate your daily stress level?",
    answers: ["1", "2", "3", "4", "5"],
  },
];
export default quizes;

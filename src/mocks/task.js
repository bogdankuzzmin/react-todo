import {nanoid} from "nanoid";
import {getRandomElement, getRandomInteger} from "../utils/common";

const Labels = [
  `Drink Coffeee`,
  `Build Awesome App`,
  `Write a new post`,
  `Go to the gym`,
  `Read on Harry Potter`,
  `Clean emails`
];

export const generateList = () => {
  return {
    label: getRandomElement(Labels),
    important: getRandomInteger(),
    id: nanoid(3),
  }
};
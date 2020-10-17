import {nanoid} from "nanoid";
import {getRandomElement, getRandomInteger} from "../utils/common";

const Labels = [
  `Drink Coffeee`,
  `Build Awesome App`,
  `Write a new post`,
  `Go to the gym`,
  `Read on Harry Potter`,
  `Clean emails`,
  `Aloha, Stitch!`,
];

export const generateList = () => {
  return {
    label: getRandomElement(Labels),
    important: Boolean(getRandomInteger(0, 1)),
    done: Boolean(getRandomInteger(0, 1)),
    id: nanoid(3),
  }
};
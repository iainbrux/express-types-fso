import { NewDiaryEntry } from "../src/types";

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {

  };
  return newEntry;
};

const parseComment = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error('Incorrect or missing comment');
  }
  return comment;
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

export default toNewDiaryEntry;
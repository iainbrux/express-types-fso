import diaries from '../../data/diaries';
import { DiaryEntry, NonSensitiveDiaryEntry, NewDiaryEntry } from '../types';

const getEntries = (): Array<DiaryEntry> => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility
  }));
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map(diary => diary.id)) + 1,
    ...entry
  };

  diaries.push(newDiaryEntry);
  return newDiaryEntry;
};

const addEntry = () => {
  return null;
};

const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(diary => diary.id === id);
  return entry;
};

export default {
  getEntries,
  addEntry,
  findById,
  addDiary,
  getNonSensitiveEntries
};
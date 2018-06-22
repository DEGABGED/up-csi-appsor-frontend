import Iterator from './Iterator';

const pagesIterator = new Iterator([
  'Home',
  'BasicInfo',
  'SkillsInterests',
  'Affiliations',
  'Committee',
]);

const pages = pagesIterator[Symbol.iterator]();

export default pages;

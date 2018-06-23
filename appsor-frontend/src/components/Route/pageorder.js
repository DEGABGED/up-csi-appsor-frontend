import Iterator from '../../utils/Iterator';

const pagesIterator = new Iterator([
  'Home',
  'BasicInfo',
  'SkillsInterests',
  'Affiliations',
  'Committee',
  'Result',
]);

const pages = pagesIterator[Symbol.iterator]();

export default pages;

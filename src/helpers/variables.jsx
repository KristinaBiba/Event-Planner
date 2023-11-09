import i18next from '../i18n';

export const priority = [
  { id: 'High', name: i18next.t('Priority.High')},
  { id: 'Medium', name: i18next.t('Priority.Medium')},
  { id: 'Low', name: i18next.t('Priority.Low')},
];

export const category = [
  { id: 'Art', name: i18next.t('category.Art') },
  { id: 'Music', name: i18next.t('category.Music')},
  { id: 'Business', name: i18next.t('category.Business')},
  { id: 'Conference', name: i18next.t('category.Conference')},
  { id: 'Workshop', name: i18next.t('category.Workshop')},
  { id: 'Party', name: i18next.t('category.Party')},
  { id: 'Sport', name: i18next.t('category.Sport')},
];

export const sortList = [
  { id: 'sortByNameUp', name: i18next.t('sortBy.byName'), up: true },
  { id: 'sortByNameDown', name: i18next.t('sortBy.byName'), up: false },
  { id: 'sortByDateUp', name: i18next.t('sortBy.byDate'), up: true },
  { id: 'sortByDateDown', name: i18next.t('sortBy.byDate'), up: false },
  { id: 'sortByPriorityUp', name: i18next.t('sortBy.byPriority'), up: true },
  { id: 'sortByPriorityDown', name: i18next.t('sortBy.byPriority'), up: false },
];

export const languages = [
  { id: 'EN', name: "EN"},
  { id: 'UA', name: "UA"},
];


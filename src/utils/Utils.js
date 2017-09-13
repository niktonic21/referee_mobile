export const createRefereeName = (referee) => {
  return typeof (referee) === 'object' ?
  referee.meno.substring(0, 1) + '. ' + referee.priezvisko : ' '
};

export const parseDate = (date) => {
  const dataArray = date.split('.');
  return ({ day: dataArray[0], month: dataArray[1], year: dataArray[2] });
};

export const numberToMonth = (num) => {
  switch (num) {
    case 1: return 'január';
    case 2: return 'február';
    case 3: return 'marec';
    case 4: return 'apríl';
    case 5: return 'máj';
    case 6: return 'jún';
    case 7: return 'júl';
    case 8: return 'august';
    case 9: return 'september';
    case 10: return 'október';
    case 11: return 'november';
    case 12: return 'december';
    default: return '';
  }
};

export const convertArrayToMap = (array, category) => {
  const categoryMap = {};
  const sections = [];// Create the blank map
  array.forEach(item => {
    if (!categoryMap[item[category]]) {
      sections.push(item[category]);
      categoryMap[item[category]] = [];
    }
    item.key = item.cislo;
    categoryMap[item[category]].push(item);
  });

const result = sections.map((sec, index) => {
    const sekcia = {};
    sekcia.title = sec;
    sekcia.data = categoryMap[sec];
    sekcia.key = String(index);
    return sekcia;
  });
  return result;
};

export const getSections = (data) => {
  return (
      data.map(item => {
      const sectionItem = { label: item.title, value: item.title };
      return sectionItem;
    })
  );
};

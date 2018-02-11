export const createRefereeName = referee => {
    return typeof referee === 'object' && referee.priezvisko && referee.meno
        ? referee.priezvisko + ' ' + referee.meno.substring(0, 1) + '. '
        : referee;
};

export const parseDate = date => {
    const dataArray = date.split('-');
    return { year: dataArray[0], month: dataArray[1], day: dataArray[2] };
};

export const numberToMonth2 = num => {
    switch (num) {
        case 1:
            return 'Január';
        case 2:
            return 'Február';
        case 3:
            return 'Marec';
        case 4:
            return 'Apríl';
        case 5:
            return 'Máj';
        case 6:
            return 'Jún';
        case 7:
            return 'Júl';
        case 8:
            return 'August';
        case 9:
            return 'September';
        case 10:
            return 'Október';
        case 11:
            return 'November';
        case 12:
            return 'December';
        default:
            return 'Neznáme';
    }
};

export const monthToNumber = str => {
    switch (str) {
        case 'Január':
            return 1;
        case 'Február':
            return 2;
        case 'Marec':
            return 3;
        case 'Apríl':
            return 4;
        case 'Máj':
            return 5;
        case 'Jún':
            return 6;
        case 'Júl':
            return 7;
        case 'August':
            return 8;
        case 'September':
            return 9;
        case 'Október':
            return 10;
        case 'November':
            return 11;
        case 'December':
            return 12;
        default:
            return 0;
    }
};

export const numberToMonth = num => {
    switch (num) {
        case 1:
            return 'jan.';
        case 2:
            return 'feb.';
        case 3:
            return 'mar.';
        case 4:
            return 'apr.';
        case 5:
            return 'máj';
        case 6:
            return 'jún';
        case 7:
            return 'júl';
        case 8:
            return 'aug.';
        case 9:
            return 'sep.';
        case 10:
            return 'okt.';
        case 11:
            return 'nov.';
        case 12:
            return 'dec.';
        default:
            return '';
    }
};

export const ligueToLig = str => {
    if (str === 'Liga') return 'Liga';
    if (str === 'Extraliga seniorov') return 'EXS';
    if (str === '1. Liga seniorov') return '1.LS';
    if (str === 'Extraliga juniorov') return 'EXJ';
    if (str === 'Extraliga dorastu') return 'EXD';
    if (str === '1. Liga juniorov') return '1.LJ';
    if (str === '1. Liga dorastu') return '1.LD';
    if (str === 'Kadeti') return 'Kadeti';
    if (str === '2. Liga seniorov') return '2.LS';
    if (str === 'Extraliga žien') return 'EXZ';
    if (str === 'Prípravné SVK') return 'Príp. SVK';
    if (str === 'Prípravné IIHF') return 'Príp. IIHF';
    if (str === 'Turnaje repre') return 'Turnaje';
    return 'Ostatné';
};

export const numberToLigue = num => {
    if (num > 0 && num < 500) return 'Extraliga seniorov';
    if (num > 500 && num < 1000) return '1. Liga seniorov';
    if (num > 1000 && num < 2000) return 'Extraliga juniorov';
    if (num > 2000 && num < 3000) return 'Extraliga dorastu';
    if (num > 3000 && num < 4000) return '1. Liga juniorov';
    if (num > 4000 && num < 9000) return '1. Liga dorastu';
    if (num > 9000 && num < 10000) return 'Kadeti';
    if (num > 10000 && num < 11000) return '2. Liga seniorov';
    if (num > 15000 && num < 16000) return 'Extraliga žien';
    if (num > 30000 && num < 31000) return 'Prípravné SVK';
    if (num > 40000 && num < 41000) return 'Prípravné IIHF';
    if (num > 50000 && num < 51000) return 'Turnaje repre';
    return 'Ostatné';
};

export const dividedIntoSections = list => {
    const categoryMap = [];
    const sections = ['Liga']; // Create the blank map
    const months = ['Mesiac'];
    Object.keys(list).forEach(key => {
        const item = list[key];
        const category = numberToLigue(parseInt(key, 10));
        const month = numberToMonth2(parseInt(parseDate(item.datum).month, 10));

        if (!months.includes(month)) {
            months.push(month);
        }

        if (!categoryMap[category]) {
            sections.push(category);
            // Create an entry in the map for the category if it hasn't yet been created
            categoryMap[category] = [];
        }

        categoryMap[category].push(item);
    });

    const result = sections.map(sec => {
        const section = {};
        section.title = sec;
        section.data = categoryMap[sec];

        return section;
    });
    return [result, sections, months];
};

export const filterDataForRender = (data, filter, refs) => {
    let result = [];
    let resultLiga = null;
    let resultMesiac = null;
    let resultRozhodca = null;
    const filt = Object.values(filter);
    const filterDefault = ['Liga', 'Mesiac', 'Rozhodca'];

    if (filt[2] === filterDefault[2]) {
        resultRozhodca = data;
    } else {
        resultRozhodca = filterRozhodca(data, filt[2], refs);
    }
    if (filt[0] === filterDefault[0]) {
        resultLiga = resultRozhodca;
    } else {
        resultLiga = filterLigue(resultRozhodca, filt[0]);
    }
    if (filt[1] === filterDefault[1]) {
        resultMesiac = resultLiga;
    } else {
        resultMesiac = filterMonth(resultLiga, filt[1]);
    }

    resultMesiac.forEach(sec => {
        const a = {};
        a.title = sec.title;
        a.data = sec.data.sort((item1, item2) => new Date(item2.datum) - new Date(item1.datum));
        if (a.data.length > 0) {
            result.push(a);
        }
    });

    return result;
};

export const filterLigue = (data, liga) => {
    return data.filter(item => item.title === liga).reverse();
};

export const filterMonth = (data, mesiac) => {
    const numMonth = monthToNumber(mesiac);
    const result = [];
    data.forEach(sec => {
        const a = {};
        a.title = sec.title;
        a.data = sec.data.filter(item => parseInt(parseDate(item.datum).month, 10) === numMonth);
        if (a.data.length > 0) {
            result.push(a);
        }
    });
    return result;
};

let i = 0;
export const filterRozhodca = (data, roz, refs) => {
    const result = [];
    let ref = null;
    let BreakException = {};
    let matchIds = [];
    try {
        Object.entries(refs).forEach(([key, value]) => {
            if (roz === key) {
                ref = value;
                throw BreakException;
            }
        });
    } catch (e) {
        if (e !== BreakException) throw e;
    }

    Object.entries(ref.zapasy).forEach(([key, value]) => {
        Object.entries(value).forEach(([keys]) => {
            matchIds.push(keys);
        });
    });

    i = 0;
    data.forEach(sec => {
        const a = {};
        a.title = sec.title;
        a.data = sec.data.filter(item => filterByNumberOfMatch(item, matchIds));
        if (a.data.length > 0) {
            result.push(a);
        }
    });

    return result;
};

export const filterByNumberOfMatch = (item, matchIds) => {
    if (matchIds[i] && matchIds[i] === item.cislo) {
        i++;
        return true;
    }
    return false;
};

export const convertArrayToMap = (array, category) => {
    const categoryMap = {};
    const sections = []; // Create the blank map
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

export const getSections = data => {
    return data.map(item => {
        const sectionItem = { label: item.title, value: item.title };
        return sectionItem;
    });
};

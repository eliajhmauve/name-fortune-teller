import { getKangxiStrokes } from '@/data/kangxi-strokes';
import { getFortuneEntry, getFortuneScore, type FortuneEntry } from '@/data/fortune-table';

export interface GridResult {
  name: string;
  strokes: number;
  fortune: FortuneEntry;
  score: number;
}

export interface NameAnalysis {
  characters: { char: string; strokes: number }[];
  grids: {
    heaven: GridResult;  // 天格
    person: GridResult;  // 人格
    earth: GridResult;   // 地格
    outer: GridResult;   // 外格
    total: GridResult;   // 總格
  };
  overallScore: number;
  keywords: string[];
  summary: string;
}

function makeGrid(name: string, strokes: number): GridResult {
  const fortune = getFortuneEntry(strokes);
  return { name, strokes, fortune, score: getFortuneScore(fortune) };
}

export function analyzeName(name: string): NameAnalysis {
  const chars = name.split('');
  const strokes = chars.map(c => ({ char: c, strokes: getKangxiStrokes(c) }));

  let heaven: number, person: number, earth: number, total: number, outer: number;

  if (chars.length === 2) {
    // 單姓單名
    heaven = strokes[0].strokes + 1;
    person = strokes[0].strokes + strokes[1].strokes;
    earth = strokes[1].strokes + 1;
    total = strokes[0].strokes + strokes[1].strokes;
    outer = heaven + earth - person;
  } else if (chars.length === 3) {
    // 單姓雙名
    heaven = strokes[0].strokes + 1;
    person = strokes[0].strokes + strokes[1].strokes;
    earth = strokes[1].strokes + strokes[2].strokes;
    total = strokes[0].strokes + strokes[1].strokes + strokes[2].strokes;
    outer = total - person + 1;
  } else {
    // 複姓雙名 (4字)
    heaven = strokes[0].strokes + strokes[1].strokes;
    person = strokes[1].strokes + strokes[2].strokes;
    earth = strokes[2].strokes + strokes[3].strokes;
    total = strokes.reduce((s, c) => s + c.strokes, 0);
    outer = total - person + 1;
  }

  // Ensure outer is positive
  if (outer <= 0) outer = 1;

  const grids = {
    heaven: makeGrid('天格', heaven),
    person: makeGrid('人格', person),
    earth: makeGrid('地格', earth),
    outer: makeGrid('外格', outer),
    total: makeGrid('總格', total),
  };

  // Overall score: weighted average
  const overallScore = Math.round(
    grids.heaven.score * 0.1 +
    grids.person.score * 0.3 +
    grids.earth.score * 0.25 +
    grids.total.score * 0.25 +
    grids.outer.score * 0.1
  );

  // Collect keywords from top grids
  const allKeywords = [
    ...grids.person.fortune.keywords,
    ...grids.earth.fortune.keywords,
    ...grids.total.fortune.keywords,
  ];
  const uniqueKeywords = [...new Set(allKeywords)].slice(0, 3);

  // Generate summary
  const summary = generateSummary(name, grids, overallScore, uniqueKeywords);

  return { characters: strokes, grids, overallScore, keywords: uniqueKeywords, summary };
}

function generateSummary(
  name: string,
  grids: NameAnalysis['grids'],
  score: number,
  keywords: string[]
): string {
  const personLevel = grids.person.fortune.level;
  const earthLevel = grids.earth.fortune.level;
  const totalLevel = grids.total.fortune.level;

  let opening = '';
  if (score >= 85) {
    opening = `「${name}」這個名字氣場強大，蘊含著極佳的運勢能量。`;
  } else if (score >= 70) {
    opening = `「${name}」這個名字整體運勢良好，帶有穩健的發展潛力。`;
  } else if (score >= 55) {
    opening = `「${name}」這個名字運勢中等偏上，有發展空間但也需要注意一些方面。`;
  } else {
    opening = `「${name}」這個名字雖然在傳統數理上有需要留意之處，但名字只是人生的一個參考。`;
  }

  let personDesc = '';
  if (personLevel === 'great' || personLevel === 'good') {
    personDesc = `人格數理顯示您天生具有${keywords[0] || '堅毅'}的特質，在事業與人際關係上容易獲得好的發展。`;
  } else {
    personDesc = `人格數理提醒您在處事上宜多一分沉穩，善用您與生俱來的${keywords[0] || '智慧'}，必能化挑戰為機遇。`;
  }

  let earthDesc = '';
  if (earthLevel === 'great' || earthLevel === 'good') {
    earthDesc = '中年後運勢尤為亨通，適合穩紮穩打地累積實力。';
  } else {
    earthDesc = '人生的後半段需要更多的規劃與準備，提早佈局將事半功倍。';
  }

  let closing = '';
  if (totalLevel === 'great') {
    closing = '總體而言，這是一個蘊含福氣與才華的好名字！';
  } else if (totalLevel === 'good' || totalLevel === 'half') {
    closing = '總體而言，這個名字帶有獨特的能量，善加發揮必有所成。';
  } else {
    closing = '記住，命運掌握在自己手中，名字是起點而非終點，積極進取方為上策。';
  }

  return `${opening}${personDesc}${earthDesc}${closing}`;
}

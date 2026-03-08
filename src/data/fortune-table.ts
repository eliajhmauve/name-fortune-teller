// 81 數理吉凶對照表
// level: 'great' = 大吉, 'good' = 吉, 'half' = 半吉, 'bad' = 凶

export interface FortuneEntry {
  number: number;
  level: 'great' | 'good' | 'half' | 'bad';
  name: string;
  description: string;
  keywords: string[];
}

export const fortuneTable: FortuneEntry[] = [
  { number: 1, level: 'great', name: '太極之數', description: '萬物開泰，最大吉祥，天地開創之象', keywords: ['開創', '領導', '元始'] },
  { number: 2, level: 'bad', name: '兩儀之數', description: '混沌未定，進退保守，志望難達', keywords: ['猶豫', '等待', '蓄力'] },
  { number: 3, level: 'great', name: '三才之數', description: '進取如意，增長繁榮，名利雙收', keywords: ['繁榮', '進取', '昌盛'] },
  { number: 4, level: 'bad', name: '四象之數', description: '萬事休止，進退不安，破壞滅裂', keywords: ['轉變', '沉思', '蓄勢'] },
  { number: 5, level: 'great', name: '五行之數', description: '福祿長壽，陰陽和合，完壁之象', keywords: ['和合', '圓滿', '長壽'] },
  { number: 6, level: 'great', name: '六爻之數', description: '天德地祥，安穩吉慶，家門餘慶', keywords: ['穩重', '吉慶', '福澤'] },
  { number: 7, level: 'good', name: '七政之數', description: '精悍剛毅，獨立權威，心堅志強', keywords: ['剛毅', '獨立', '堅定'] },
  { number: 8, level: 'good', name: '八卦之數', description: '意志堅定，富於進取，努力發展', keywords: ['堅定', '進取', '發展'] },
  { number: 9, level: 'bad', name: '九宮之數', description: '大成之數但含凶險，需謹慎行事', keywords: ['警覺', '謹慎', '智慧'] },
  { number: 10, level: 'bad', name: '歸零之數', description: '萬事終局，充滿損耗，暗示再起', keywords: ['重生', '覺悟', '轉機'] },
  { number: 11, level: 'great', name: '旱苗逢雨', description: '萬物更新，調順發達，富貴榮達', keywords: ['更新', '發達', '富貴'] },
  { number: 12, level: 'bad', name: '掘井無泉', description: '意志薄弱，辛苦無功，需堅持突破', keywords: ['堅持', '努力', '突破'] },
  { number: 13, level: 'great', name: '春日牡丹', description: '才藝多能，智謀奇略，博學多聞', keywords: ['才華', '智慧', '博學'] },
  { number: 14, level: 'bad', name: '破兆之數', description: '家庭緣薄，浮沉不安，需修身養性', keywords: ['修養', '內省', '成長'] },
  { number: 15, level: 'great', name: '福壽之數', description: '福壽圓滿，慈祥有德，受人敬仰', keywords: ['福壽', '慈祥', '敬仰'] },
  { number: 16, level: 'great', name: '厚重之數', description: '貴人相助，德望高大，成就非凡', keywords: ['厚德', '貴人', '成就'] },
  { number: 17, level: 'half', name: '剛強之數', description: '權威剛強，突破萬難，但過剛易折', keywords: ['權威', '突破', '力量'] },
  { number: 18, level: 'great', name: '鐵鏡重磨', description: '有志竟成，內外有運，經營得利', keywords: ['毅力', '成功', '經營'] },
  { number: 19, level: 'bad', name: '多難之數', description: '風雲蔽日，需靠智慧化險為夷', keywords: ['智慧', '靈感', '偏財'] },
  { number: 20, level: 'bad', name: '屋下藏金', description: '非業破運，百事不順，需待時而動', keywords: ['耐心', '等待', '積蓄'] },
  { number: 21, level: 'great', name: '明月中天', description: '光風霽月，獨立權威，名利雙收', keywords: ['領導', '獨立', '光明'] },
  { number: 22, level: 'bad', name: '秋草逢霜', description: '百事不如意，志望半途而廢', keywords: ['韌性', '轉化', '學習'] },
  { number: 23, level: 'great', name: '壯麗之數', description: '旭日東升，壯麗豪爽，權威旺盛', keywords: ['壯麗', '旺盛', '權威'] },
  { number: 24, level: 'great', name: '掘藏得金', description: '家門餘慶，金錢豐盈，白手成家', keywords: ['財富', '白手起家', '豐盈'] },
  { number: 25, level: 'half', name: '英俊之數', description: '資性英敏，才能奇特，性格偏僻', keywords: ['英敏', '才能', '獨特'] },
  { number: 26, level: 'bad', name: '變怪之數', description: '變幻無窮，英雄豪傑，波瀾重疊', keywords: ['變通', '冒險', '格局'] },
  { number: 27, level: 'half', name: '增長之數', description: '慾望過大，自我強烈，多受批評', keywords: ['自信', '衝勁', '個性'] },
  { number: 28, level: 'bad', name: '闊水浮萍', description: '豪傑氣概，但遭難受苦，需以柔克剛', keywords: ['豪氣', '堅韌', '轉化'] },
  { number: 29, level: 'great', name: '智謀之數', description: '財力歸集，名聞海內，成就大業', keywords: ['智謀', '名望', '大業'] },
  { number: 30, level: 'half', name: '非運之數', description: '沉浮不定，吉凶難分，大起大落', keywords: ['冒險', '刺激', '起伏'] },
  { number: 31, level: 'great', name: '春日花開', description: '智勇得志，名利雙收，統領眾人', keywords: ['統領', '智勇', '人望'] },
  { number: 32, level: 'great', name: '寶馬金鞍', description: '僥倖多望，貴人得助，財帛如裕', keywords: ['幸運', '貴人', '財帛'] },
  { number: 33, level: 'great', name: '旭日昇天', description: '家門隆昌，才德兼備，威望崇高', keywords: ['隆昌', '才德', '崇高'] },
  { number: 34, level: 'bad', name: '破家之數', description: '災難連連，進退維谷，需以靜制動', keywords: ['沉穩', '靜觀', '智慧'] },
  { number: 35, level: 'good', name: '高樓望月', description: '溫和平靜，智達通暢，文昌技藝', keywords: ['文藝', '溫和', '才華'] },
  { number: 36, level: 'bad', name: '波瀾之數', description: '風浪不息，俠義薄運，需穩中求勝', keywords: ['俠義', '勇氣', '堅持'] },
  { number: 37, level: 'great', name: '猛虎出林', description: '權威顯達，吉人天相，德望兼備', keywords: ['權威', '天相', '德望'] },
  { number: 38, level: 'half', name: '磨鐵成針', description: '意志薄弱，刻意經營，才識不凡', keywords: ['才識', '經營', '堅持'] },
  { number: 39, level: 'great', name: '富貴之數', description: '富貴榮華，財帛豐盈，暗藏險象', keywords: ['富貴', '榮華', '警覺'] },
  { number: 40, level: 'bad', name: '退安之數', description: '智謀膽力，冒險投機，沉浮不定', keywords: ['謀略', '膽識', '沉穩'] },
  { number: 41, level: 'great', name: '有德之數', description: '純陽獨秀，德高望重，名利雙收', keywords: ['德高', '獨秀', '名利'] },
  { number: 42, level: 'half', name: '寒蟬在柳', description: '博達多能，精通世情，內苦外甘', keywords: ['博學', '世情', '深沉'] },
  { number: 43, level: 'bad', name: '散財之數', description: '雨夜之花，外祥內苦，需善理財', keywords: ['理財', '內省', '節制'] },
  { number: 44, level: 'bad', name: '煩悶之數', description: '破家亡身，暗藏惡運，需多行善事', keywords: ['行善', '積德', '轉化'] },
  { number: 45, level: 'great', name: '順風之數', description: '新生泰和，順風揚帆，智謀經緯', keywords: ['順遂', '泰和', '經緯'] },
  { number: 46, level: 'bad', name: '浪裡淘金', description: '載寶沉舟，須防災禍，需穩健行事', keywords: ['穩健', '防範', '謹慎'] },
  { number: 47, level: 'great', name: '點石成金', description: '花開之象，萬事如意，祥瑞之運', keywords: ['如意', '祥瑞', '成功'] },
  { number: 48, level: 'great', name: '古松立鶴', description: '智謀兼備，德量榮達，威望大成', keywords: ['智謀', '德量', '威望'] },
  { number: 49, level: 'bad', name: '轉變之數', description: '吉凶難分，不進不退，需明辨方向', keywords: ['明辨', '方向', '抉擇'] },
  { number: 50, level: 'half', name: '小舟入海', description: '吉凶參半，需倍加努力', keywords: ['努力', '堅持', '進取'] },
  { number: 51, level: 'half', name: '沉浮之數', description: '盛衰交加，或成或敗，需審時度勢', keywords: ['審時', '度勢', '彈性'] },
  { number: 52, level: 'great', name: '達眼之數', description: '卓識達眼，先見之明，一躍成功', keywords: ['先見', '卓識', '成功'] },
  { number: 53, level: 'bad', name: '曲卷難星', description: '外祥內患，需以智慧化解', keywords: ['智慧', '化解', '內省'] },
  { number: 54, level: 'bad', name: '石上栽花', description: '多難之運，但有不屈之志', keywords: ['不屈', '毅力', '意志'] },
  { number: 55, level: 'half', name: '善惡之數', description: '善善從長，得意忘形，需戒驕戒躁', keywords: ['謙虛', '自律', '長遠'] },
  { number: 56, level: 'bad', name: '浪裡行舟', description: '歷盡艱辛，四周障礙，需堅忍前行', keywords: ['堅忍', '前行', '突破'] },
  { number: 57, level: 'good', name: '日照春松', description: '寒雪青松，夜雨過後見彩虹', keywords: ['堅韌', '重生', '光明'] },
  { number: 58, level: 'half', name: '晚行遇月', description: '沉浮多端，先苦後甜', keywords: ['先苦後甜', '堅持', '轉運'] },
  { number: 59, level: 'bad', name: '寒蟬悲風', description: '須防外患，需培養內在力量', keywords: ['內功', '修煉', '沉著'] },
  { number: 60, level: 'bad', name: '無謀之數', description: '黑暗無光，需尋找方向', keywords: ['探索', '方向', '信念'] },
  { number: 61, level: 'great', name: '牡丹芙蓉', description: '花開富貴，名利雙收', keywords: ['富貴', '名利', '花開'] },
  { number: 62, level: 'bad', name: '衰敗之數', description: '內外不和，需修身齊家', keywords: ['修身', '齊家', '和諧'] },
  { number: 63, level: 'great', name: '舟歸平海', description: '萬事亨通，吉祥如意', keywords: ['亨通', '吉祥', '如意'] },
  { number: 64, level: 'bad', name: '非命之數', description: '骨肉分離，需珍惜緣分', keywords: ['珍惜', '緣分', '感恩'] },
  { number: 65, level: 'great', name: '巨流歸海', description: '天長地久，家運隆昌', keywords: ['長久', '隆昌', '厚德'] },
  { number: 66, level: 'bad', name: '岩頭步馬', description: '內外不安，需沉著應對', keywords: ['沉著', '應對', '平和'] },
  { number: 67, level: 'great', name: '通達之數', description: '利路亨通，萬事順遂', keywords: ['亨通', '順遂', '通達'] },
  { number: 68, level: 'great', name: '順風吹帆', description: '興家立業，大有作為', keywords: ['興家', '立業', '作為'] },
  { number: 69, level: 'bad', name: '非業之數', description: '坐立不安，需培養定力', keywords: ['定力', '修養', '安穩'] },
  { number: 70, level: 'bad', name: '殘春逢雨', description: '家運衰退，需逆境求存', keywords: ['求存', '堅強', '適應'] },
  { number: 71, level: 'half', name: '石上金花', description: '毫無實力但有運氣，半吉半凶', keywords: ['運氣', '直覺', '靈性'] },
  { number: 72, level: 'bad', name: '勞苦之數', description: '先甘後苦，需未雨綢繆', keywords: ['未雨綢繆', '規劃', '儲備'] },
  { number: 73, level: 'half', name: '無勇之數', description: '盛衰交替，需把握時機', keywords: ['時機', '把握', '洞察'] },
  { number: 74, level: 'bad', name: '殘花經雨', description: '無用威儀，需腳踏實地', keywords: ['腳踏實地', '務實', '行動'] },
  { number: 75, level: 'bad', name: '守退之數', description: '進不如守，需知足常樂', keywords: ['知足', '常樂', '守成'] },
  { number: 76, level: 'bad', name: '離散之數', description: '傾覆離散，需安分守己', keywords: ['安分', '守己', '平靜'] },
  { number: 77, level: 'half', name: '半吉之數', description: '先吉後凶，需居安思危', keywords: ['居安思危', '警覺', '準備'] },
  { number: 78, level: 'bad', name: '晚苦之數', description: '先甘後苦，需及早規劃', keywords: ['規劃', '準備', '長遠'] },
  { number: 79, level: 'bad', name: '挽回之數', description: '終而復始，需耐心等待', keywords: ['耐心', '循環', '再起'] },
  { number: 80, level: 'bad', name: '遁藏之數', description: '退避三舍，需蓄勢待發', keywords: ['蓄勢', '待發', '隱忍'] },
  { number: 81, level: 'great', name: '萬物回春', description: '還元復始，富貴繁榮，天下大吉', keywords: ['回春', '富貴', '大吉'] },
];

export function getFortuneEntry(num: number): FortuneEntry {
  // Map to 1-81 range
  const mapped = num <= 0 ? 1 : num > 81 ? ((num - 1) % 81) + 1 : num;
  return fortuneTable[mapped - 1];
}

export function getFortuneScore(entry: FortuneEntry): number {
  switch (entry.level) {
    case 'great': return 95;
    case 'good': return 80;
    case 'half': return 60;
    case 'bad': return 40;
  }
}

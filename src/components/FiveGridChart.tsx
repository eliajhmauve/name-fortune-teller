import { motion } from 'framer-motion';
import type { GridResult } from '@/lib/name-analyzer';

interface FiveGridChartProps {
  grids: {
    heaven: GridResult;
    person: GridResult;
    earth: GridResult;
    outer: GridResult;
    total: GridResult;
  };
}

const fortuneLabel = (level: string) => {
  switch (level) {
    case 'great': return '大吉';
    case 'good': return '吉';
    case 'half': return '半吉';
    case 'bad': return '凶';
    default: return '';
  }
};

const fortuneColorClass = (level: string) => {
  switch (level) {
    case 'great': return 'text-fortune-great';
    case 'good': return 'text-fortune-good';
    case 'half': return 'text-fortune-half';
    case 'bad': return 'text-fortune-bad';
    default: return '';
  }
};

const fortuneBgClass = (level: string) => {
  switch (level) {
    case 'great': return 'bg-fortune-great/15 border-fortune-great/30';
    case 'good': return 'bg-fortune-good/15 border-fortune-good/30';
    case 'half': return 'bg-fortune-half/15 border-fortune-half/30';
    case 'bad': return 'bg-fortune-bad/15 border-fortune-bad/30';
    default: return '';
  }
};

const FiveGridChart = ({ grids }: FiveGridChartProps) => {
  const gridEntries = [
    { key: '天格', grid: grids.heaven, desc: '先天運' },
    { key: '人格', grid: grids.person, desc: '主運' },
    { key: '地格', grid: grids.earth, desc: '前運' },
    { key: '外格', grid: grids.outer, desc: '副運' },
    { key: '總格', grid: grids.total, desc: '後運' },
  ];

  return (
    <div className="grid grid-cols-1 gap-3">
      {gridEntries.map((entry, i) => (
        <motion.div
          key={entry.key}
          className={`flex items-center justify-between p-3 rounded-lg border ${fortuneBgClass(entry.grid.fortune.level)}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex flex-col">
              <span className="font-serif-tc font-bold text-foreground">{entry.key}</span>
              <span className="text-xs text-muted-foreground">{entry.desc}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{entry.grid.strokes} 畫</span>
            <span className={`font-serif-tc font-bold text-lg ${fortuneColorClass(entry.grid.fortune.level)}`}>
              {fortuneLabel(entry.grid.fortune.level)}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default FiveGridChart;

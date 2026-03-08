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

// Radar chart helpers
const SIZE = 240;
const CENTER = SIZE / 2;
const RADIUS = 90;
const LEVELS = 4;

// Pentagon vertices (top-center start, clockwise)
function getPoint(index: number, radius: number): [number, number] {
  const angle = (Math.PI * 2 * index) / 5 - Math.PI / 2;
  return [
    CENTER + radius * Math.cos(angle),
    CENTER + radius * Math.sin(angle),
  ];
}

function polygonPoints(radius: number): string {
  return Array.from({ length: 5 }, (_, i) => getPoint(i, radius).join(',')).join(' ');
}

function scoreToRadius(score: number): number {
  return (score / 100) * RADIUS;
}

const RadarChart = ({ grids }: FiveGridChartProps) => {
  const entries = [
    { label: '天格', score: grids.heaven.score },
    { label: '人格', score: grids.person.score },
    { label: '地格', score: grids.earth.score },
    { label: '外格', score: grids.outer.score },
    { label: '總格', score: grids.total.score },
  ];

  const dataPoints = entries
    .map((e, i) => getPoint(i, scoreToRadius(e.score)).join(','))
    .join(' ');

  return (
    <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="mx-auto">
      {/* Grid levels */}
      {Array.from({ length: LEVELS }, (_, i) => (
        <polygon
          key={i}
          points={polygonPoints(RADIUS * ((i + 1) / LEVELS))}
          fill="none"
          stroke="hsl(35, 20%, 82%)"
          strokeWidth={i === LEVELS - 1 ? 1.5 : 0.8}
          opacity={0.6}
        />
      ))}

      {/* Axes */}
      {Array.from({ length: 5 }, (_, i) => {
        const [x, y] = getPoint(i, RADIUS);
        return (
          <line
            key={i}
            x1={CENTER} y1={CENTER}
            x2={x} y2={y}
            stroke="hsl(35, 20%, 82%)"
            strokeWidth={0.8}
            opacity={0.5}
          />
        );
      })}

      {/* Data polygon */}
      <motion.polygon
        points={polygonPoints(0)}
        animate={{ points: dataPoints }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        fill="hsl(42, 80%, 55%)"
        fillOpacity={0.2}
        stroke="hsl(42, 80%, 55%)"
        strokeWidth={2}
      />

      {/* Data dots */}
      {entries.map((e, i) => {
        const [x, y] = getPoint(i, scoreToRadius(e.score));
        return (
          <motion.circle
            key={i}
            r={4}
            fill="hsl(42, 80%, 55%)"
            initial={{ cx: CENTER, cy: CENTER, opacity: 0 }}
            animate={{ cx: x, cy: y, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
          />
        );
      })}

      {/* Labels */}
      {entries.map((e, i) => {
        const [x, y] = getPoint(i, RADIUS + 22);
        return (
          <text
            key={i}
            x={x}
            y={y}
            textAnchor="middle"
            dominantBaseline="central"
            className="fill-foreground font-serif-tc"
            fontSize={12}
            fontWeight={600}
          >
            {e.label}
          </text>
        );
      })}
    </svg>
  );
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
    <div className="space-y-4">
      {/* Radar Chart */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <RadarChart grids={grids} />
      </motion.div>

      {/* Detail list */}
      <div className="grid grid-cols-1 gap-3">
        {gridEntries.map((entry, i) => (
          <motion.div
            key={entry.key}
            className={`flex items-center justify-between p-3 rounded-lg border ${fortuneBgClass(entry.grid.fortune.level)}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
          >
            <div className="flex flex-col">
              <span className="font-serif-tc font-bold text-foreground">{entry.key}</span>
              <span className="text-xs text-muted-foreground">{entry.desc}</span>
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
    </div>
  );
};

export default FiveGridChart;

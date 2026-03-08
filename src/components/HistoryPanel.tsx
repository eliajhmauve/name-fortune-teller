import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface HistoryEntry {
  name: string;
  score: number;
  keywords: string[];
  timestamp: number;
}

interface HistoryPanelProps {
  entries: HistoryEntry[];
  onSelect: (name: string) => void;
  onClear: () => void;
}

const HistoryPanel = ({ entries, onSelect, onClear }: HistoryPanelProps) => {
  if (entries.length === 0) return null;

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-fortune-great';
    if (score >= 70) return 'text-fortune-good';
    if (score >= 55) return 'text-fortune-half';
    return 'text-fortune-bad';
  };

  return (
    <motion.div
      className="w-full max-w-md mb-6"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-serif-tc text-sm font-bold text-muted-foreground">📜 歷史記錄</h3>
        <button
          onClick={onClear}
          className="text-xs text-muted-foreground/60 hover:text-foreground transition-colors flex items-center gap-1"
        >
          <X size={12} /> 清除
        </button>
      </div>
      <div className="flex gap-2 flex-wrap">
        {entries.map((entry) => (
          <button
            key={entry.name + entry.timestamp}
            onClick={() => onSelect(entry.name)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card hover:border-primary/40 transition-colors group"
          >
            <span className="font-serif-tc text-sm text-foreground">{entry.name}</span>
            <span className={`text-xs font-bold ${getScoreColor(entry.score)}`}>{entry.score}</span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default HistoryPanel;
export type { HistoryEntry };

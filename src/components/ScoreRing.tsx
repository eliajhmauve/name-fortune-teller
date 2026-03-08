import { motion } from 'framer-motion';

interface ScoreRingProps {
  score: number;
  size?: number;
}

const ScoreRing = ({ score, size = 200 }: ScoreRingProps) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const getColor = () => {
    if (score >= 85) return 'hsl(42, 80%, 55%)'; // gold
    if (score >= 70) return 'hsl(140, 45%, 45%)'; // green
    if (score >= 55) return 'hsl(45, 70%, 50%)'; // yellow
    return 'hsl(220, 10%, 55%)'; // gray
  };

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox="0 0 160 160" className="transform -rotate-90">
        {/* Background ring */}
        <circle
          cx="80" cy="80" r={radius}
          fill="none"
          stroke="hsl(35, 20%, 88%)"
          strokeWidth="10"
        />
        {/* Score ring */}
        <motion.circle
          cx="80" cy="80" r={radius}
          fill="none"
          stroke={getColor()}
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }}
        />
      </svg>
      <motion.div
        className="absolute flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <span className="text-5xl font-bold font-serif-tc text-gradient-gold">{score}</span>
        <span className="text-sm text-muted-foreground">/ 100</span>
      </motion.div>
    </div>
  );
};

export default ScoreRing;

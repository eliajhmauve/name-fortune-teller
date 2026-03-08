import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { analyzeName, type NameAnalysis } from '@/lib/name-analyzer';
import ScoreRing from '@/components/ScoreRing';
import FiveGridChart from '@/components/FiveGridChart';
import ShareCard from '@/components/ShareCard';

const Index = () => {
  const [name, setName] = useState('');
  const [result, setResult] = useState<NameAnalysis | null>(null);
  const [submittedName, setSubmittedName] = useState('');
  const [error, setError] = useState('');

  const handleAnalyze = () => {
    const trimmed = name.trim();
    // Validate: 2-4 Chinese characters
    if (!/^[\u4e00-\u9fff]{2,4}$/.test(trimmed)) {
      setError('請輸入 2-4 個中文字的姓名');
      return;
    }
    setError('');
    setSubmittedName(trimmed);
    setResult(analyzeName(trimmed));
  };

  const handleReset = () => {
    setResult(null);
    setName('');
    setSubmittedName('');
  };

  return (
    <div className="min-h-screen bg-scroll-texture flex flex-col items-center px-4 py-8">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif-tc font-bold text-gradient-gold mb-2">
          你的名字值幾分？
        </h1>
        <p className="text-muted-foreground font-sans-tc">
          以康熙字典筆畫 × 五格數理，解讀你名字的命運密碼
        </p>
      </motion.div>

      {/* Input */}
      <motion.div
        className="w-full max-w-md mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
            placeholder="輸入你的姓名"
            maxLength={4}
            className="flex-1 px-4 py-3 rounded-lg border border-gold bg-card text-foreground font-serif-tc text-xl text-center placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow"
          />
          <button
            onClick={handleAnalyze}
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-serif-tc font-bold text-lg hover:opacity-90 transition-opacity shadow-gold"
          >
            測算
          </button>
        </div>
        {error && (
          <p className="text-accent text-sm mt-2 text-center">{error}</p>
        )}
      </motion.div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key={submittedName}
            className="w-full max-w-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Score Ring */}
            <div className="flex flex-col items-center mb-6">
              <p className="text-sm text-muted-foreground mb-1">綜合評分</p>
              <ScoreRing score={result.overallScore} />
            </div>

            {/* Character Strokes */}
            <motion.div
              className="flex justify-center gap-6 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {result.characters.map((c, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-3xl font-serif-tc font-bold text-foreground">{c.char}</span>
                  <span className="text-xs text-muted-foreground mt-1">{c.strokes} 畫</span>
                </div>
              ))}
            </motion.div>

            {/* Five Grid Breakdown */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="font-serif-tc text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                🔤 五格分析
              </h2>
              <FiveGridChart grids={result.grids} />
            </motion.div>

            {/* Keywords */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="font-serif-tc text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                💡 名字特質
              </h2>
              <div className="flex gap-2 flex-wrap">
                {result.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="px-4 py-1.5 rounded-full bg-primary/10 text-primary font-serif-tc font-medium border border-primary/20"
                  >
                    #{kw}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Summary */}
            <motion.div
              className="mb-4 p-5 rounded-xl bg-card border border-gold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <h2 className="font-serif-tc text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                📝 總評
              </h2>
              <p className="text-foreground/80 leading-relaxed font-sans-tc text-sm">
                {result.summary}
              </p>
            </motion.div>

            {/* Share */}
            <ShareCard analysis={result} name={submittedName} />

            {/* Reset */}
            <motion.div
              className="text-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <button
                onClick={handleReset}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm underline"
              >
                再測一個名字
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="mt-auto pt-8 text-center text-xs text-muted-foreground/60">
        僅供娛樂參考，命運掌握在自己手中 ✨
      </div>
    </div>
  );
};

export default Index;

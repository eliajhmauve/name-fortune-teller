import { motion } from 'framer-motion';
import type { NameAnalysis } from '@/lib/name-analyzer';

interface ShareCardProps {
  analysis: NameAnalysis;
  name: string;
}

const ShareCard = ({ analysis, name }: ShareCardProps) => {
  const handleShare = async () => {
    const text = `我的名字「${name}」得了 ${analysis.overallScore} 分！\n特質：${analysis.keywords.map(k => `#${k}`).join(' ')}\n\n你的名字值幾分？快來測！`;
    
    if (navigator.share) {
      try {
        await navigator.share({ title: '你的名字值幾分？', text });
      } catch {
        // User cancelled
      }
    } else {
      await navigator.clipboard.writeText(text);
      alert('已複製到剪貼簿！');
    }
  };

  return (
    <motion.div
      className="mt-6 p-6 rounded-xl border border-gold bg-card shadow-gold text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <p className="text-sm text-muted-foreground mb-2">分享你的結果</p>
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="font-serif-tc text-2xl font-bold text-foreground">{name}</span>
        <span className="text-gradient-gold font-serif-tc text-2xl font-bold">{analysis.overallScore} 分</span>
      </div>
      <div className="flex justify-center gap-2 mb-4">
        {analysis.keywords.map((kw) => (
          <span key={kw} className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium">
            #{kw}
          </span>
        ))}
      </div>
      <button
        onClick={handleShare}
        className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
      >
        分享結果 ✨
      </button>
    </motion.div>
  );
};

export default ShareCard;

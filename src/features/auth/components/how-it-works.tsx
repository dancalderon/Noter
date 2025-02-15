import { Typography } from "@/components/ui/typography";
import { FolderSearch, PenLine, Search, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const FeatureItem = ({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="flex items-start space-x-6"
    >
      <div className="bg-primary-100 p-4 rounded-lg">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
      <div>
        <Typography variant="h3" className="text-primary-900 mb-2">
          {title}
        </Typography>
        <Typography variant="p" className="text-primary-600">
          {description}
        </Typography>
      </div>
    </motion.div>
  );
};

const features = [
  {
    icon: PenLine,
    title: "Just Type, AI Builds",
    description:
      'Enter a short phrase like "watch Bleach" or "check Svelte." AI generates a note with summaries, sources, images, and key details.',
  },
  {
    icon: Search,
    title: "Find Anything in Seconds",
    description:
      "Search naturally—AI filters and retrieves the right note, even if you forgot the exact words.",
  },
  {
    icon: FolderSearch,
    title: "Effortless Organization",
    description:
      "No need to sort—AI auto-tags and categorizes notes so you always stay organized.",
  },
  {
    icon: Zap,
    title: "Your Personal Knowledge Hub",
    description:
      "Keep track of books, shows, research, tasks—anything. AI structures your knowledge effortlessly.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="mt-32 text-left"
    >
      <Typography variant="h2" className="text-primary-900 mb-12 text-center">
        How It Works
      </Typography>
      <div className="grid grid-cols-1 gap-12">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

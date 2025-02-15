import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Slot } from "@radix-ui/react-slot";
import { Brain, FolderSearch, Search } from "lucide-react";
import { motion } from "motion/react";
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="p-0 flex items-center flex-col">
      <CardHeader>
        <CardTitle>
          <Slot className="h-8 w-8">{icon}</Slot>
        </CardTitle>
      </CardHeader>
      <CardContent className="gap-2">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="p" className="text-primary-600 text-center">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

const keyFeatures = [
  {
    icon: <Brain />,
    title: "Fragments into Notes",
    description:
      "AI transforms your quick thoughts into well-structured, detailed notes",
  },
  {
    icon: <Search />,
    title: "AI-powered Search",
    description:
      "Find exactly what you need with intelligent filtering and search",
  },
  {
    icon: <FolderSearch />,
    title: "Instant Organization",
    description: "Let AI handle the sorting while you focus on creating",
  },
];

export default function KeyFeatures() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      {keyFeatures.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </motion.div>
  );
}

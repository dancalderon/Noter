import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  RocketIcon,
  RocketIconHandle,
} from "../../../components/ui/rocket-icon";

export default function AreYouReady() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const rocketRef = useRef<RocketIconHandle>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex items-start space-x-6 my-64"
    >
      <div>
        <Typography variant="h2" className="mb-2">
          Ready to Capture Ideas Effortlessly?
        </Typography>
        <Typography variant="p" className="mb-2">
          Stop worrying about organizing notes—let AI handle it for you. Just
          type, and your knowledge is structured instantly.
        </Typography>
        <Typography variant="p" className="font-semibold mb-4">
          Join now and experience the future of note-taking.
        </Typography>
        <Button
          size="lg"
          className="group"
          onMouseEnter={() => rocketRef.current?.startAnimation()}
          onMouseLeave={() => rocketRef.current?.stopAnimation()}
        >
          Get Started for Free <RocketIcon ref={rocketRef} />
        </Button>
      </div>
    </motion.div>
  );
}

import { useFadeIn } from "@/hooks/useFadeIn";
import { Sparkles } from "lucide-react";

const Vision = () => {
  const ref = useFadeIn();

  return (
    <section className="py-24 px-4 sm:px-6">
      <div ref={ref} className="fade-in-section max-w-4xl mx-auto text-center">
        <Sparkles className="h-10 w-10 text-primary mx-auto mb-6" />
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
          The Future of Farming
        </h2>
        <blockquote className="text-xl sm:text-2xl text-muted-foreground leading-relaxed italic">
          "We envision FarmSense evolving into a fully autonomous AI farm
          assistant — capable of predicting threats before they emerge,
          automating protective responses, and transforming global agriculture
          into a smarter, more resilient system that feeds the world
          sustainably."
        </blockquote>
      </div>
    </section>
  );
};

export default Vision;

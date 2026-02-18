import { useFadeIn } from "@/hooks/useFadeIn";
import { Badge } from "@/components/ui/badge";
import { Brain, Cpu, Eye, Ear, Zap } from "lucide-react";

const techs = [
  { icon: Brain, label: "Artificial Intelligence" },
  { icon: Cpu, label: "Machine Learning" },
  { icon: Eye, label: "Computer Vision" },
  { icon: Ear, label: "Acoustic Sensors" },
  { icon: Zap, label: "Edge AI" },
];

const Technology = () => {
  const ref = useFadeIn();

  return (
    <section id="technology" className="py-24 px-4 sm:px-6 bg-foreground text-background">
      <div ref={ref} className="fade-in-section max-w-4xl mx-auto text-center">
        <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
          Technology
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10">
          Powered by Next-Gen AI
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          {techs.map((t, i) => (
            <Badge
              key={i}
              variant="outline"
              className="px-5 py-2.5 text-sm font-medium border-primary/40 text-primary bg-primary/10 gap-2"
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </Badge>
          ))}
        </div>

        <p className="text-lg text-background/70">
          Built with next-generation AI to power the future of agriculture.
        </p>
      </div>
    </section>
  );
};

export default Technology;

import { useFadeIn } from "@/hooks/useFadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Ear, ScanEye, BellRing, Stethoscope, AudioLines } from "lucide-react";

const features = [
  {
    icon: Ear,
    title: "Acoustic Pest Detection",
    description:
      "Advanced noise filtering isolates pest-specific sounds in real time, detecting infestations invisible to the naked eye.",
  },
  {
    icon: ScanEye,
    title: "AI Crop Disease Recognition",
    description:
      "Computer vision trained on millions of images identifies diseases from leaf patterns with over 95% accuracy.",
  },
  {
    icon: BellRing,
    title: "Real-Time Mobile Alerts",
    description:
      "Instant push notifications to your phone when threats are detected, with GPS-tagged field locations.",
  },
  {
    icon: Stethoscope,
    title: "Smart Treatment Recommendations",
    description:
      "AI-generated treatment plans tailored to the specific pest or disease, crop type, and growth stage.",
  },
  {
    icon: AudioLines,
    title: "Multi-Modal AI",
    description:
      "Combining sound and vision data delivers higher accuracy than either modality alone — fewer false positives, faster action.",
  },
];

const Features = () => {
  const ref = useFadeIn();

  return (
    <section id="features" className="py-24 px-4 sm:px-6 bg-secondary/50">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Intelligent Tools for Modern Farming
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Card
              key={i}
              className="group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-border/60"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

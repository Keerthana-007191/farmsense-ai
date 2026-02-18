import { useFadeIn } from "@/hooks/useFadeIn";
import { Camera, Cpu, ShieldAlert, Bell, ArrowRight } from "lucide-react";

const steps = [
  { icon: Camera, label: "Sensor & Camera", sub: "Continuous field monitoring" },
  { icon: Cpu, label: "AI Processing", sub: "Real-time data analysis" },
  { icon: ShieldAlert, label: "Threat Detection", sub: "Pest & disease identification" },
  { icon: Bell, label: "Instant Alerts", sub: "Mobile notifications & actions" },
];

const HowItWorks = () => {
  const ref = useFadeIn();

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            From Field to Action in Seconds
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center text-center w-40">
                <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-3">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">{step.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{step.sub}</p>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block h-5 w-5 text-primary/40 mx-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

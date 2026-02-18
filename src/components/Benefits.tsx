import { useFadeIn } from "@/hooks/useFadeIn";
import { AlertTriangle, TrendingDown, Clock, BarChart3, DollarSign } from "lucide-react";

const benefits = [
  { icon: AlertTriangle, title: "Early Warning System", desc: "Detect threats days before visible damage, giving you time to act." },
  { icon: TrendingDown, title: "Reduced Crop Loss", desc: "Prevent up to 40% of crop losses caused by late pest and disease detection." },
  { icon: Clock, title: "Saves Labor & Time", desc: "Automated monitoring eliminates hours of manual scouting every week." },
  { icon: BarChart3, title: "Data-Driven Decisions", desc: "Actionable insights backed by AI analytics for precision farming." },
  { icon: DollarSign, title: "Scalable & Cost-Effective", desc: "Deploy across farms of any size with minimal infrastructure investment." },
];

const Benefits = () => {
  const ref = useFadeIn();

  return (
    <section className="py-24 px-4 sm:px-6 bg-secondary/50">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Benefits
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Real Impact on Your Bottom Line
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <b.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;

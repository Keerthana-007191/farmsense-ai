import { useFadeIn } from "@/hooks/useFadeIn";
import { Shield, Eye } from "lucide-react";

const About = () => {
  const ref = useFadeIn();

  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div ref={ref} className="fade-in-section max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
              About FarmSense
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Delayed Detection Costs Farmers Billions Every Year
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Traditional pest and disease detection relies on manual scouting —
              slow, inconsistent, and often too late. By the time visible symptoms
              appear, significant crop damage has already occurred.
            </p>
            <p className="text-foreground font-medium leading-relaxed">
              FarmSense is your 24/7 intelligent farm guardian that continuously
              listens, sees, and analyzes field conditions to stop threats before
              they spread.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-primary/15 flex items-center justify-center">
                <div className="absolute inset-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="flex gap-4">
                    <Shield className="h-12 w-12 text-primary" />
                    <Eye className="h-12 w-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

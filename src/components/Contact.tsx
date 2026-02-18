import { useState } from "react";
import { useFadeIn } from "@/hooks/useFadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const ref = useFadeIn();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Demo Request Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-secondary/50">
      <div ref={ref} className="fade-in-section max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Book a Demo
          </h2>
          <p className="text-muted-foreground">
            Bring intelligence to your fields. Fill out the form and our team
            will reach out.
          </p>
        </div>

        <Card className="border-border/60">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Input name="name" placeholder="Your Name" required />
                <Input name="email" type="email" placeholder="Email Address" required />
              </div>
              <Input name="organization" placeholder="Organization" />
              <Textarea name="message" placeholder="Tell us about your farm and needs..." rows={4} />
              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? "Sending..." : <>Send Request <Send className="ml-2 h-4 w-4" /></>}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

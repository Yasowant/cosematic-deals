
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Thanks for subscribing!", {
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail("");
    }
  };
  
  return (
    <section className="section-padding bg-gradient-to-r from-cosmo-purple/20 to-cosmo-pink/20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated on Exclusive Deals
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and be the first to know about special offers, new products, and beauty tips.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow"
              required
            />
            <Button 
              type="submit" 
              className="bg-cosmo-deep-pink hover:bg-cosmo-deep-pink/90 text-white"
              size="lg"
            >
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to receive marketing emails from us. 
            Don't worry, we respect your privacy and you can unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

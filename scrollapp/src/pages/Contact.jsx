import { BubbleText } from "@/components/ui/BubbleText";
import { AuroraHero } from "@/components/ui/buttonAura";

const Contact = () => {
  return (
    <section id="contact" className="section" style={{width:"100%", height:"100vh", backgroundColor:"green"}}>
      <AuroraHero/>
      <BubbleText/>
      <p>Welcome to the Home section!</p>
    </section>
  );
};

export default Contact;

import HeroBanner from "@/components/HeroBanner";
import ContactForm from "@/components/ContactForm";
import WorldMap from "@/components/WorldMap";

const Contact = () => (
  <div>
    <HeroBanner title="Contact Us" />

    <section className="py-16 container">
      <div className="bg-card rounded-2xl shadow-card p-8 lg:p-12 border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <span className="inline-block px-4 py-1 rounded-full border border-primary text-primary text-sm font-medium mb-4">
              Medex
            </span>
            <h2 className="text-2xl font-bold mb-8">Join to Our Community</h2>
          </div>
          <div className="flex justify-end items-center">
            <p className="text-muted-foreground mb-6 lg:mb-0 w-[500px] text-lg">
              We are here to answer your questions and provide the necessary assistance.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ContactForm />
          </div>
          <WorldMap />
        </div>
      </div>
    </section>
  </div>
);

export default Contact;

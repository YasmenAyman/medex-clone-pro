import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static frontend - no actual submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="bg-secondary border-0 rounded-lg"
      />
      <Input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="bg-secondary border-0 rounded-lg"
      />
      <Input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="bg-secondary border-0 rounded-lg"
      />
      <Input
        placeholder="Subject"
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
        className="bg-secondary border-0 rounded-lg"
      />
      <Textarea
        placeholder="Massage"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="bg-secondary border-0 rounded-lg min-h-[120px]"
      />
      <div className="flex justify-center">
        <Button type="submit" className="rounded-full px-10">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;

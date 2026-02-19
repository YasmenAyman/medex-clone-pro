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
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="bg-secondary border-0 rounded-md min-h-[64px]"
      />
      <Input
        placeholder="Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="bg-secondary border-0 rounded-md min-h-[64px]"
      />
      <Input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="bg-secondary border-0 rounded-md min-h-[64px]"
      />
      <Input
        placeholder="Subject"
        value={form.subject}
        onChange={(e) => setForm({ ...form, subject: e.target.value })}
        className="bg-secondary border-0 rounded-md min-h-[64px]"
      />
      <Textarea
        placeholder="Massage"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="bg-secondary border-0 rounded-md min-h-[140px]"
      />
      <div className="flex justify-end">
        <Button type="submit" className="rounded-md px-10">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;

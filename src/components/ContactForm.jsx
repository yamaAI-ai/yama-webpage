// src/components/ContactForm.jsx
export default function ContactForm() {
  return (
    <form
      action="https://formspree.io/f/yourFormId"
      method="POST"
      className="flex flex-col space-y-3"
    >
      <input type="email" name="email" placeholder="Your email" required />
      <textarea name="message" placeholder="How can we help?" required />
      <button type="submit">Send Inquiry</button>
    </form>
  );
}

import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Thanks! We'll reach out within 24 hours.");
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="section">
      <div className="container max-w-2xl">
        <h2 className="heading-2 text-center">Book a Free Consult</h2>
        <form onSubmit={handleSubmit} className="card space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Parent/Guardian Name</label>
              <input required name="parent" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium">Student Name</label>
              <input required name="student" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input required type="email" name="email" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input name="phone" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Target Test Date</label>
              <input name="date" placeholder="e.g., December 7" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium">Target Score</label>
              <input name="target" placeholder="e.g., 1400" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">How can we help?</label>
            <textarea name="message" rows="4" placeholder="Tell us about current scores, goals, or questions." className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button type="submit" className="btn-primary w-full py-3">Request Consultation</button>
          {status && <p className="text-green-700 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  );
}

import { useMemo, useState } from 'react';
import confetti from 'canvas-confetti'

export default function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');

  const formspreeEndpoint = useMemo(() => {
    const id = import.meta.env.VITE_FORMSPREE_ID;
    return id ? `https://formspree.io/f/${id}` : '';
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;

    // Simple client-side validation
    const email = form.email?.value?.trim();
    const parent = form.parent?.value?.trim();
    const student = form.student?.value?.trim();
    if (!email || !parent || !student) {
      setStatus('Please complete required fields.');
      return;
    }

    if (!formspreeEndpoint) {
      setStatus("Submitted locally.");
      form.reset();
      return;
    }

    try {
      setLoading(true);
      setStatus('');
      const data = new FormData(form);
      if (interest) data.set('interest', interest);
      if (message) data.set('message', message);
      const res = await fetch(formspreeEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (res.ok) {
        setStatus("Thanks! We'll reach out within 24 hours.");
        form.reset();
        setInterest('');
        setMessage('');
        try { confetti({ particleCount: 60, spread: 50, origin: { y: 0.2 } }) } catch (_) {}
      } else {
        setStatus('Something went wrong. Please try again later.');
      }
    } catch (err) {
      setStatus('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container max-w-2xl">
        <h2 className="heading-2 text-center">Book a Free Consult</h2>
        <br></br>
        <form onSubmit={handleSubmit} className="card space-y-4">
          <input type="hidden" name="subject" value="New SAT consult request from website" />
          <input type="hidden" name="interest" value={interest} />

          <div>
            <label className="block text-sm font-medium">What are you most interested in?</label>
            <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {['1:1 Tutoring','Small Group','Bootcamp'].map((opt) => (
                <button
                  key={opt}
                  type="button"
                  onClick={() => {
                    setInterest(opt);
                    if (!message || message.startsWith('Interest:')) {
                      setMessage(`Interest: ${opt}\n`);
                    }
                  }}
                  className={`px-3 py-2 rounded-xl border text-sm ${interest===opt ? 'bg-[#0B4F8A] text-white border-transparent' : 'bg-white/70 border-slate-200'}`}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
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
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium">Target Test Date</label>
              <input name="date" placeholder="e.g., December 7" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium">Current Score</label>
              <input name="target" placeholder="If none, put N/A" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium">Target Score</label>
              <input name="target" placeholder="e.g., 1400" className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">How can we help?</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about current scores, goals, or questions."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button type="submit" disabled={loading} className={`btn-primary w-full py-3 ${loading ? 'opacity-80 cursor-not-allowed' : ''}`}>{loading ? 'Submitting…' : 'Request Consultation'}</button>
          {status && <p className="text-green-700 text-sm">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Freelancers Earning $50k+
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-calculate optimal{" "}
          <span className="text-[#58a6ff]">invoice timing</span>{" "}
          for taxes
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop overpaying quarterly taxes. Our engine analyzes your income patterns and tells you exactly when to send invoices to legally minimize your tax burden — without hurting cash flow.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-base px-8 py-3 rounded-lg transition-colors duration-150"
        >
          Start Optimizing — $19/mo
        </a>
        <p className="text-xs text-[#6e7681] mt-3">Cancel anytime. No contracts.</p>
      </section>

      {/* How it works */}
      <section className="mb-20 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: "01", title: "Connect Income", desc: "Log your invoices and income sources in seconds." },
          { step: "02", title: "Engine Analyzes", desc: "Our tax engine models your quarterly liability in real time." },
          { step: "03", title: "Get Timing Tips", desc: "Receive actionable invoice timing recommendations each month." }
        ].map((item) => (
          <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-[#58a6ff] text-xs font-bold mb-2 tracking-widest">{item.step}</div>
            <div className="text-white font-semibold mb-1">{item.title}</div>
            <div className="text-[#8b949e] text-sm">{item.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20 flex justify-center">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 w-full max-w-sm text-center">
          <div className="text-[#58a6ff] text-xs font-bold uppercase tracking-widest mb-3">Pro Plan</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month, billed monthly</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited invoice tracking",
              "Quarterly tax projections",
              "Invoice timing recommendations",
              "Cash flow impact analysis",
              "Email digest & alerts"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feat}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does invoice timing affect my taxes?",
              a: "Freelance income is taxed in the quarter it's received. By strategically timing when you send invoices, you can shift income between quarters to stay in lower tax brackets and reduce estimated tax payments."
            },
            {
              q: "Is this legal tax optimization?",
              a: "Absolutely. Invoice timing is a standard, IRS-compliant strategy used by accountants. We simply automate the analysis so you don't need a CPA to figure it out."
            },
            {
              q: "What if I cancel my subscription?",
              a: "You can cancel anytime with no penalties. Your data remains accessible for 30 days after cancellation so you can export everything."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-white font-semibold mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#6e7681] border-t border-[#21262d] pt-8">
        © {new Date().getFullYear()} Invoice Tax Optimizer. Not a licensed tax advisor. Consult a CPA for personalized advice.
      </footer>
    </main>
  );
}

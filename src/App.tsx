export default function DVSAutomationHomepage() { return ( <div className="min-h-screen bg-white text-gray-900"> <header className="border-b border-gray-200"> <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between"> <div> <h1 className="text-2xl font-bold">DVS Automation Solutions</h1> <p className="text-sm text-gray-500">Helping local businesses turn missed calls into booked jobs</p> </div> <a
href="mailto:service@dvsautomationsolutionsllc.com"
className="bg-black text-white px-5 py-2 rounded-2xl text-sm font-medium hover:opacity-90 transition"
> Contact Us </a> </div> </header>

<main>
    <section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
      <div>
        <p className="uppercase tracking-wide text-sm font-semibold text-gray-500 mb-4">
          AI-Powered Business Automation
        </p>

        <h2 className="text-5xl font-bold leading-tight mb-6">
          Never Lose Another Customer From a Missed Call
        </h2>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          DVS Automation Solutions helps local service businesses automatically follow up with missed calls, qualify leads, and increase booked jobs using smart messaging automation.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:service@dvsautomationsolutionsllc.com"
            className="bg-black text-white px-6 py-3 rounded-2xl font-medium hover:opacity-90 transition"
          >
            Request a Demo
          </a>

          <a
            href="#services"
            className="border border-gray-300 px-6 py-3 rounded-2xl font-medium hover:bg-gray-100 transition"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="bg-gray-100 rounded-3xl p-8 shadow-sm border border-gray-200">
        <div className="bg-white rounded-2xl p-5 shadow-sm mb-4">
          <p className="text-sm text-gray-500 mb-2">Missed Call Detected</p>
          <p className="font-semibold">Customer called after hours</p>
        </div>

        <div className="bg-black text-white rounded-2xl p-5 shadow-sm mb-4 ml-6">
          <p className="text-sm opacity-70 mb-2">Automatic Response</p>
          <p>
            Hey, sorry we missed your call! How can we help?
          </p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm mr-6">
          <p className="text-sm text-gray-500 mb-2">Qualified Lead</p>
          <p>
            Plumbing issue reported. Customer requesting appointment tomorrow morning.
          </p>
        </div>
      </div>
    </section>

    <section id="services" className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h3 className="text-4xl font-bold mb-4">What We Do</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We help local businesses capture more leads, automate communication, and improve customer response times.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
            <h4 className="text-xl font-semibold mb-4">Missed Call Text Back</h4>
            <p className="text-gray-600 leading-relaxed">
              Automatically send text messages to customers when calls are missed.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
            <h4 className="text-xl font-semibold mb-4">Lead Qualification</h4>
            <p className="text-gray-600 leading-relaxed">
              Collect customer information and service details automatically.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
            <h4 className="text-xl font-semibold mb-4">Business Automation</h4>
            <p className="text-gray-600 leading-relaxed">
              Save time with smart workflows and customer communication automation.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="max-w-5xl mx-auto px-6 py-24 text-center">
      <h3 className="text-4xl font-bold mb-6">
        Built for Local Service Businesses
      </h3>

      <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
        Perfect for plumbers, HVAC companies, roofers, electricians, and other local businesses that rely on inbound calls.
      </p>

      <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
        <span className="bg-gray-100 px-4 py-2 rounded-full">Plumbers</span>
        <span className="bg-gray-100 px-4 py-2 rounded-full">HVAC</span>
        <span className="bg-gray-100 px-4 py-2 rounded-full">Roofers</span>
        <span className="bg-gray-100 px-4 py-2 rounded-full">Electricians</span>
        <span className="bg-gray-100 px-4 py-2 rounded-full">Contractors</span>
      </div>
    </section>

    <section className="bg-black text-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h3 className="text-4xl font-bold mb-6">
          Ready to Capture More Leads?
        </h3>

        <p className="text-lg opacity-80 mb-8 leading-relaxed">
          Request a quick demo and see how DVS Automation Solutions can help your business respond faster and book more jobs.
        </p>

        <a
          href="mailto:service@dvsautomationsolutionsllc.com"
          className="inline-block bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
        >
          Get a Free Demo
        </a>
      </div>
    </section>
  </main>

  <footer className="border-t border-gray-200 bg-white">
    <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-3">
      <p>© 2026 DVS Automation Solutions LLC</p>
      <p>service@dvsautomationsolutionsllc.com</p>
    </div>
  </footer>
</div>

); }
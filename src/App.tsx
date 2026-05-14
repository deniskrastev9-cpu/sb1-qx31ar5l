function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>DVS Automation Solutions</h1>
      <p>Business automation and SMS communication services.</p>

      <a href="/privacy-policy">Privacy Policy</a> |{" "}
      <a href="/terms">Terms</a>
    </div>
  );
}

function Privacy() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Privacy Policy</h1>
      <p>
        We collect contact information only to provide communication services.
        We do not sell personal data.
      </p>
      <p>
        SMS consent required. Reply STOP to opt out.
      </p>
    </div>
  );
}

function Terms() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Terms of Service</h1>
      <p>
        Services must be used for lawful business purposes only.
        Spam or abuse is prohibited.
      </p>
    </div>
  );
}

export default function App() {
  const path = window.location.pathname;

  if (path === "/privacy-policy") return <Privacy />;
  if (path === "/terms") return <Terms />;

  return <Home />;
}
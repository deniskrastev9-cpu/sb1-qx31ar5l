function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>DVS Automation Solutions</h1>

      <p>
        Business automation and SMS communication services for local businesses.
      </p>

      <p>
        <a href="/privacy-policy">Privacy Policy</a> |{" "}
        <a href="/terms">Terms of Service</a>
      </p>
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

      <a href="/">Back to Home</a>
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

      <a href="/">Back to Home</a>
    </div>
  );
}

export default function App() {
  return <Home />;
}
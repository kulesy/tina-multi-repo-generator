export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Tina Multi-Repo Generator</h1>
      <p>This is the generator repository for testing multi-repo TinaCMS support.</p>

      <h2>Setup</h2>
      <ul>
        <li>Generator Repo: <code>kulesy/tina-multi-repo-generator</code></li>
        <li>Content Repo: <code>kulesy/tina-multi-repo-content</code></li>
      </ul>

      <h2>Tina Admin</h2>
      <p>
        Access the Tina admin at <a href="/admin">/admin</a>
      </p>

      <h2>Testing PR #3368</h2>
      <p>This project tests the multi-repo catalog manager changes.</p>
    </main>
  );
}

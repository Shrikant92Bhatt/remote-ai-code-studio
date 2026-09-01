'use client';

import { useState } from 'react';

const files = ['README.md', 'src/index.ts', 'src/app.ts', 'package.json'];

export default function Home() {
  const [activeFile, setActiveFile] = useState('src/index.ts');
  return (
    <main style={{ minHeight: '100vh', background: '#0b0f14', color: '#d7dee7', fontFamily: 'Inter, system-ui' }}>
      <header style={{ height: 48, borderBottom: '1px solid #202832', display: 'flex', alignItems: 'center', padding: '0 16px' }}>
        <strong>Remote AI Code Studio</strong>
        <span style={{ marginLeft: 16, opacity: .65 }}>workspace / default</span>
      </header>
      <section style={{ display: 'grid', gridTemplateColumns: '220px 1fr 360px', height: 'calc(100vh - 48px)' }}>
        <aside style={{ borderRight: '1px solid #202832', padding: 12 }}>
          <div style={{ fontSize: 12, opacity: .6, marginBottom: 10 }}>EXPLORER</div>
          {files.map(file => <button key={file} onClick={() => setActiveFile(file)} style={{ display: 'block', width: '100%', textAlign: 'left', padding: '7px 8px', border: 0, background: activeFile === file ? '#18212b' : 'transparent', color: 'inherit', borderRadius: 5 }}>{file}</button>)}
        </aside>
        <div style={{ padding: 24 }}>
          <div style={{ fontSize: 13, opacity: .65, marginBottom: 12 }}>{activeFile}</div>
          <pre style={{ margin: 0, lineHeight: 1.7, fontFamily: 'ui-monospace, monospace' }}>{`// Monaco editor integration is the next vertical slice\n\nexport async function main() {\n  return 'AI coding workspace ready';\n}`}</pre>
        </div>
        <aside style={{ borderLeft: '1px solid #202832', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: 14, borderBottom: '1px solid #202832', fontWeight: 600 }}>AI Agent</div>
          <div style={{ padding: 14, opacity: .7, flex: 1 }}>Connect Claude, OpenAI or Gemini to inspect, edit, test and review this workspace.</div>
          <div style={{ padding: 12, borderTop: '1px solid #202832' }}><input placeholder="Ask the coding agent..." style={{ width: '100%', boxSizing: 'border-box', padding: 10, background: '#111820', border: '1px solid #28323d', color: 'inherit', borderRadius: 6 }} /></div>
        </aside>
      </section>
    </main>
  );
}

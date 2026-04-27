// src/App.tsx
import Connection from "./Connection"
import Balance from "./Balance";
import Transfer from "./Transfer";
import './index.css'; 

function App() {
  return (
    /* Aumentamos o limite do container geral para 800px para dar espaço lateral */
    <div className="container" style={{maxWidth: '800px', margin: '0 auto'}}>
      
      {/* Header Profissional */}
      <header>
        <h1>WEB3 <span>DASHBOARD</span></h1>
        <p style={{color: '#64748b', fontSize: '11px', marginTop: '10px', letterSpacing: '2px', fontWeight: 'bold'}}>
          IMMUTABLE ASSET MANAGEMENT
        </p>
      </header>

      {/* Connection Area */}
      <div style={{display: 'flex', justifyContent: 'center', margin: '30px 0'}}>
        <Connection />
      </div>

      {/* Portfolio Section */}
      <section>
        <p style={{fontSize: '10px', fontWeight: '900', color: '#64748b', letterSpacing: '1px'}}>
          TOTAL PORTFOLIO BALANCE
        </p>
        <div style={{fontSize: '48px', fontWeight: 'bold', margin: '20px 0', color: '#ffffff', fontFamily: 'monospace'}}>
          <Balance />
        </div>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}>
          <span style={{height: '8px', width: '8px', backgroundColor: '#22c55e', borderRadius: '50%'}}></span>
          <span style={{color: '#94a3b8', fontSize: '11px', fontWeight: 'bold'}}>SEPOLIA NETWORK ACTIVE</span>
        </div>
      </section>

      {/* Transaction Section - AQUI ESTAVA O GARGALO */}
      <section>
        <h3 style={{fontSize: '24px', marginBottom: '25px', color: '#f8fafc', borderBottom: '1px solid #1e293b', paddingBottom: '15px', letterSpacing: '1px'}}>
          EXECUTE TRANSFER
        </h3>
        {/* Aumentamos de 350px para 650px para as chaves Ethereum caberem inteiras */}
        <div style={{maxWidth: '850px', margin: '0 auto'}}>
          <Transfer />
        </div>
      </section>

      {/* Footer com seus dados atualizados */}
      <footer className="footer">
        <p style={{color: 'white', fontWeight: 'bold', fontSize: '18px', marginBottom: '5px'}}>Marco Antonio da Silva Ferreira</p>
        <p style={{color: '#38bdf8', fontSize: '12px', fontWeight: 'bold', marginBottom: '20px'}}>Fullstack Blockchain Developer</p>
        
        <div style={{display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center'}}>
          <a href="mailto:masfgroove2012@gmail.com" style={{fontSize: '14px', textDecoration: 'none', color: '#64748b'}}>
            📩 masfgroove2012@gmail.com
          </a>
          <a href="https://wa.me/5511934098878" target="_blank" style={{fontSize: '14px', textDecoration: 'none', color: '#64748b'}}>
            📱 +55 (11) 93406-8878
          </a>
        </div>

        <p style={{marginTop: '40px', fontSize: '9px', color: '#475569', letterSpacing: '2px'}}>
          © 2026 WEB3 TERMINAL • ALL RIGHTS RESERVED
        </p>
      </footer>

    </div>
  );
}

export default App;
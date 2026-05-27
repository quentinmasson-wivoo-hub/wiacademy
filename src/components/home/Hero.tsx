export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ws-dark text-white px-4">
      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/4 w-[700px] h-[700px] rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #451dc7 0%, transparent 70%)' }} />
        <div className="absolute -bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #f9759e 0%, transparent 70%)' }} />
        <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #08f06a 0%, transparent 70%)' }} />
      </div>
      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-xs font-medium mb-10 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-wi-green" style={{ animation: 'pulse 2s infinite' }} />
          Formation certifiée QUALIOPI — Wivoo × Wavestone
        </div>

        {/* Headline */}
        <h1 className="font-black leading-[0.92] tracking-tight mb-6"
          style={{ fontSize: 'clamp(2.8rem, 9vw, 7rem)' }}>
          Devenez expert<br />
          <span className="text-wi-rose">Product,</span>{' '}
          <span className="text-wi-green">Data</span>{' '}
          &amp;{' '}
          <span style={{ color: '#a78bfa' }}>IA</span>
        </h1>

        <p className="opacity-65 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2.2vw, 1.25rem)' }}>
          Formez-vous avec les meilleurs experts terrain, issus des plus grandes entreprises tech françaises.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/formations"
            className="w-full sm:w-auto px-8 py-4 bg-wi-rose text-white font-bold text-base rounded-xl hover:bg-wi-rose/90 transition-colors flex items-center justify-center gap-2 group">
            Je me forme
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
          <a href="/formations"
            className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-bold text-base rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group backdrop-blur-sm">
            Je forme mes équipes
            <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-50">
          <div className="flex -space-x-2">
            {[{ i: 'JD', c: '#f9759e' }, { i: 'TS', c: '#401fbf' }, { i: 'RD', c: '#08f06a' }, { i: 'SN', c: '#451dc7' }].map(({ i, c }) => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-ws-dark flex items-center justify-center text-xs font-black text-white"
                style={{ background: c }}>{i}</div>
            ))}
          </div>
          <span className="text-sm">8 experts terrain · note moyenne 4,9/5</span>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/60" />
      </div>
    </section>
  )
}

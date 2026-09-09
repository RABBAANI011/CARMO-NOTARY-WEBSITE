function About() {
  return (
    <section className="min-h-screen bg-[var(--color-background)] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-secondary)]">
          About CARMO
        </p>

        <h1 className="max-w-3xl text-5xl font-bold leading-tight text-[var(--color-primary)] md:text-6xl">
          Professional Notary Services You Can Trust
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
          CARMO provides professional notary services with a focus on
          clarity, security, convenience, and dependable service for
          individuals and businesses in Somalia.
        </p>
      </div>
    </section>
  );
}

export default About;
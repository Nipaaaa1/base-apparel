function App() {
  return (
    <>
      <main className="relative flex h-screen w-screen bg-firstGradient">
        <nav className="absolute left-56 top-16">
          <img src="/images/logo.svg" alt="Logo" />
        </nav>
        <section className="md:bg-patternDesktop w-full space-y-10 bg-cover bg-center bg-no-repeat p-56">
          <h1 className="tracking-heading text-8xl font-semibold uppercase text-darkGrayishRed">
            <span className="font-light text-desaturatedRed">We're</span> coming
            soon
          </h1>
          <p className="text-md w-4/5 text-pretty font-semibold tracking-wide text-desaturatedRed">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form action="" className="relative w-4/5">
            <input
              className="w-full rounded-full border-2 bg-transparent px-6 py-4"
              type="email"
              placeholder="Email Address"
            />
            <button
              type="submit"
              className="absolute right-0 rounded-full bg-secondGradient px-12 py-5 shadow-xl shadow-softRed/30 transition ease-in-out hover:brightness-125"
            >
              <img src="/images/icon-arrow.svg" alt="Submit" />
            </button>
          </form>
        </section>
        <img className="h-screen w-max" src="/images/hero-desktop.jpg" alt="" />
      </main>
    </>
  );
}

export default App;

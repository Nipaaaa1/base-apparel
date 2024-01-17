import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="font-josefinSans relative flex h-svh w-full flex-col bg-firstGradient md:flex-row">
        <Navbar />
        <section className="md:bg-patternDesktop order-2 flex w-full flex-col justify-center gap-10 bg-cover bg-center bg-no-repeat p-10 md:order-1 md:p-56">
          <h1 className="md:tracking-heading text-center text-5xl font-semibold uppercase tracking-widest text-darkGrayishRed md:text-left md:text-8xl">
            <span className="font-light text-desaturatedRed">We're</span> coming
            soon
          </h1>
          <p className="text-pretty text-center text-sm font-semibold leading-6  tracking-wide text-desaturatedRed md:w-4/5 md:text-left md:text-lg">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form action="" className="relative w-full md:w-4/5">
            <input
              className="w-full rounded-full border-2 border-desaturatedRed/40 bg-transparent px-5 py-3 placeholder:font-semibold placeholder:text-desaturatedRed placeholder:opacity-50 md:px-6 md:py-4"
              type="email"
              placeholder="Email Address"
            />
            <button
              type="submit"
              className="absolute right-0 rounded-full bg-secondGradient px-7 py-4 shadow-xl shadow-softRed/30 transition ease-in-out  hover:brightness-125 md:px-12 md:py-5"
            >
              <img src="/images/icon-arrow.svg" alt="Submit" />
            </button>
          </form>
        </section>
        <img
          className=" order-2 hidden h-screen w-max md:block"
          src="/images/hero-desktop.jpg"
          alt=""
        />
        <img
          className="order-1 h-max w-full md:hidden "
          src="/images/hero-mobile.jpg"
          alt=""
        />
      </main>
    </>
  );
}

export default App;

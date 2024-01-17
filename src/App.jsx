import { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  const [error, setError] = useState(false);
  return (
    <>
      <main className="font-josefinSans relative flex h-svh w-full flex-col bg-firstGradient md:flex-row">
        <Navbar />
        <section className="md:bg-patternDesktop order-2 flex h-full w-full flex-col justify-center gap-10 bg-cover bg-center bg-no-repeat p-10 md:order-1 md:p-56">
          <h1 className="md:tracking-heading text-center text-5xl font-semibold uppercase tracking-widest text-darkGrayishRed md:text-left md:text-8xl">
            <span className="font-light text-desaturatedRed">We're</span> coming
            soon
          </h1>
          <p className="text-pretty text-center text-sm font-semibold leading-6  tracking-wide text-desaturatedRed md:w-4/5 md:text-left md:text-lg">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form action="/" className="relative w-full md:w-4/5">
            <input
              className="invalid:bg-errorIcon invalid:bg-invalidMobile md:invalid:bg-invalid w-full rounded-full border-2 border-desaturatedRed/40 bg-transparent px-5 py-3 placeholder:font-semibold placeholder:text-desaturatedRed placeholder:opacity-50 invalid:border-red-600 invalid:bg-no-repeat md:px-6 md:py-4"
              type="email"
              placeholder="Email Address"
              pattern="/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/"
              onInvalid={() => setError(!error)}
            />
            <button
              type="submit"
              className="absolute right-0 rounded-full bg-secondGradient px-7 py-4 shadow-xl shadow-softRed/30 transition ease-in-out  hover:brightness-125 md:px-12 md:py-5"
            >
              <img src="/images/icon-arrow.svg" alt="Submit" />
            </button>
            {error && (
              <p className="m-4 text-red-600">Please provide a valid email</p>
            )}
          </form>
        </section>
        <Hero />
      </main>
    </>
  );
}

export default App;

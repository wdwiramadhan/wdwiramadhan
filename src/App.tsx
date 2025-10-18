const App = () => {
  return (
    <main className="h-screen w-full bg-slate-50 flex">
      <section className="flex max-w-4xl container mx-auto mt-24 px-4">
        <div className="flex flex-col w-full">
          <h1 className="text-3xl font-medium text-slate-700">Wahyu Dwi Ramadhan</h1>
          <p className="text-lg text-slate-600 font-light mt-2">Software Engineer at Tiket.com</p>
          <div className="flex gap-2 mt-3">
            <a
              href="https://www.linkedin.com/in/wdwiramadhan"
              target="_self"
              rel="noopener noreferrer"
              className="text-md text-gray-600 font-light hover:text-indigo-400"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/wdwiramadhan"
              target="_self"
              rel="noopener noreferrer"
              className="text-md text-gray-600 font-light hover:text-indigo-400"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;

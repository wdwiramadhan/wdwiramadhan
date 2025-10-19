const App = () => {
  return (
    <main className="container mx-auto max-w-4xl px-4">
      <section className="mt-16">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-2xl font-medium text-gray-700">Wahyu Dwi Ramadhan</h1>
          <p className="text-md text-gray-500 font-light">Software Engineer at Tiket.com</p>
          <div className="flex gap-2">
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

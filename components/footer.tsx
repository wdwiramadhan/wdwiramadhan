import Container from "./container";

export default function Footer() {
  const yearNow = new Date().getFullYear();
  return (
    <footer className="mt-12 mb-3">
      <Container>
        <div className="flex flex-col text-center">
          <p className="text-sm text-gray-700">
            ©{yearNow} - Built with
            <span>
              <a
                href="https://nextjs.org/"
                className="ml-1 text-gray-700 hover:text-blue-600"
                target="_blank"
                rel="noreferrer"
                aria-label="next link"
              >
                Next.js
              </a>
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center py-10 px-14">
      <aside className="grid-flow-col items-center">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a></a>
        <a></a>
        <a></a>
      </nav>
    </footer>
  );
};

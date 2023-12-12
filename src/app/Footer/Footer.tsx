export default function Footer() {
  return (
    <div className="px-2">
      <footer className="footer justify-center p-4 bg-neutral max-w-7xl min-w-[300px] mx-auto my-2 rounded-3xl border-t-2">
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </footer>
    </div>
  );
}

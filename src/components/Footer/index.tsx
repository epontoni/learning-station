import "./Footer.css";

export default function Footer() {
  return (
    <footer className="d-flex justify-content-center align-items-center">
      <span><span className="text-secondary">&copy; {new Date().getFullYear()}</span> Learning Station</span>
    </footer>
  );
}

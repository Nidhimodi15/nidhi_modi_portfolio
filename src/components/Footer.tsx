export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">Nidhi Modi</span>. Built with passion for AI & ML.
        </p>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Erik Mende
      </p>
    </footer>
  )
}

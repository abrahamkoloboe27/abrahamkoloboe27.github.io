import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Abraham KOLOBOE. All rights reserved.
        </p>
        <p className="footer-built">
          Built with <span className="accent">React</span> &amp; Vite · Deployed on{' '}
          <a href="https://abrahamkoloboe27.github.io" target="_blank" rel="noopener noreferrer" className="accent">
            GitHub Pages
          </a>
        </p>
      </div>
    </footer>
  )
}

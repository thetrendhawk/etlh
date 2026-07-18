import { Link } from "@tanstack/react-router";
import { openAnalyticsPreferences } from "@/components/AnalyticsConsent";

export function SiteFooter() {
  return (
    <footer className="bg-earth-900 text-earth-100 py-16 mt-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-6">
          <Link to="/" className="font-serif text-3xl block">
            Eco Tiny Living Hub
          </Link>
          <p className="text-earth-100/70 max-w-sm leading-relaxed">
            Empowering small apartment dwellers to live more sustainably without spending a fortune. Progress over perfection, always.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-6 uppercase text-xs tracking-widest text-moss-light font-sans">Quick Links</h4>
          <ul className="space-y-4 text-earth-100/70 text-sm">
            <li><Link to="/blog" className="hover:text-earth-100">Blog</Link></li>
            <li><Link to="/resources" className="hover:text-earth-100">Resources</Link></li>
            <li><Link to="/about" className="hover:text-earth-100">About</Link></li>
            <li><Link to="/contact" className="hover:text-earth-100">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-6 uppercase text-xs tracking-widest text-moss-light font-sans">Follow Along</h4>
          <ul className="space-y-4 text-earth-100/70 text-sm">
            <li>
              <a href="https://www.pinterest.com/ecotinylivinghub/" target="_blank" rel="noopener noreferrer" className="hover:text-earth-100">
                Pinterest
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/ecotinylivinghub/" target="_blank" rel="noopener noreferrer" className="hover:text-earth-100">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-xs text-earth-100/60 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
        <p>© {new Date().getFullYear()} Eco Tiny Living Hub. Progress over perfection.</p>
        <nav aria-label="Policies and preferences" className="flex flex-wrap gap-x-5 gap-y-2">
          <Link to="/editorial-policy" className="hover:text-earth-100">Editorial Policy</Link>
          <Link to="/privacy" className="hover:text-earth-100">Privacy</Link>
          <Link to="/terms" className="hover:text-earth-100">Terms</Link>
          <Link to="/affiliate-disclosure" className="hover:text-earth-100">Affiliate Disclosure</Link>
          <button type="button" onClick={openAnalyticsPreferences} className="hover:text-earth-100">
            Analytics preferences
          </button>
        </nav>
      </div>
    </footer>
  );
}

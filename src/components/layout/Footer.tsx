import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import { companyInfo, navigation } from '@/lib/data';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-solidbp-gray-dark text-white">
      {/* CTA Section */}
      <div className="bg-solidbp-blue">
        <div className="container-custom py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Klaar voor uw project?
              </h3>
              <p className="text-white/80">
                Vraag vandaag nog een gratis offerte aan en ontvang binnen 24 uur een reactie.
              </p>
            </div>
            <Link
              to="/offerte"
              className="inline-flex items-center gap-2 px-8 py-4 bg-solidbp-orange text-white font-semibold rounded-lg hover:bg-solidbp-orange-dark transition-colors whitespace-nowrap"
            >
              Gratis offerte
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-solidbp-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">Solidbp</span>
            </div>
            <p className="text-gray-400 mb-6">
              Dé specialist in duurzame betonoplossingen in Limburg. 
              Betonreparatie, coatings en vloerherstel van de hoogste kwaliteit.
            </p>
            <div className="flex gap-4">
              {companyInfo.socialLinks.facebook && (
                <a
                  href={companyInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-solidbp-orange transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {companyInfo.socialLinks.linkedin && (
                <a
                  href={companyInfo.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-solidbp-orange transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {companyInfo.socialLinks.instagram && (
                <a
                  href={companyInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-solidbp-orange transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Diensten</h4>
            <ul className="space-y-3">
              {navigation.footer.diensten.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Sectoren</h4>
            <ul className="space-y-3">
              {navigation.footer.sectoren.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-solidbp-orange" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-solidbp-orange" />
                  {companyInfo.email}
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-5 h-5 text-solidbp-orange flex-shrink-0 mt-0.5" />
                  <span>
                    {companyInfo.address.street}<br />
                    {companyInfo.address.postalCode} {companyInfo.address.city}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.legalName}. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacybeleid
              </Link>
              <Link to="/algemene-voorwaarden" className="text-gray-400 hover:text-white transition-colors">
                Algemene voorwaarden
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-preact";
import {
  footerLinksData,
  footerBehindScenesData,
  footerBottomLinks,
} from "../data/footer";

export function FooterSection() {
  return (
    <footer
      className="bg-black text-gray-500 py-24 border-t border-white/5"
      data-purpose="site-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-1">
            <span className="text-2xl font-bold text-white block mb-8 hover:text-blue-400 transition-colors cursor-pointer w-max">
              BrilliantOSS
            </span>
          </div>
          {footerLinksData.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-4 text-sm font-medium">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a className="hover:text-white transition-colors" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-span-2 lg:col-span-2">
            <h4 className="text-white font-bold mb-8 text-sm uppercase tracking-wider">
              Behind the scenes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm font-medium">
              {footerBehindScenesData.map((col, colIdx) => (
                <ul key={colIdx} className="space-y-4">
                  {col.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        className="hover:text-white transition-colors"
                        href="#"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-8">
          <div className="flex gap-6 text-gray-500">
            <a
              className="hover:text-white hover:-translate-y-1 transition-all"
              href="#"
            >
              <Facebook size={20} />
            </a>
            <a
              className="hover:text-white hover:-translate-y-1 transition-all"
              href="#"
            >
              <Instagram size={20} />
            </a>
            <a
              className="hover:text-white hover:-translate-y-1 transition-all"
              href="#"
            >
              <Twitter size={20} />
            </a>
            <a
              className="hover:text-white hover:-translate-y-1 transition-all"
              href="#"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] uppercase font-bold tracking-[0.2em] text-gray-600">
            {footerBottomLinks.map((link, idx) => (
              <a
                key={idx}
                className="hover:text-white transition-colors"
                href="#"
              >
                {link}
              </a>
            ))}
            <span className="text-gray-700">© 2024 BrilliantOSS, Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

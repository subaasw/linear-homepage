export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 border-t border-[#23252a]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block">
              <svg
                width="20"
                height="20"
                viewBox="0 0 100 100"
                fill="currentColor"
                aria-label="Linear Logo"
                color="currentColor"
                className="hover:text-current/60 transition-colors duration-150 delay-50"
              >
                <path d="M1.22541 61.5228c-.2225-.9485.90748-1.5459 1.59638-.857L39.3342 97.1782c.6889.6889.0915 1.8189-.857 1.5964C20.0515 94.4522 5.54779 79.9485 1.22541 61.5228ZM.00189135 46.8891c-.01764375.2833.08887215.5599.28957165.7606L52.3503 99.7085c.2007.2007.4773.3075.7606.2896 2.3692-.1476 4.6938-.46 6.9624-.9259.7645-.157 1.0301-1.0963.4782-1.6481L2.57595 39.4485c-.55186-.5519-1.49117-.2863-1.648174.4782-.465915 2.2686-.77832 4.5932-.92588465 6.9624ZM4.21093 29.7054c-.16649.3738-.08169.8106.20765 1.1l64.77602 64.776c.2894.2894.7262.3742 1.1.2077 1.7861-.7956 3.5171-1.6927 5.1855-2.684.5521-.328.6373-1.0867.1832-1.5407L8.43566 24.3367c-.45409-.4541-1.21271-.3689-1.54074.1832-.99132 1.6684-1.88843 3.3994-2.68399 5.1855ZM12.6587 18.074c-.3701-.3701-.393-.9637-.0443-1.3541C21.7795 6.45931 35.1114 0 49.9519 0 77.5927 0 100 22.4073 100 50.0481c0 14.8405-6.4593 28.1724-16.7199 37.3375-.3903.3487-.984.3258-1.3542-.0443L12.6587 18.074Z"></path>
              </svg>

              {/* <div className="w-8 h-8 bg-white rounded-full" /> */}
            </a>
          </div>

          {/* Features Column */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-4">Features</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/plan"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Plan
                </a>
              </li>
              <li>
                <a
                  href="/build"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Build
                </a>
              </li>
              <li>
                <a
                  href="/insights"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Insights
                </a>
              </li>
              <li>
                <a
                  href="/customer-requests"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Customer Requests
                </a>
              </li>
              <li>
                <a
                  href="/linear-asks"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Linear Asks
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="/mobile"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Mobile
                </a>
              </li>
            </ul>
          </div>

          {/* Product Column */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/pricing"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="/method"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Method
                </a>
              </li>
              <li>
                <a
                  href="/integrations"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="/changelog"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="/documentation"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="/download"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="/switch"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Switch
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/about"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/customers"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/readme"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  README
                </a>
              </li>
              <li>
                <a
                  href="/quality"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Quality
                </a>
              </li>
              <li>
                <a
                  href="/brand"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Brand
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/api"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="/status"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Status
                </a>
              </li>
              <li>
                <a
                  href="/startups"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Startups
                </a>
              </li>
              <li>
                <a
                  href="/report-issue"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Report issue
                </a>
              </li>
              <li>
                <a
                  href="/dpa"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  DPA
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="col-span-1">
            <h3 className="font-semibold text-sm mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/contact"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Contact us
                </a>
              </li>
              <li>
                <a
                  href="/community"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="/twitter"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  X (Twitter)
                </a>
              </li>
              <li>
                <a
                  href="/github"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="/youtube"
                  className="text-[#8a8f98] text-sm hover:text-white transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

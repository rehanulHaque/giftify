import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-100 px-4 py-10 mt-16">
      <div className="max-w-7xl mx-auto text-sm text-gray-700 flex flex-col md:flex-row items-center md:justify-evenly">
        {/* Logo on top for small screens */}
        <div className="flex flex-col gap-4 justify-center sm:justify-start mb-6">
          <Image src="/main_logo.jpg" alt="Company Logo" width={120} height={120} className="sm:mx-0 rounded-full" />
          <p>Find The Perfect Gift</p>
        </div>

        {/* Links in row on small screens */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-10">
          <div className="flex gap-8">
          <div className="flex flex-col sm:text-left">
            <h3 className="font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
            <li>
                <Link href="/home">Home</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/termsandconditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:text-left">
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul className="space-y-1">
              <li><Link href="/categories/t-shirts">T-Shirts</Link></li>
              <li><Link href="/categories/jeans">Jeans</Link></li>
              <li><Link href="/categories/bottles">Bottles</Link></li>
              <li><Link href="/categories/wallets">Wallets</Link></li>
            </ul>
          </div>
          </div>

          <div className="flex flex-col sm:text-left">
            <h3 className="font-semibold mb-2">Contact Info</h3>
            <ul className="space-y-1">
              <li>Email: support@giftify.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Address: 123 Gifting Street, India</li>
            </ul>
          </div>
        </div>

        
      </div>
      <div className="text-center text-xs text-gray-500 mt-10">
          &copy; {new Date().getFullYear()} Giftify. All rights reserved.
        </div>
    </footer>
  );
}
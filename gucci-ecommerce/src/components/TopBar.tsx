import { Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function TopBar() {
  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 text-sm">
        {/* Left */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Menu size={18} />
          <span className="uppercase tracking-wider">Menu</span>
        </div>

        {/* Center */}
        <div className="text-gray-600">
          📞 Hotline hỗ trợ: <span className="font-medium">0359 329 688</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <span className="cursor-pointer">🔍</span>
          <span className="cursor-pointer relative">
          <Link to="/cart">🛒</Link>
            <span className="absolute -top-2 -right-3 bg-black text-white text-xs rounded-full px-1">
              0
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

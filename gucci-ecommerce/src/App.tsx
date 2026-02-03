import Navbar from "./components/Navbar";
import TopBar from "./components/Topbar";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <TopBar />
      <Header />
      <Home />
    </div>
  );
}

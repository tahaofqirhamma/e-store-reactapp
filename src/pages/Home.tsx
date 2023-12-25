import { Link } from "react-router-dom";
import bg1 from "../assets/bg1.jpg";
function Home() {
  return (
    <section className="flex flex-row h-full w-full">
      <div className="flex flex-col items-center justify-center text-center w-full gap-4 bg-[#f0f1f2]">
        <h1 className="text-6xl font-bold text-center">
          Welcome to e-store app
        </h1>
        <p className="text-2xl">The best app to follow your sales</p>
        <button className="bg-[#00807f] py-2 px-4 text-white font-semibold rounded-lg">
          <Link to={`/Home/products`}>Start buying the best products </Link>
        </button>
      </div>
      <img src={bg1} alt="bg" className="w-1/2" />
    </section>
  );
}

export default Home;

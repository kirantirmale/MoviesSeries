import Title from "./Title";

export default function Header() {
  return (
    <div>
      <header className="flex justify-between items-center top-0 fixed w-full px-4 sm:px-6 sm:py-4 bg-blue-500 text-white main-head">
        <div className="flex items-center">
          <span className="text-lg sm:text-xl font-bold">DEMO Streaming</span>
        </div>
        <div className="flex items-center">
          <a href="#" className="text-white-300 mr-2 sm:mr-4">Log In</a>
          <button className="bg-gray-800 text-white font-bold py-2 px-3 sm:px-4 rounded">
            Start Your Free Trial
          </button>
        </div>
      </header>
      <Title title="Title"/>
    </div>
  );
}

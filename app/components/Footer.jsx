export default function Footer() {
  return (
    <div>
      <footer className="bg-white shadow dark:bg-gray-800 fixed bottom-0 w-full foot">
        <div className="w-full max-w-screen-xl mx-auto p-2 sm:p-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap items-center mb-4 sm:mb-0 text-sm sm:text-base font-medium text-gray-900 dark:text-white">
              <li>
                <a href="#" className="hover:underline me-2 sm:me-4">Home</a>
              </li> 
              <li>
                <a href="#" className="hover:underline me-2 sm:me-4">Terms and Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-2 sm:me-4">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:underline me-2 sm:me-4">Collection Statement</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Help</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Manage Account</a>
              </li>
            </ul>
          </div>
          <hr className="my-2 sm:my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-xs sm:text-sm text-gray-500 sm:text-left dark:text-white-400">
            Copyrigth © 2016 <a href="#" className="hover:underline">DEMO Streaming</a>. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

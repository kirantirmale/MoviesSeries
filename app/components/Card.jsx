import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="container mx-auto dark:bg-white-800 main-card">
        <div className="container mx-auto">
          <div className="home">
            <div className="flex flex-col sm:flex-row p-4 sm:p-10">
              <div className="text-center px-4 mb-4 sm:mb-0">
              
                  <Link href="/Series" className="block max-w-sm py-16 px-8 sm:py-24 sm:px-12 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">SERIES</h5>
                  </Link>
            
                <p className="text-left text-sm">Popular series</p>
              </div>
              <div className="text-center px-4">
                
                  <Link href="/Movies" className="block max-w-sm py-16 px-8 sm:py-24 sm:px-12 bg-white border border-gray-200 shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h5 className="mb-2 text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">MOVIES</h5>
                  </Link>
              
                <p className="text-left text-sm">Popular Movies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

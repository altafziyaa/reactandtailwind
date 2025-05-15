export default function NotifySection() {
    return (
      <div className="relative bg-[#0F172A] rounded-3xl overflow-hidden py-20 px-6 sm:px-10 text-center shadow-xl max-w-5xl mx-auto my-10">
        <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 h-72 w-96 bg-purple-700 opacity-20 blur-[100px] pointer-events-none" />
  
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">

        </p>
  
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-md bg-[#1E293B] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full sm:w-auto flex-grow"
          />
          <button
            type="submit"
            className="bg-white text-gray-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-200 transition"
          >
            Notify me
          </button>
        </form>
      </div>
    );
  }
  
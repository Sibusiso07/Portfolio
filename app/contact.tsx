export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center h-96 text-white">
          <div className="max-w-md p-8 bg-gray-800 rounded-md shadow-lg">
            <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
    
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Name:
              </label>
              <p id="name" className="mt-1 text-lg">
                Sibusiso Simelane
              </p>
            </div>
    
            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number:
              </label>
              <p id="phone" className="mt-1 text-lg">
                0760764582
              </p>
            </div>
    
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
                Email Address:
              </label>
              <p id="email" className="mt-1 text-lg">
                93.july.31@gmail.com
              </p>
            </div>
    
            {/* Add additional form fields or details as needed */}
    
            <div className="mt-6">
              <p className="text-sm">
                Feel free to reach out to me using the provided information.
              </p>
            </div>
          </div>
        </div>
      );
}
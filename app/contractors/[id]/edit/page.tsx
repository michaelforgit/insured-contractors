import React from 'react';

const App = () => {
  return (
    <div className="grid justify-center  text-black truncate bg-white p-4" >
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
      <div className="mb-4 flex flex-col gap-6 pt-6 text-black truncate">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">
              Company Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Company" type="text" placeholder="Company"/>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="email"/>
          </div>
          <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
            City
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="city"
            type="text"
            placeholder="City"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
            State
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="state"
            type="text"
            placeholder="State"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zip">
            Zip Code
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="zip"
            type="text"
            placeholder="Zip Code"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="insuranceName">
            Insurance Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="insuranceName"
            type="text"
            placeholder="Insurance Name"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="insurancePhone">
            Insurance Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="insurancePhone"
            type="text"
            placeholder="Insurance Phone"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="insuranceEmail">
            Insurance Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="insuranceEmail"
            type="text"
            placeholder="Insurance Email"
          />
        </div>
      </div>
      
      <button className="w-full mt-8 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      > Update </button>

      </form>
    </div>

);
}

export default App;

import { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import countryList from "react-select-country-list";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; 

const Register = () => {

    const [selectedCountry,setSelectedCountry] = useState(null)
    const countries = countryList().getData()

    const handleCountrychange = (selectedOption) =>{
        setSelectedCountry(selectedOption)
    }

    const [birthDate, setBirthDate] = useState(null)

  return (
    <div className="flex flex-col justify-center items-center mt-10 text-center">
      <main className="bg-white max-md:px-8 rounded-lg w-full max-w-md text-center">
        <h2 className="text-xs mb-6 text-left">CREATE ACCOUNT</h2>
        <form className="space-y-6">
          <div className="relative flex flex-col mb-4">
            <input
              type="text"
              id="username"
              className="peer h-10 w-full border-b border-gray-600 text-xs text-black-300 placeholder-transparent transition-colors focus:outline-none text-left"
              placeholder="Email Adress"
            />
            <label
              htmlFor="username"
              className="absolute cursor-text left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black-600 peer-focus:text-xs duration-500"
            >
              Email Addres*
            </label>
          </div>
          <div className="relative flex flex-col mb-4">
            <input
              type="password"
              id="password"
              className="peer h-10 w-full border-b border-gray-600 focus:border-black-600 text-black-600 placeholder-transparent focus:outline-none text-left"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className="absolute cursor-text left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black-600 peer-focus:text-xs duration-500"
            >
              Password*
            </label>
          </div>
          <div className="relative flex flex-col mb-4">
            <input
              type="password"
              id="c-password"
              className="peer h-10 w-full border-b border-gray-600 text-black-300 placeholder-transparent transition-colors focus:outline-none text-left"
              placeholder="Email Adress"
            />
            <label
              htmlFor="c-password"
              className="absolute cursor-text left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black-600 peer-focus:text-xs duration-500"
            >
              Confirm Password*
            </label>
          </div>
          <div className="relative flex flex-col mb-4">
            <input
              type="text"
              id="f-name"
              className="peer h-10 w-full border-b border-gray-600 focus:border-black-600 text-black-600 placeholder-transparent focus:outline-none text-left"
              placeholder="Password"
            />
            <label
              htmlFor="f-name"
              className="absolute cursor-text left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black-600 peer-focus:text-xs duration-500"
            >
              First Name*
            </label>
          </div>
          <div className="relative flex flex-col mb-4">
            <input
              type="text"
              id="l-name"
              placeholder=""
              className="peer h-10 w-full border-b border-gray-600 text-black-300 placeholder-transparent transition-colors focus:outline-none text-left"

            />
            <label
              htmlFor="l-name"
              className="absolute cursor-text left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black-600 peer-focus:text-xs duration-500"
            >
              Last Name*
            </label>
          </div>
          <div className="relative flex flex-col my-7">
              <Select
              options={countries}
              value={selectedCountry}
              onChange={handleCountrychange}
              placeholder='Select Country'
              htmlFor="country"
              className=" mt-2 peer h-10 w-full  text-black-300 placeholder-transparent transition-colors focus:outline-none text-left"
            />
            <label
              htmlFor="Country"
              className="absolute cursor-text left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black-600 peer-focus:text-xs duration-500"
            >
              Country*
            </label>
          </div>

          <div className="relative flex flex-col mb-4">
              <DatePicker
                selected={birthDate}
                onChange={(date) => setBirthDate(date)}
                dateFormat="dd/MM/yyyy"
                maxDate={new Date()} 
                showYearDropdown 
                showMonthDropdown 
                dropdownMode="select" 
                placeholderText="00/00/0000"
                className="peer h-10 w-full border-b border-gray-600 text-black-300 placeholder-transparent transition-colors focus:outline-none text-left"
                />
            <label
              htmlFor="birthdate"
              className="absolute cursor-text left-0 -top-3.5 text-gray-600 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-black-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black-600 peer-focus:text-xs duration-500"
            >
              Birthday (mm/dd/yyyy)
            </label>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-black border border-white tranasition-all duration-300 ease-in-out py-3 hover:bg-white hover:text-black hover:border-black"
          >
            SIGN IN
          </button>
            <Link to={"/login"} type="submit">
          <button className="mt-3 w-full bg-white text-black border border-black transition-all duration-300 ease-in-out py-3 hover:bg-black hover:text-white">
              CANCEL
          </button>
            </Link>
          <div className="flex flex-col items-baseline">
            <div className="mb-4">
              <label htmlFor="agree" className="text-xs flex items-center">
                <input type="checkbox" className="mr-2 text-xs" />
                <span className="text-xs text-left">
                  I agree with the{" "}
                  <span className="underline text-xs">
                    terms and conditions
                  </span>{" "}
                  and <span className="underline text-xs">privacy policy</span>
                </span>
              </label>
            </div>
            <div className="mb-4">
              <label className="text-xs flex items-center">
                <input type="checkbox" className="mr-2" />
                Sign me up for the mailing list
              </label>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Register;

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CaptainSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { captain, setCaptain } = useContext(CaptainDataContext);
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        capacity: vehicleCapacity,
        plate: vehiclePlate,
        vehicleType: vehicleType
      }
    }

    const response = await axios.post(
      'http://localhost:5000/api/captains/register',
      captainData
    )

    if(response.status == 201){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token', data.token)
      navigate('/captain-home')
    }

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setVehicleColor('')
    setVehicleCapacity('')
    setVehiclePlate('')
    setVehicleType('')
  };

  const vehicleTypes = ['Sedan', 'SUV', 'Hatchback', 'Auto', 'Moto'];

  return (
    <div>
      <div className='p-7 h-screen flex flex-col justify-between'>
        <div>
          <Link to='/'>
            <img
              className='w-16 mb-10'
              src='https://pngimg.com/d/uber_PNG24.png'
              alt='Uber Logo'
            />
          </Link>

          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className='text-lg font-medium mb-2'>
              What should we call you captain?
            </h3>

            <div className='flex gap-4 mb-6'>
              <input
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-sm'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                type='text'
                placeholder='First Name'
              />

              <input
                className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-sm'
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                placeholder='Last Name'
              />
            </div>

            <h3 className='text-lg font-medium mb-2'>Email</h3>
            <input
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              placeholder='email@example.com'
            />

            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
            <input
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              placeholder='password'
            />

            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
            <div className='flex gap-4 mb-7'>
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                type='text'
                placeholder='Vehicle Color'
                value={vehicleColor}
                onChange={(e) => {
                  setVehicleColor(e.target.value);
                }}
              />
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                type='text'
                placeholder='Vehicle Plate'
                value={vehiclePlate}
                onChange={(e) => {
                  setVehiclePlate(e.target.value);
                }}
              />
            </div>
            <div className='flex gap-4 mb-7'>
              <input
                required
                className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                type='number'
                placeholder='Vehicle Capacity'
                value={vehicleCapacity}
                onChange={(e) => {
                  setVehicleCapacity(e.target.value);
                }}
              />

              {/* Custom Dropdown */}
              <div className='relative w-1/2'>
                <button
                  type='button'
                  className='bg-[#eeeeee] w-full rounded-lg px-4 py-2 border text-lg placeholder:text-base text-left'
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {vehicleType || 'Select Vehicle Type'}
                </button>
                {isDropdownOpen && (
                  <ul className='absolute z-10 bg-white border border-gray-300 rounded-lg max-h-40 overflow-y-auto w-full mt-2 shadow-lg'>
                    {vehicleTypes.map((type) => (
                      <li
                        key={type}
                        className='px-4 py-2 cursor-pointer hover:bg-gray-200'
                        onClick={() => {
                          setVehicleType(type);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <button
              className='bg-[#111] text-white font-semibold mb-2 rounded-md px-4 py-2 w-full text-lg'
            >
              Create Captain Account
            </button>
          </form>

          <p className='text-center font-medium'>
            Already a Captain?{' '}
            <Link
              to='/captain-login'
              className='text-black font-medium text-blue-500'
            >
              Login
            </Link>
          </p>
        </div>

        <div>
          <p className='text-[12px] leading-tight text-slate-600 font-medium'>
            This site is protected by reCAPTCHA and the{' '}
            <span className='underline'>Google Privacy Policy </span> and{' '}
            <span className='underline'>Terms of Services apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;

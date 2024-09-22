import React from 'react'

export default function StageOne({formData, handleChange, errors}) {
  return (
    <div className=' flex flex-col gap-3'>
        <div className="flex flex-col">
                <label htmlFor="registerAs" className="text-white mb-2 font-semibold">Register As:</label>
                <select
                  name="registerAs"
                  value={formData.registerAs}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-400 focus:ring focus:ring-green-400 outline-none transition duration-300   hover:bg-opacity-80 hover:bg-black"
                  id="registerAs"
                >
                  <option value="user">User</option>
                  <option value="team">Team</option>
                </select>
              </div>
              <div className="flex flex-col">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300"
                    placeholder="First name"
                  />
                  {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                </div>
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300"
                    placeholder="Last name"
                  />
                  {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                </div>
                <div className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300"
                    placeholder="Email"
                  />
                  {errors.email && <span className="text-red-500">{errors.email}</span>}
                </div>
                <div className="flex flex-col">
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300"
                    placeholder="Password"
                  />
                  {errors.password && <span className="text-red-500">{errors.password}</span>}
                </div>
                <div className="flex flex-col">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-md p-3 bg-black bg-opacity-30 text-white focus:border-green-500 focus:ring focus:ring-green-500 outline-none transition duration-300"
                    placeholder="Confirm password"
                  />
                  {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword}</span>}
                </div>
      
    </div>
  )
}

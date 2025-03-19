import React from "react";
import { FaSearch, FaSyncAlt } from "react-icons/fa";
import { FaMousePointer, FaThLarge, FaDownload, FaPlus } from "react-icons/fa";
const employees = [
  { id: 1, empId: "123456789", name: "Md. Shoaib Shifat", email: "abdulhadi@gmail.com", department: "IT", designation: "Developer" },
  { id: 2, empId: "987456321", name: "MD Masuk Kabir", email: "rakibhasan@gmail.com", department: "Construction", designation: "Site Engineer" },
  { id: 3, empId: "987654321", name: "Md. Shoaib Shifat", email: "abdulhadi@gmail.com", department: "Construction", designation: "Contractor" },
  { id: 4, empId: "123654789", name: "MD Masuk Kabir", email: "rakibhasan@gmail.com", department: "Construction", designation: "Site Engineer" },
  { id: 5, empId: "147852369", name: "Md. Shoaib Shifat", email: "abdulhadi@gmail.com", department: "Construction", designation: "Site Engineer" },
  { id: 6, empId: "369852147", name: "MD Masuk Kabir", email: "rakibhasan@gmail.com", department: "IT", designation: "SEO" },
  { id: 7, empId: "741258963", name: "Md. Shoaib Shifat", email: "abdulhadi@gmail.com", department: "IT", designation: "UI/UX Designer" },
  { id: 8, empId: "963258741", name: "MD Masuk Kabir", email: "rakibhasan@gmail.com", department: "Tender", designation: "Contractor" },
  { id: 9, empId: "741258963", name: "Md. Shoaib Shifat", email: "abdulhadi@gmail.com", department: "IT", designation: "SEO" },
  { id: 10, empId: "741258963", name: "MD Masuk Kabir", email: "rakibhasan@gmail.com", department: "IT", designation: "Developer" },
];

const EmployeeTable = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between py-4">
        <h2 className="text-2xl font-semibold">Employees</h2>
        <div className="flex space-x-2 bg-gray-100 rounded-lg">
      {[
        { icon: <FaMousePointer size={18} />, key: "cursor" },
        { icon: <FaThLarge size={18} />, key: "grid" },
        { icon: <FaDownload size={18} />, key: "download" },
        { icon: <FaPlus size={18} />, key: "plus" },
      ].map(({ icon, key }) => (
        <button
          key={key}
          className="p-2 border border-[#607FAD] rounded-md transition"
        >
          {icon}
        </button>
      ))}
    </div>
        </div>
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
        
      <div className="flex items-center gap-4 mb-4 justify-end">
      <div className="flex items-center w-64 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
      <input
        type="text"
        placeholder="Search"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
        className="p-2 pl-4 w-64 border-none outline-none text-gray-700"
      />
      <button className="p-2 text-gray-500 hover:text-gray-700">
        <FaSearch />
      </button>
      
    </div>
    <button className="p-2 text-[#607FAD]  border border-[#607FAD]">
        <FaSyncAlt />
      </button>
      </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-200 p-3 text-left">No.</th>
                <th className="border border-gray-200 p-3 text-left">Employee ID</th>
                <th className="border border-gray-200 p-3 text-left">Name</th>
                <th className="border border-gray-200 p-3 text-left">Email</th>
                <th className="border border-gray-200 p-3 text-left">Department</th>
                <th className="border border-gray-200 p-3 text-left">Designation</th>
                <th className="border border-gray-200 p-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 p-3">{emp.id}</td>
                  <td className="border border-gray-200 p-3 text-blue-600 cursor-pointer">{emp.empId}</td>
                  <td className="border border-gray-200 p-3">{emp.name}</td>
                  <td className="border border-gray-200 p-3">{emp.email}</td>
                  <td className="border border-gray-200 p-3">{emp.department}</td>
                  <td className="border border-gray-200 p-3">{emp.designation}</td>
                  <td className="border border-gray-200 p-3 flex space-x-2">
                    <button className="text-blue-600">🔽</button>
                    <button className="text-green-600">👁</button>
                    <button className="text-red-600">🗑</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;

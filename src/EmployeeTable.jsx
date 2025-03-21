import React, { useEffect, useState } from "react";
import { FaRegEye, FaSearch, FaSyncAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PiDownloadSimpleBold, PiPlusBold } from "react-icons/pi";
import Navbar from "./Navbar";
import { LuMousePointer2 } from "react-icons/lu";
import { useGetAllContactQuery } from "./features/contact/contact";
import * as XLSX from "xlsx"; // 📌 Import xlsx for Excel export
import { RxDashboard } from "react-icons/rx";
import SEO from "./SEO";
import { jwtDecode } from "jwt-decode";
// import { jwtDecode } from "jwt-decode";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const { data, isLoading, isError, error } = useGetAllContactQuery();

  useEffect(() => {
    if (isError) {
      console.log("Error fetching employee data", error);
    } else if (!isLoading && data) {
      setEmployees(data.data);
    }
  }, [data, isLoading, isError, error]);

  console.log("employees", employees);

    const [role, setRole] = useState("")

  console.log('role', role)


  useEffect(() =>{
    const token = localStorage.getItem("token") // Replace with your actual JWT token

    if(token){
      try {
        const decodedToken = jwtDecode(token);
        console.log("Decoded Token:", decodedToken.role);
        setRole(decodedToken.role)
      
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, [])

  // 📌 Function to Export Data as Excel
  const exportToExcel = () => {
    if (employees.length === 0) {
      alert("No employee data to export!");
      return;
    } else if(role !=="admin"){
      alert("Only admin can allow to download")
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(employees); // Convert JSON to worksheet
    const workbook = XLSX.utils.book_new(); // Create a new workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees"); // Append sheet
    XLSX.writeFile(workbook, "Employee_Contacts.xlsx"); // Save file
  };



  return (
    <div className="min-h-screen">
      <Navbar />

      <SEO
        title="My Website Home"
        description="This is the home page of my awesome website."
        url="https://example.com"
        image="https://example.com/home-image.jpg"
      />
      
        <div className="bg-gray-100 p-6">
        <div className="flex justify-between py-4">
          <h2 className="text-2xl font-semibold">Employees</h2>
          <div className="flex space-x-2 bg-gray-100 rounded-lg">
            {/* {[
              { icon: <LuMousePointer2 size={18} />, key: "cursor" },
              { icon: <RxDashboard size={18} />, key: "cursor" },
              { icon: <PiDownloadSimpleBold size={18} />, key: "download", action: exportToExcel }, // 📌 Add download action
              { icon: <PiPlusBold size={18} />, key: "plus" },
            ].map(({ icon, key, action }) => ( */}
              <button
                className="rounded-md transition text-[#607FAD]"
                style={{ border: "1px solid #607FAD" }}
              >
                <LuMousePointer2 size={18} />
              </button>
              <button
                className="rounded-md transition text-[#607FAD]"
                style={{ border: "1px solid #607FAD" }}
              >
                <RxDashboard size={18} />
              </button>
              <button
              onClick={exportToExcel}
                className="rounded-md transition text-[#607FAD]"
                style={{ border: "1px solid #607FAD" }}
              >
                <PiDownloadSimpleBold size={18} />
              </button>
              <button
                className="rounded-md transition text-[#607FAD]"
                style={{ border: "1px solid #607FAD" }}
              >
                <PiPlusBold size={18} />
              </button>
            {/* // ))} */}
          </div>
        </div>
        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4 justify-end">
            <div className="flex items-center w-64 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <input
                type="text"
                placeholder="Search"
                className="p-2 pl-4 w-64 border-none outline-none text-gray-700"
              />
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <FaSearch />
              </button>
            </div>
            <button className="p-2 text-[#607FAD] border border-[#607FAD]">
              <FaSyncAlt />
            </button>
          </div>
          <div className="overflow-x-auto">
            {
              role === "admin" ? (
                <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-200 p-3 text-left">No.</th>
                  <th className="border border-gray-200 p-3 text-left">
                    Employee ID
                  </th>
                  <th className="border border-gray-200 p-3 text-left">Name</th>
                  <th className="border border-gray-200 p-3 text-left">
                    Email
                  </th>
                  <th className="border border-gray-200 p-3 text-left">
                    Message
                  </th>
                  <th className="border border-gray-200 p-3 text-left">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, index) => (
                  <tr key={emp._id} className="hover:bg-gray-50">
                    <td className="border border-gray-200 p-3">{index + 1}</td>
                    <td className="border border-gray-200 p-3 text-blue-600 cursor-pointer">
                      {emp._id}
                    </td>
                    <td className="border border-gray-200 p-3">
                      {emp.fullName}
                    </td>
                    <td className="border border-gray-200 p-3">{emp.email}</td>
                    <td className="border border-gray-200 p-3">
                      {emp.message}
                    </td>
                    <td className="border border-gray-200 p-3 flex space-x-2">
                      <button className="text-blue-600">
                        <PiDownloadSimpleBold />
                      </button>
                      <button className="text-green-600">
                        <FaRegEye />
                      </button>
                      <button className="text-red-600">
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
              ):

              <p>Only admin can view submitted contact details</p>
            }
          </div>
        </div>
      </div> 
     
    </div>
  );
};

export default EmployeeTable;

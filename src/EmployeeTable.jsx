// import React, { useEffect, useState } from "react";
// import { FaRegEye, FaSearch, FaSyncAlt } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
// import { PiDownloadSimpleBold, PiPlusBold } from "react-icons/pi";
// import Navbar from "./Navbar";
// import { LuMousePointer2 } from "react-icons/lu";
// import { useGetAllContactQuery } from "./features/contact/contact";
// import * as XLSX from "xlsx"; // 📌 Import xlsx for Excel export
// import { RxDashboard } from "react-icons/rx";
// import SEO from "./SEO";
// import { jwtDecode } from "jwt-decode";
// // import { jwtDecode } from "jwt-decode";

// const EmployeeTable = () => {
//   const [employees, setEmployees] = useState([]);
//   const { data, isLoading, isError, error } = useGetAllContactQuery();

//   useEffect(() => {
//     if (isError) {
//       console.log("Error fetching employee data", error);
//     } else if (!isLoading && data) {
//       setEmployees(data.data);
//     }
//   }, [data, isLoading, isError, error]);

//   console.log("employees", employees);

//     const [role, setRole] = useState("")

//   console.log('role', role)


//   useEffect(() =>{
//     const token = localStorage.getItem("token") // Replace with your actual JWT token

//     if(token){
//       try {
//         const decodedToken = jwtDecode(token);
//         console.log("Decoded Token:", decodedToken.role);
//         setRole(decodedToken.role)
      
//       } catch (error) {
//         console.error("Invalid token", error);
//       }
//     }
//   }, [])

//   // 📌 Function to Export Data as Excel
//   const exportToExcel = () => {
//     if (employees.length === 0) {
//       alert("No employee data to export!");
//       return;
//     } else if(role !=="admin"){
//       alert("Only admin can allow to download")
//       return;
//     }

//     const worksheet = XLSX.utils.json_to_sheet(employees); // Convert JSON to worksheet
//     const workbook = XLSX.utils.book_new(); // Create a new workbook
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Employees"); // Append sheet
//     XLSX.writeFile(workbook, "Employee_Contacts.xlsx"); // Save file
//   };



//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       <SEO
//         title="My Website Home"
//         description="This is the home page of my awesome website."
//         url="https://example.com"
//         image="https://example.com/home-image.jpg"
//       />
      
//         <div className="bg-gray-100 p-6">
//         <div className="flex justify-between py-4">
//           <h2 className="text-2xl font-semibold">Employees</h2>
//           <div className="flex space-x-2 bg-gray-100 rounded-lg">
//               <button
//                 className="rounded-md transition text-[#607FAD]"
//                 style={{ border: "1px solid #607FAD" }}
//               >
//                 <LuMousePointer2 size={18} />
//               </button>
//               <button
//                 className="rounded-md transition text-[#607FAD]"
//                 style={{ border: "1px solid #607FAD" }}
//               >
//                 <RxDashboard size={18} />
//               </button>
//               <button
//               onClick={exportToExcel}
//                 className="rounded-md transition text-[#607FAD]"
//                 style={{ border: "1px solid #607FAD" }}
//               >
//                 <PiDownloadSimpleBold size={18} />
//               </button>
//               <button
//                 className="rounded-md transition text-[#607FAD]"
//                 style={{ border: "1px solid #607FAD" }}
//               >
//                 <PiPlusBold size={18} />
//               </button>
        
//           </div>
//         </div>
//         <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
//           <div className="flex items-center gap-4 mb-4 justify-end">
//             <div className="flex items-center w-64 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="p-2 pl-4 w-64 border-none outline-none text-gray-700"
//               />
//               <button className="p-2 text-gray-500 hover:text-gray-700">
//                 <FaSearch />
//               </button>
//             </div>
//             <button className="p-2 text-[#607FAD] border border-[#607FAD]">
//               <FaSyncAlt />
//             </button>
//           </div>
//           <div className="overflow-x-auto">
//             {
//               role === "admin" ? (
//                 <table className="w-full border-collapse border border-gray-200">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="border border-gray-200 p-3 text-left">No.</th>
//                   <th className="border border-gray-200 p-3 text-left">
//                     Employee ID
//                   </th>
//                   <th className="border border-gray-200 p-3 text-left">Name</th>
//                   <th className="border border-gray-200 p-3 text-left">
//                     Email
//                   </th>
//                   <th className="border border-gray-200 p-3 text-left">
//                     Message
//                   </th>
//                   <th className="border border-gray-200 p-3 text-left">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {employees.map((emp, index) => (
//                   <tr key={emp._id} className="hover:bg-gray-50">
//                     <td className="border border-gray-200 p-3">{index + 1}</td>
//                     <td className="border border-gray-200 p-3 text-blue-600 cursor-pointer">
//                       {emp._id}
//                     </td>
//                     <td className="border border-gray-200 p-3">
//                       {emp.fullName}
//                     </td>
//                     <td className="border border-gray-200 p-3">{emp.email}</td>
//                     <td className="border border-gray-200 p-3">
//                       {emp.message}
//                     </td>
//                     <td className="border border-gray-200 p-3 flex space-x-2">
//                       <button className="text-blue-600">
//                         <PiDownloadSimpleBold />
//                       </button>
//                       {/* <button className="text-green-600">
//                         <FaRegEye />
//                       </button> */}
//                       {/* You can open the modal using document.getElementById('ID').showModal() method */}
// <button className=" text-green-600" onClick={()=>document.getElementById('my_modal_3').showModal()}><FaRegEye /></button>
// <dialog id="my_modal_3" className="modal">
//   <div className="modal-box">
//     <form method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
//     </form>
//     {/* <h3 className="font-bold text-lg">Hello!</h3>
//     <p className="py-4">Press ESC key or click on ✕ button to close</p> */}


// <div className="overflow-x-auto">
//   <table className="table table-xs">
//     <thead>
//       <tr>
        
//         <th>No.</th>
//         <th>Employee ID</th>
//         <th>Name</th>
//         <th>Email</th>
//         <th>Message</th>
//       </tr>
//     </thead>
//     <tbody>
//       <tr>
//         <th>1</th>
//         <td> {emp._id}</td>
//         <td>
//         {emp.fullName}

//         </td>
//         <td>
//         {emp.email}
//         </td>
//         <td>{emp.message}</td>
        
//       </tr>

//     </tbody>
   
//   </table>
// </div>
//   </div>
// </dialog>
//                       <button className="text-red-600">
//                         <MdDelete />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//               ):

//               <p>Only admin can view submitted contact details</p>
//             }
//           </div>
//         </div>
//       </div> 
     
//     </div>
//   );
// };

// export default EmployeeTable;



import React, { useEffect, useState } from "react";
import { FaRegEye, FaSearch, FaSyncAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { PiDownloadSimpleBold, PiPlusBold } from "react-icons/pi";
import Navbar from "./Navbar";
import { LuMousePointer2 } from "react-icons/lu";
import { useGetAllContactQuery } from "./features/contact/contact";
import * as XLSX from "xlsx"; // Import xlsx for Excel export
import { RxDashboard } from "react-icons/rx";
import SEO from "./SEO";
import { jwtDecode } from "jwt-decode";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [role, setRole] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null); // Stores selected employee for modal

  const { data, isLoading, isError, error } = useGetAllContactQuery();

  // Fetch employee data
  useEffect(() => {
    if (isError) {
      console.log("Error fetching employee data", error);
    } else if (!isLoading && data) {
      setEmployees(data.data);
    }
  }, [data, isLoading, isError, error]);

  // Decode JWT & Set Role
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setRole(decodedToken.role);
      } catch (error) {
        console.error("Invalid token", error);
      }
    }
  }, []);

  // Function to Export Data as Excel (Admin Only)
  const exportToExcel = () => {
    if (employees.length === 0) {
      alert("No employee data to export!");
      return;
    }
    if (role !== "admin") {
      alert("Only admins can download data!");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(employees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    XLSX.writeFile(workbook, "Employee_Contacts.xlsx");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <SEO title="Employee Table" description="View and manage employee contacts." url="https://example.com" />

      <div className="bg-gray-100 p-6">
        <div className="flex justify-between py-4">
          <h2 className="text-2xl font-semibold">Employees</h2>
          <div className="flex space-x-2 bg-gray-100 rounded-lg">
            <button className="rounded-md text-[#607FAD] border border-[#607FAD]">
              <LuMousePointer2 size={18} />
            </button>
            <button className="rounded-md text-[#607FAD] border border-[#607FAD]">
              <RxDashboard size={18} />
            </button>
            <button onClick={exportToExcel} className="rounded-md text-[#607FAD] border border-[#607FAD]">
              <PiDownloadSimpleBold size={18} />
            </button>
            <button className="rounded-md text-[#607FAD] border border-[#607FAD]">
              <PiPlusBold size={18} />
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center gap-4 mb-4 justify-end">
            <div className="flex items-center w-64 border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <input type="text" placeholder="Search" className="p-2 pl-4 w-64 border-none outline-none text-gray-700" />
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <FaSearch />
              </button>
            </div>
            <button className="p-2 text-[#607FAD] border border-[#607FAD]">
              <FaSyncAlt />
            </button>
          </div>

          <div className="overflow-x-auto">
            {role === "admin" ? (
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-200 p-3 text-left">No.</th>
                    <th className="border border-gray-200 p-3 text-left">Employee ID</th>
                    <th className="border border-gray-200 p-3 text-left">Name</th>
                    <th className="border border-gray-200 p-3 text-left">Email</th>
                    <th className="border border-gray-200 p-3 text-left">Message</th>
                    <th className="border border-gray-200 p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp, index) => (
                    <tr key={emp._id} className="hover:bg-gray-50">
                      <td className="border border-gray-200 p-3">{index + 1}</td>
                      <td className="border border-gray-200 p-3 text-blue-600 cursor-pointer">{emp._id}</td>
                      <td className="border border-gray-200 p-3">{emp.fullName}</td>
                      <td className="border border-gray-200 p-3">{emp.email}</td>
                      <td className="border border-gray-200 p-3">{emp.message}</td>
                      <td className="border border-gray-200 p-3 flex space-x-2">
                      <button
                      className="text-green-600"
                      onClick={() => setSelectedEmployee(emp)}
                    >
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
            ) : (
              <p className="text-red-500 font-semibold">Only admins can view employee details.</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal for Viewing Employee Details */}
      {selectedEmployee && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h3 className="font-bold text-lg mb-4">Employee Details</h3>
            <table className="table-auto w-full">
              <tbody>
                <tr>
                  <th className="text-left">Employee ID:</th>
                  <td>{selectedEmployee._id}</td>
                </tr>
                <tr>
                  <th className="text-left">Name:</th>
                  <td>{selectedEmployee.fullName}</td>
                </tr>
                <tr>
                  <th className="text-left">Email:</th>
                  <td>{selectedEmployee.email}</td>
                </tr>
                <tr>
                  <th className="text-left">Message:</th>
                  <td>{selectedEmployee.message}</td>
                </tr>
              </tbody>
            </table>

            {/* Close Modal Button */}
            <button
              className="mt-4 bg-red-500 text-black px-4 py-2 rounded-lg w-full"
              onClick={() => setSelectedEmployee(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeTable;

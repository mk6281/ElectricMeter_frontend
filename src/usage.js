// // import React, { useEffect, useState } from "react";
// // import Navbar from "./Navbar";
// // import axios from "axios";
// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   CartesianGrid,
// //   BarChart,
// //   Bar,
// //   Legend
// // } from "recharts";

// // function Usage() {
// //   const user = JSON.parse(localStorage.getItem("user"));
// //   const [usage, setUsage] = useState([]);

// //   useEffect(() => {
// //     if (user?.id) {
// //       axios
// //         .get(`http://localhost:8081/usage/${user.id}`)
// //         .then((res) => {
// //           if (res.data.status === "OK") {
// //             setUsage(res.data.data);
// //           }
// //         })
// //         .catch((err) => console.log("Error fetching usage:", err));
// //     }
// //   }, [user]);

// //   return (
// //     <div style={{ padding: "0px" }}>
        
// //       <Navbar />
// //       <h2 style={{ fontWeight: "bold", marginBottom: "10px", color: "#1e3a8a" }}>
// //         Energy Usage (Imported / Exported)
// //       </h2>

// //       {/* ==================== TABLE ==================== */}
// //       <h3 style={{ marginTop: "40px" }}>Usage Table</h3>

// //       {usage.length === 0 ? (
// //         <p>No records found.</p>
// //       ) : (
// //         <table
// //           style={{
// //             width: "700px",
// //             borderCollapse: "collapse",
// //             marginTop: "10px",
// //             background: "#f8f9fa",
// //             boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
// //           }}
// //         >
// //           <thead>
// //             <tr style={{ background: "#1e3a8a", color: "white" }}>
// //               <th style={{ padding: "10px" }}>Date</th>
// //               <th style={{ padding: "10px" }}>Imported (kWh)</th>
// //               <th style={{ padding: "10px" }}>Exported (kWh)</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {usage.map((row, i) => (
// //               <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#eef" }}>
// //                 <td style={{ padding: "10px" }}>{row.date}</td>
// //                 <td style={{ padding: "10px" }}>{row.imported}</td>
// //                 <td style={{ padding: "10px" }}>{row.exported}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}

// //       {/* ==================== LINE CHART ==================== */}
// //       <div style={{ marginTop: "20px" }}>
// //         <h3>Daily Imported vs Exported</h3>

// //         <LineChart width={700} height={300} data={usage}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="date" />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />

// //           <Line type="monotone" dataKey="imported" stroke="#1e3a8a" strokeWidth={2} />
// //           <Line type="monotone" dataKey="exported" stroke="#10b981" strokeWidth={2} />
// //         </LineChart>
// //       </div>

// //       {/* ==================== BAR CHART ==================== */}
// //       <div style={{ marginTop: "40px" }}>
// //         <h3>Daily Usage (Bar Chart)</h3>

// //         <BarChart width={700} height={300} data={usage}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="date" />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />

// //           <Bar dataKey="imported" fill="#1e3a8a" />
// //           <Bar dataKey="exported" fill="#10b981" />
// //         </BarChart>
// //       </div>

      
// //     </div>
// //   );
// // }

// // export default Usage;




// // import React, { useEffect, useState } from "react";
// // import Navbar from "./Navbar";
// // import axios from "axios";
// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   CartesianGrid,
// //   BarChart,
// //   Bar,
// //   Legend
// // } from "recharts";

// // function Usage() {
// //   const user = JSON.parse(localStorage.getItem("user"));
// //   const [usage, setUsage] = useState([]);

// // //   const { id } = useParams();
// // // const userId = id || JSON.parse(localStorage.getItem("user"))?.id;


// //   useEffect(() => {
// //     if (user?.id) {
// //       axios
// //         .get(`http://localhost:8081/usage/${user.id}`)
// //         .then((res) => {
// //           if (res.data.status === "OK") {
            
// //             // ================================
// //             // PROCESS VALUES HERE
// //             // Split imported/exported
// //             // ================================
// //             const fixedData = res.data.data.map((row) => {
// //               let imported = 0;
// //               let exported = 0;

// //               const val = parseFloat(row.energy);  // Arduino raw reading

// //               if (val >= 0) {
// //                 imported = val;
// //               } else {
// //                 exported = Math.abs(val); // convert negative → positive exported
// //               }

// //               return {
// //                 date: row.date,
// //                 imported,
// //                 exported
// //               };
// //             });

// //             setUsage(fixedData);
// //           }
// //         })
// //         .catch((err) => console.log("Error fetching usage:", err));
// //     }
// //   }, [user]);

// //   return (
// //     <div style={{ padding: "0px" }}>
// //       <Navbar />
// //       <h2 style={{ fontWeight: "bold", marginBottom: "10px", color: "#1e3a8a" }}>
// //         Energy Usage (Imported / Exported)
// //       </h2>

// //       {/* ==================== TABLE ==================== */}
// //       <h3 style={{ marginTop: "40px" }}>Usage Table</h3>

// //       {usage.length === 0 ? (
// //         <p>No records found.</p>
// //       ) : (
// //         <table
// //           style={{
// //             width: "700px",
// //             borderCollapse: "collapse",
// //             marginTop: "10px",
// //             background: "#f8f9fa",
// //             boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
// //           }}
// //         >
// //           <thead>
// //             <tr style={{ background: "#1e3a8a", color: "white" }}>
// //               <th style={{ padding: "10px" }}>Date</th>
// //               <th style={{ padding: "10px" }}>Imported (kWh)</th>
// //               <th style={{ padding: "10px" }}>Exported (kWh)</th>
// //             </tr>
// //           </thead>

// //           <tbody>
// //             {usage.map((row, i) => (
// //               <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#eef" }}>
// //                 <td style={{ padding: "10px" }}>{row.date}</td>
// //                 <td style={{ padding: "10px" }}>{row.imported}</td>
// //                 <td style={{ padding: "10px" }}>{row.exported}</td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       )}

// //       {/* ==================== LINE CHART ==================== */}
// //       <div style={{ marginTop: "20px" }}>
// //         <h3>Daily Imported vs Exported</h3>

// //         <LineChart width={700} height={300} data={usage}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="date" />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />

// //           <Line type="monotone" dataKey="imported" stroke="#1e3a8a" strokeWidth={2} />
// //           <Line type="monotone" dataKey="exported" stroke="#10b981" strokeWidth={2} />
// //         </LineChart>
// //       </div>

// //       {/* ==================== BAR CHART ==================== */}
// //       <div style={{ marginTop: "40px" }}>
// //         <h3>Daily Usage (Bar Chart)</h3>

// //         <BarChart width={700} height={300} data={usage}>
// //           <CartesianGrid strokeDasharray="3 3" />
// //           <XAxis dataKey="date" />
// //           <YAxis />
// //           <Tooltip />
// //           <Legend />

// //           <Bar dataKey="imported" fill="#1e3a8a" />
// //           <Bar dataKey="exported" fill="#10b981" />
// //         </BarChart>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Usage;


// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   BarChart,
//   Bar,
//   Legend
// } from "recharts";

// function Usage() {
//   const { id } = useParams();
//   const userId = id || JSON.parse(localStorage.getItem("user"))?.id;

//   const [usage, setUsage] = useState([]);

//   useEffect(() => {
//     if (userId) {
//       axios
//         .get(`http://localhost:8081/usage/${userId}`)
//         .then((res) => {
//           if (res.data.status === "OK") {
//             const fixedData = res.data.data.map((row) => {
//               let imported = 0;
//               let exported = 0;
//               const val = parseFloat(row.energy || row.imported - row.exported || 0);
//               if (val >= 0) imported = val;
//               else exported = Math.abs(val);
//               return { date: row.date, imported, exported };
//             });
//             setUsage(fixedData);
//           }
//         })
//         .catch((err) => console.log("Error fetching usage:", err));
//     }
//   }, [userId]);

//   return (
//     <div style={{ padding: "0px" }}>
//       <Navbar />
//       <h2 style={{ fontWeight: "bold", marginBottom: "10px", color: "#1e3a8a" }}>
//         Energy Usage (Imported / Exported)
//       </h2>

//       {/* Table */}
//       <h3 style={{ marginTop: "40px" }}>Usage Table</h3>
//       {usage.length === 0 ? (
//         <p>No records found.</p>
//       ) : (
//         <table
//           style={{
//             width: "700px",
//             borderCollapse: "collapse",
//             marginTop: "10px",
//             background: "#f8f9fa",
//             boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
//           }}
//         >
//           <thead>
//             <tr style={{ background: "#1e3a8a", color: "white" }}>
//               <th style={{ padding: "10px" }}>Date</th>
//               <th style={{ padding: "10px" }}>Imported (kWh)</th>
//               <th style={{ padding: "10px" }}>Exported (kWh)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {usage.map((row, i) => (
//               <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#eef" }}>
//                 <td style={{ padding: "10px" }}>{row.date}</td>
//                 <td style={{ padding: "10px" }}>{row.imported}</td>
//                 <td style={{ padding: "10px" }}>{row.exported}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Line Chart */}
//       <div style={{ marginTop: "40px" }}>
//         <h3>Daily Imported vs Exported</h3>
//         <LineChart width={700} height={300} data={usage}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="imported" stroke="#1e3a8a" strokeWidth={2} />
//           <Line type="monotone" dataKey="exported" stroke="#10b981" strokeWidth={2} />
//         </LineChart>
//       </div>

//       {/* Bar Chart */}
//       <div style={{ marginTop: "40px" }}>
//         <h3>Daily Usage (Bar Chart)</h3>
//         <BarChart width={700} height={300} data={usage}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="imported" fill="#1e3a8a" />
//           <Bar dataKey="exported" fill="#10b981" />
//         </BarChart>
//       </div>
//     </div>
//   );
// }

// export default Usage;
// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   BarChart,
//   Bar,
//   Legend
// } from "recharts";

// function Usage() {
//   const { id } = useParams();
//   const userId = id || JSON.parse(localStorage.getItem("user"))?.id;

//   const [usage, setUsage] = useState([]);

//   useEffect(() => {
//     if (userId) {
//       axios
//         .get(`http://localhost:8081/usage/${userId}`)
//         .then((res) => {
//           if (res.data.status === "OK") {
//             // Use imported/exported directly from backend
//             const fixedData = res.data.data.map((row) => ({
//               date: row.date,
//               imported: parseFloat(row.imported) || 0,
//               exported: parseFloat(row.exported) || 0,
//             }));
//             setUsage(fixedData);
//           }
//         })
//         .catch((err) => console.log("Error fetching usage:", err));
//     }
//   }, [userId]);

//   return (
//     <div style={{ padding: "0px" }}>
//       <Navbar />
//       <h2 style={{ fontWeight: "bold", marginBottom: "10px", color: "#1e3a8a" }}>
//         Energy Usage (Imported / Exported)
//       </h2>

//       {/* Table */}
//       <h3 style={{ marginTop: "40px" }}>Usage Table</h3>
//       {usage.length === 0 ? (
//         <p>No records found.</p>
//       ) : (
//         <table
//           style={{
//             width: "700px",
//             borderCollapse: "collapse",
//             marginTop: "10px",
//             background: "#f8f9fa",
//             boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
//           }}
//         >
//           <thead>
//             <tr style={{ background: "#1e3a8a", color: "white" }}>
//               <th style={{ padding: "10px" }}>Date</th>
//               <th style={{ padding: "10px" }}>Imported (kWh)</th>
//               <th style={{ padding: "10px" }}>Exported (kWh)</th>
//             </tr>
//           </thead>
//           <tbody>
//             {usage.map((row, i) => (
//               <tr key={i} style={{ background: i % 2 === 0 ? "white" : "#eef" }}>
//                 <td style={{ padding: "10px" }}>{row.date}</td>
//                 <td style={{ padding: "10px" }}>{row.imported}</td>
//                 <td style={{ padding: "10px" }}>{row.exported}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Line Chart */}
//       <div style={{ marginTop: "40px" }}>
//         <h3>Daily Imported vs Exported</h3>
//         <LineChart width={700} height={300} data={usage}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="imported" stroke="#1e3a8a" strokeWidth={2} />
//           <Line type="monotone" dataKey="exported" stroke="#10b981" strokeWidth={2} />
//         </LineChart>
//       </div>

//       {/* Bar Chart */}
//       <div style={{ marginTop: "40px" }}>
//         <h3>Daily Usage (Bar Chart)</h3>
//         <BarChart width={700} height={300} data={usage}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="imported" fill="#1e3a8a" />
//           <Bar dataKey="exported" fill="#10b981" />
//         </BarChart>
//       </div>
//     </div>
//   );
// }

// export default Usage;



// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
//   BarChart,
//   Bar,
//   Legend
// } from "recharts";

// function Usage() {
//   const { id } = useParams();
//   const userId = id || JSON.parse(localStorage.getItem("user"))?.id;
//   const [usage, setUsage] = useState([]);

//   useEffect(() => {
//     if (userId) {
//       axios
//         .get(`https://electricmeter-backend-1.onrender.com/usage/${userId}`)
//         .then((res) => {
//           if (res.data.status === "OK") {
//             const fixedData = res.data.data.map((row) => ({
//               date: row.date,
//               imported: parseFloat(row.imported) || 0,
//               exported: parseFloat(row.exported) || 0
//             }));
//             setUsage(fixedData);
//           }
//         })
//         .catch((err) => console.log("Error fetching usage:", err));
//     }
//   }, [userId]);

//   return (
//     <>
//       {/* INLINE CSS */}
//       <style>{`
//         .usage-wrapper {
//           background: #eef3ff;
//           min-height: 100vh;
//           padding-bottom: 40px;
//         }

//         .usage-title {
//           text-align: center;
//           font-size: 32px;
//           font-weight: 900;
//           color: #0A2A66;
//           margin-top: 20px;
//           text-shadow: 1px 1px 3px rgba(0,0,0,0.15);
//         }

//         .usage-card {
//           background: white;
//           padding: 20px;
//           margin: 25px auto;
//           border-radius: 15px;
//           box-shadow: 0px 6px 18px rgba(0,0,0,0.15);
//           max-width: 900px;
//           border-left: 6px solid #1e88e5;
//           transition: 0.3s;
//         }

//         .usage-card:hover {
//           transform: scale(1.01);
//           box-shadow: 0px 10px 25px rgba(0,0,0,0.25);
//         }

//         .usage-table {
//           width: 100%;
//           border-collapse: collapse;
//           margin-top: 10px;
//           background: #f8f9fa;
//           box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
//           border-radius: 10px;
//           overflow: hidden;
//         }

//         .usage-table th {
//           background: #1e3a8a;
//           color: white;
//           padding: 12px;
//           font-size: 16px;
//         }

//         .usage-table td {
//           padding: 10px;
//           font-size: 15px;
//           color: #333;
//         }

//         .chart-container {
//           width: 100%;
//           overflow-x: auto;
//           display: flex;
//           justify-content: center;
//           margin-top: 20px;
//         }

//         h3 {
//           color: #0A2A66;
//           font-weight: 700;
//           margin-bottom: 10px;
//         }

//         @media (max-width: 768px) {
//           .usage-title {
//             font-size: 24px;
//           }

//           .usage-card {
//             width: 90%;
//             padding: 15px;
//           }

//           .usage-table th, .usage-table td {
//             font-size: 14px;
//           }
//         }
//       `}</style>

//       {/* CONTENT */}
//       <Navbar />

//       <div className="usage-wrapper">
//         <h2 className="usage-title">Energy Usage (Imported / Exported)</h2>

//         {/* TABLE CARD */}
//         <div className="usage-card">
//           <h3>Usage Table</h3>

//           {usage.length === 0 ? (
//             <p>No records found.</p>
//           ) : (
//             <table className="usage-table">
//               <thead>
//                 <tr>
//                   <th>Date</th>
//                   <th>Imported (kWh)</th>
//                   <th>Exported (kWh)</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {usage.map((row, i) => (
//                   <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#eef" }}>
//                     <td>{row.date}</td>
//                     <td>{row.imported}</td>
//                     <td>{row.exported}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>

//         {/* LINE CHART */}
//         <div className="usage-card">
//           <h3>Daily Imported vs Exported</h3>

//           <div className="chart-container">
//             <LineChart width={700} height={300} data={usage}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Line type="monotone" dataKey="imported" stroke="#1e3a8a" strokeWidth={2} />
//               <Line type="monotone" dataKey="exported" stroke="#10b981" strokeWidth={2} />
//             </LineChart>
//           </div>
//         </div>

//         {/* BAR CHART */}
//         <div className="usage-card">
//           <h3>Daily Usage (Bar Chart)</h3>

//           <div className="chart-container">
//             <BarChart width={700} height={300} data={usage}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="imported" fill="#1e3a8a" />
//               <Bar dataKey="exported" fill="#10b981" />
//             </BarChart>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Usage;

import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend
} from "recharts";

function Usage() {
  const { id } = useParams();
  const userId = id || JSON.parse(localStorage.getItem("user"))?.id;
  const [usage, setUsage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 25;

  useEffect(() => {
    if (userId) {
      axios
        .get(`https://electricmeter-backend-1.onrender.com/usage/${userId}`)
        .then((res) => {
          if (res.data.status === "OK") {
            const fixedData = res.data.data
              .map((row) => ({
                date: row.date,
                imported: parseFloat(row.imported) || 0,
                exported: parseFloat(row.exported) || 0
              }))
              // Sort by date ascending
              .sort((a, b) => new Date(a.date) - new Date(b.date));
            setUsage(fixedData);
          }
        })
        .catch((err) => console.log("Error fetching usage:", err));
    }
  }, [userId]);

  // Pagination calculations
  const totalPages = Math.ceil(usage.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = usage.slice(indexOfFirstRow, indexOfLastRow);

  const goToPage = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <style>{`
        .usage-wrapper { background: #eef3ff; min-height: 100vh; padding-bottom: 40px; }
        .usage-title { text-align: center; font-size: 32px; font-weight: 900; color: #0A2A66; margin-top: 20px; text-shadow: 1px 1px 3px rgba(0,0,0,0.15); }
        .usage-card { background: white; padding: 20px; margin: 25px auto; border-radius: 15px; box-shadow: 0px 6px 18px rgba(0,0,0,0.15); max-width: 900px; border-left: 6px solid #1e88e5; transition: 0.3s; }
        .usage-card:hover { transform: scale(1.01); box-shadow: 0px 10px 25px rgba(0,0,0,0.25); }
        .usage-table { width: 100%; border-collapse: collapse; margin-top: 10px; background: #f8f9fa; box-shadow: 0px 4px 12px rgba(0,0,0,0.1); border-radius: 10px; overflow: hidden; }
        .usage-table th { background: #1e3a8a; color: white; padding: 12px; font-size: 16px; }
        .usage-table td { padding: 10px; font-size: 15px; color: #333; }
        .chart-container { width: 100%; overflow-x: auto; display: flex; justify-content: center; margin-top: 20px; }
        .pagination { display: flex; justify-content: center; gap: 6px; margin-top: 15px; flex-wrap: wrap; }
        .pagination button { padding: 6px 10px; border-radius: 6px; border: none; background: #1e3a8a; color: white; cursor: pointer; transition: 0.2s; }
        .pagination button:hover { background: #0a2a66; }
        .pagination .active { background: #10b981; }
        h3 { color: #0A2A66; font-weight: 700; margin-bottom: 10px; }
        @media (max-width: 768px) { .usage-title { font-size: 24px; } .usage-card { width: 90%; padding: 15px; } .usage-table th, .usage-table td { font-size: 14px; } }
      `}</style>

      <Navbar />

      <div className="usage-wrapper">
        <h2 className="usage-title">Energy Usage (Imported / Exported)</h2>

        {/* TABLE CARD */}
        <div className="usage-card">
          <h3>Usage Table</h3>

          {usage.length === 0 ? (
            <p>No records found.</p>
          ) : (
            <>
              <table className="usage-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Imported (kWh)</th>
                    <th>Exported (kWh)</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#eef" }}>
                      <td>{row.date}</td>
                      <td>{row.imported}</td>
                      <td>{row.exported}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* PAGINATION */}
              <div className="pagination">
                <button onClick={() => goToPage(currentPage - 1)}>Prev</button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={currentPage === i + 1 ? "active" : ""}
                    onClick={() => goToPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button onClick={() => goToPage(currentPage + 1)}>Next</button>
              </div>
            </>
          )}
        </div>

        {/* LINE CHART */}
        <div className="usage-card">
          <h3>Daily Imported vs Exported</h3>
          <div className="chart-container">
            <LineChart width={700} height={300} data={usage}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="imported" stroke="#1e3a8a" strokeWidth={2} />
              <Line type="monotone" dataKey="exported" stroke="#10b981" strokeWidth={2} />
            </LineChart>
          </div>
        </div>

        {/* BAR CHART */}
        <div className="usage-card">
          <h3>Daily Usage (Bar Chart)</h3>
          <div className="chart-container">
            <BarChart width={700} height={300} data={usage}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="imported" fill="#1e3a8a" />
              <Bar dataKey="exported" fill="#10b981" />
            </BarChart>
          </div>
        </div>
      </div>
    </>
  );
}

export default Usage;


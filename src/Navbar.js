// // import React from 'react';

// // function Navbar() {
// //   return (
// //     <nav style={{
// //       display: 'flex',
// //       justifyContent: 'space-between',
// //       padding: '10px 20px',
// //       backgroundColor: '#f0f0f0',
// //       fontSize: '18px'
// //     }}>
// //       <div className="logo">
// //         MyLogo
// //       </div>

// //       <div style={{ display: 'flex', gap: '20px' }}>
// //         <a href="/home" style={{ textDecoration: 'none' }}>Home</a>
// //         <a href="/home/billing/:id" style={{ textDecoration: 'none' }}>Billing</a>
// //         <a href="/home/usage/:id" style={{ textDecoration: 'none' }}>Usage</a>
// //         <a href="/home/history" style={{ textDecoration: 'none' }}>Payment History</a>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;


// import React from 'react';

// function Navbar() {
//   const user = JSON.parse(localStorage.getItem("user"));

//   return (
//     <nav style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       padding: '10px 20px',
//       backgroundColor: '#f0f0f0',
//       fontSize: '18px'
//     }}>
//       <div className="logo">MyLogo</div>

//       <div style={{ display: 'flex', gap: '20px' }}>
//         <a href="/home" style={{ textDecoration: 'none' }}>Home</a>
//         {user && (
//           <>
//             <a href={`/home/billing/${user.id}`} style={{ textDecoration: 'none' }}>Billing</a>
//             <a href={`/home/usage/${user.id}`} style={{ textDecoration: 'none' }}>Usage</a>
//           </>
//         )}
//         <a href="/home/history" style={{ textDecoration: 'none' }}>Payment History</a>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Navbar() {
//   const [user, setUser] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Try to get user from localStorage
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       // Optionally, fetch latest user details from backend
//       axios.get(`http://localhost:8081/getUser/${storedUser.id}`)
//         .then(res => {
//           if (res.data.status === 'Found') {
//             setUser(res.data.user);
//             localStorage.setItem('user', JSON.stringify(res.data.user)); // keep updated
//           }
//         })
//         .catch(err => console.log("Fetch user error:", err));
//     }
//   }, []);

//   const handleSignOut = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//     navigate('/'); // redirect to login
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const getUserInitials = (name) => {
//     if (!name) return '';
//     return name.split(' ').map(n => n[0].toUpperCase()).join('');
//   };

//   return (
//     <nav style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '10px 20px',
//       backgroundColor: '#f0f0f0',
//       fontSize: '18px',
//       position: 'relative'
//     }}>
//       <div className="logo">MyLogo</div>

//       <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
//         <a href="/home" style={{ textDecoration: 'none' }}>Home</a>
//         {user && (
//           <>
//             <a href={`/home/billing/${user.id}`} style={{ textDecoration: 'none' }}>Billing</a>
//             <a href={`/home/usage/${user.id}`} style={{ textDecoration: 'none' }}>Usage</a>
//           </>
//         )}
//         <a href="/home/history" style={{ textDecoration: 'none' }}>Payment History</a>

//         {user && (
//           <div style={{ position: 'relative' }}>
//             {/* User avatar / logo */}
//             <div 
//               onClick={toggleDropdown} 
//               style={{
//                 width: '35px',
//                 height: '35px',
//                 borderRadius: '50%',
//                 backgroundColor: '#1e3a8a',
//                 color: 'white',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 cursor: 'pointer',
//                 userSelect: 'none'
//               }}
//             >
//               {getUserInitials(user.name)}
//             </div>

//             {/* Dropdown for Sign Out */}
//             {dropdownOpen && (
//               <div style={{
//                 position: 'absolute',
//                 top: '45px',
//                 right: 0,
//                 backgroundColor: 'white',
//                 boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
//                 borderRadius: '5px',
//                 overflow: 'hidden'
//               }}>
//                 <button 
//                   onClick={handleSignOut} 
//                   style={{
//                     padding: '10px 20px',
//                     background: 'none',
//                     border: 'none',
//                     cursor: 'pointer',
//                     width: '100%',
//                     textAlign: 'left'
//                   }}
//                 >
//                   Sign Out
//                 </button>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Navbar() {
//   const [user, setUser] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       axios.get(`http://localhost:8081/getUser/${storedUser.id}`)
//         .then(res => {
//           if (res.data.status === 'Found') {
//             setUser(res.data.user);
//             localStorage.setItem('user', JSON.stringify(res.data.user));
//           }
//         })
//         .catch(err => console.log("Fetch user error:", err));
//     }
//   }, []);

//   const handleSignOut = () => {
//     localStorage.removeItem('user');
//     setUser(null);
//     navigate('/');
//   };

//   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
//   const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

//   const getUserInitials = (name) =>
//     name ? name.split(' ').map(n => n[0].toUpperCase()).join('') : '';

//   return (
//     <>
//       {/* INLINE CSS */}
//       <style>{`
//         .navbar-container {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 12px 25px;
//           background: linear-gradient(90deg, #0A2A66, #1e88e5);
//           color: white;
//           font-size: 18px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
//         }

//         .navbar-logo {
//           font-size: 26px;
//           font-weight: 900;
//           cursor: pointer;
//           text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
//         }

//         .navbar-links {
//           display: flex;
//           gap: 25px;
//           align-items: center;
//         }

//         .navbar-link {
//           color: #fff;
//           text-decoration: none;
//           padding: 6px 10px;
//           border-radius: 6px;
//           transition: 0.25s;
//         }

//         .navbar-link:hover {
//           background: rgba(255,255,255,0.2);
//         }

//         .navbar-avatar {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           background: #ffb300;
//           color: #000;
//           font-weight: bold;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           cursor: pointer;
//           transition: 0.2s;
//         }

//         .navbar-avatar:hover {
//           transform: scale(1.1);
//         }

//         /* DROPDOWN */
//         .dropdown-menu {
//           position: absolute;
//           top: 55px;
//           right: 0;
//           background: white;
//           box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
//           border-radius: 8px;
//           animation: fade 0.2s ease;
//           overflow: hidden;
//         }

//         @keyframes fade {
//           from { opacity: 0; transform: translateY(-5px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .dropdown-btn {
//           padding: 12px 20px;
//           width: 100%;
//           border: none;
//           background: none;
//           text-align: left;
//           cursor: pointer;
//           transition: 0.2s;
//         }

//         .dropdown-btn:hover {
//           background: #f0f0f0;
//         }

//         /* MOBILE MENU ICON */
//         .mobile-menu-icon {
//           display: none;
//           font-size: 28px;
//           cursor: pointer;
//         }

//         /* MOBILE MENU */
//         .mobile-menu {
//           display: none;
//           flex-direction: column;
//           background: #0A2A66;
//           padding: 20px;
//           gap: 15px;
//         }

//         .mobile-link {
//           color: white;
//           text-decoration: none;
//           font-size: 18px;
//           padding: 8px 0;
//         }

//         .mobile-link:hover {
//           color: #f5d142;
//         }

//         /* RESPONSIVE BELOW 768px */
//         @media (max-width: 768px) {
//           .navbar-links {
//             display: none;
//           }

//           .mobile-menu-icon {
//             display: block;
//           }

//           .mobile-menu {
//             display: ${mobileMenuOpen ? 'flex' : 'none'};
//           }
//         }
//       `}</style>

//       {/* NAVBAR */}
//       <nav className="navbar-container">

//         <div className="navbar-logo" onClick={() => navigate("/home")}>
//           NEB Portal
//         </div>

//         {/* MOBILE MENU ICON */}
//         <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
//           ☰
//         </div>

//         {/* DESKTOP LINKS */}
//         <div className="navbar-links">
//           <a href="/home" className="navbar-link">Home</a>

//           {user && (
//             <>
//               <a href={`/home/billing/${user.id}`} className="navbar-link">Billing</a>
//               <a href={`/home/usage/${user.id}`} className="navbar-link">Usage</a>
//             </>
//           )}

//           <a href="/home/history" className="navbar-link">History</a>

//           {user && (
//             <div style={{ position: "relative" }}>
//               <div className="navbar-avatar" onClick={toggleDropdown}>
//                 {getUserInitials(user.name)}
//               </div>

//               {dropdownOpen && (
//                 <div className="dropdown-menu">
//                   <button className="dropdown-btn" onClick={handleSignOut}>
//                     Sign Out
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* MOBILE MENU ITEMS */}
//       <div className="mobile-menu">
//         <a href="/home" className="mobile-link">Home</a>

//         {user && (
//           <>
//             <a href={`/home/billing/${user.id}`} className="mobile-link">Billing</a>
//             <a href={`/home/usage/${user.id}`} className="mobile-link">Usage</a>
//           </>
//         )}

//         <a href="/home/history" className="mobile-link">Payment History</a>

//         {user && (
//           <a className="mobile-link" onClick={handleSignOut} style={{ cursor: "pointer" }}>
//             Sign Out
//           </a>
//         )}
//       </div>
//     </>
//   );
// }

// export default Navbar;
import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Navbar() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const avatarRef = useRef(null);
  const dropdownRef = useRef(null);

  // Fetch User
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      axios
        .get(`https://electricmeter-backend-1.onrender.com/getUser/${storedUser.id}`)
        .then((res) => {
          if (res.data.status === 'Found') {
            setUser(res.data.user);
            localStorage.setItem('user', JSON.stringify(res.data.user));
          }
        })
        .catch((err) => console.log("Fetch user error:", err));
    }
  }, []);

  // Click Outside Dropdown
  useEffect(() => {
    function handleDocClick(e) {
      if (!dropdownOpen) return;
      if (avatarRef.current && avatarRef.current.contains(e.target)) return;
      if (dropdownRef.current && dropdownRef.current.contains(e.target)) return;
      setDropdownOpen(false);
    }
    document.addEventListener('mousedown', handleDocClick);
    return () => document.removeEventListener('mousedown', handleDocClick);
  }, [dropdownOpen]);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setDropdownOpen(false);
  };

  const getUserInitials = (name) =>
    name ? name.split(' ').map((n) => n[0].toUpperCase()).join('') : '';

  const computeDropdownPosition = () => {
    if (!avatarRef.current) return { top: 0, left: 0 };
    const rect = avatarRef.current.getBoundingClientRect();
    return { top: rect.bottom + 8, left: rect.right - 170 };
  };

  const dropdownPos = computeDropdownPosition();

  return (
    <>
      {/* Styles */}
      <style>{`
        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          background: linear-gradient(90deg, #0A2A66, #1e88e5);
          color: white;
          font-size: 18px;
          position: sticky;
          top: 0;
          z-index: 3000;
          box-shadow: 0px 4px 15px rgba(0,0,0,0.2);
        }

        .navbar-logo {
          font-size: 24px;
          font-weight: 900;
          cursor: pointer;
        }

        .navbar-links {
          display: flex;
          gap: 20px;
        }

        .navbar-link {
          color: white;
          text-decoration: none;
          padding: 6px 10px;
          border-radius: 6px;
          transition: 0.2s;
        }

        .navbar-link:hover {
          background: rgba(255,255,255,0.15);
        }

        .nav-right {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-left: auto; /* fixes avatar alignment */
        }

        .navbar-avatar {
          width: 40px;
          height: 40px;
          background: #ffcc00;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          color: black;
          cursor: pointer;
          transition: 0.3s;
        }

        .navbar-avatar:hover {
          transform: scale(1.08);
        }

        .mobile-menu-icon {
          display: none;
          font-size: 28px;
          cursor: pointer;
        }

        /* MOBILE MENU */
        .mobile-menu {
          position: absolute;
          top: 64px;
          right: 12px;
          background: linear-gradient(180deg, #0A2A66, #1e88e5);
          padding: 15px;
          border-radius: 12px;
          width: 180px;
          color: white;
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
          z-index: 3500;
        }

        .mobile-link {
          color: white;
          display: block;
          padding: 10px 0;
          text-decoration: none;
        }

        .mobile-link:hover {
          color: #ffd447;
        }

        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
          .mobile-menu-icon {
            display: block;
          }
        }

        /* DROPDOWN */
        .dropdown-card {
          background: white;
          border-radius: 10px;
          box-shadow: 0px 8px 30px rgba(0,0,0,0.25);
          min-width: 160px;
        }

        .dropdown-item {
          padding: 12px 14px;
          cursor: pointer;
          background: none;
          border: none;
          width: 100%;
          text-align: left;
        }

        .dropdown-item:hover {
          background: #f3f4f6;
        }
      `}</style>

      {/* NAVBAR */}
      <nav className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate('/home')}>
          NEB Portal
        </div>

        {/* DESKTOP LINKS */}
        <div className="navbar-links">
          <Link className="navbar-link" to="/home">Home</Link>

          {user && (
            <>
              <Link className="navbar-link" to={`/home/billing/${user.id}`}>Billing</Link>
              <Link className="navbar-link" to={`/home/usage/${user.id}`}>Usage</Link>
            </>
          )}

          <Link className="navbar-link" to="/home/history">History</Link>
        </div>

        {/* AVATAR + MOBILE ICON */}
        <div className="nav-right">

          {user && (
            <div ref={avatarRef}>
              <div className="navbar-avatar" onClick={toggleDropdown}>
                {getUserInitials(user.name)}
              </div>
            </div>
          )}

          <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
            ☰
          </div>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <Link className="mobile-link" to="/home">Home</Link>

          {user && (
            <>
              <Link className="mobile-link" to={`/home/billing/${user.id}`}>Billing</Link>
              <Link className="mobile-link" to={`/home/usage/${user.id}`}>Usage</Link>
            </>
          )}

          <Link className="mobile-link" to="/home/history">History</Link>

          {user && (
            <button
              className="mobile-link"
              onClick={handleSignOut}
              style={{ background: "none", border: 0, padding: 0 }}
            >
              Sign Out
            </button>
          )}
        </div>
      )}

      {/* DROPDOWN */}
      {dropdownOpen && user &&
        ReactDOM.createPortal(
          <div
            ref={dropdownRef}
            className="dropdown-card"
            style={{
              position: 'absolute',
              top: dropdownPos.top,
              left: dropdownPos.left,
              zIndex: 999999999,
            }}
          >
            <button className="dropdown-item" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>,
          document.body
        )}
    </>
  );
}

export default Navbar;

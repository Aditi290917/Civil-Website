// import React from "react";
// import { Container, Row, Col } from "reactstrap";


// const Footer = () => {
//   return (
//     <footer className="bg-light py-4">
//       <Container>
//         <Row className="align-items-center">
//           {/* Logo Section */}
//           <Col md="3" className="text-center text-md-start mb-3 mb-md-0">
//             <img
//               src="Logo.png"
//               alt="Logo"
//               style={{ width: "100px", height: "auto" }}
//             />
//           </Col>

//           {/* Quick Links */}
//           <Col md="3" className="text-center text-md-start mb-3 mb-md-0">
//             <h5 className="fw-bold">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <a href="#home" className="text-dark text-decoration-none">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="text-dark text-decoration-none">
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a href="#pricing" className="text-dark text-decoration-none">
//                   Pricing
//                 </a>
//               </li>
//               <li>
//                 <a href="#contact" className="text-dark text-decoration-none">
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </Col>

//           {/* Legal Links */}
//           <Col md="3" className="text-center text-md-start">
//             <h5 className="fw-bold">Legal</h5>
//             <ul className="list-unstyled">
//               <li>
//                 <a
//                   href="#privacy-policy"
//                   className="text-dark text-decoration-none"
//                 >
//                   Privacy Policy
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#terms-of-service"
//                   className="text-dark text-decoration-none"
//                 >
//                   Terms of Service
//                 </a>
//               </li>
//             </ul>
//           </Col>
//         </Row>

//         <hr />

//         {/* Bottom Section */}
//         <Row>
//           <Col className="text-center">
//             <p className="mb-0 text-muted">
//               © {new Date().getFullYear()} PostReview. All rights reserved.
//             </p>
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '40px 0', // Increased height
                textAlign: 'center',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
            }}
        >
            {/* Social Icons */}
            <div className="d-flex justify-content-center gap-4 mb-4">
                <a href="#" style={{ color: '#fff', fontSize: '1.8rem' }}> {/* Increased icon size */}
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="#" style={{ color: '#fff', fontSize: '1.8rem' }}>
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" style={{ color: '#fff', fontSize: '1.8rem' }}>
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" style={{ color: '#fff', fontSize: '1.8rem' }}>
                    <i className="fab fa-google"></i>
                </a>
                <a href="#" style={{ color: '#fff', fontSize: '1.8rem' }}>
                    <i className="fab fa-youtube"></i>
                </a>
            </div>

            {/* Navigation Links */}
            <ul
                className="list-inline"
                style={{
                    marginBottom: '20px', // Increased spacing below links
                    fontSize: '1.2rem', // Slightly increased link size
                    gap: '20px', // Added gap between links
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <li className="list-inline-item">
                    <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                        Home
                    </a>
                </li>
                
                <li className="list-inline-item">
                    <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                        About
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                        Contact Us
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                        Our Team
                    </a>
                </li>
            </ul>

            {/* Copyright Text */}
            <div
                style={{
                    backgroundColor: '#111',
                    padding: '15px 0', // Slightly increased padding
                    fontSize: '1rem',
                }}
            >
                <span>Copyright ©2025; Designed by </span>
                <strong>StrucProof</strong>
            </div>
        </footer>
    );
};

export default Footer;

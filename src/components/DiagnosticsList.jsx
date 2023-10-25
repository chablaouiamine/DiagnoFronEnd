// import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

// export default function DiagnosticsList() {
//   const [diagnostics, setDiagnostics] = useState([]);

//   useEffect(() => {
//     async function fetchDiagnostics() {
//       const response = await fetch("http://localhost:8092/diagno/");
//       const data = await response.json();
//       setDiagnostics(data);
//     }
//     fetchDiagnostics();
//   }, []);

//   return (
//     <div>
//       {diagnostics.map((diagnostic) => (
//         <div key={diagnostic.id}>
//           <h2>{diagnostic.categorie[0].libelle}</h2>
//           <ul>
//             {diagnostic.categorie[0].quest.map((question) => (
//               <li key={question.id}>{question.description}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DiagnosticsList() {
  const [diagnostics, setDiagnostics] = useState([]);

  useEffect(() => {
    async function fetchDiagnostics() {
      const response = await axios.get("http://localhost:8092/diagno/");
      const data = response.data;
      setDiagnostics(data);
    }
    fetchDiagnostics();
  }, []);

  return (
    <Container>
      {diagnostics.map((diagnostic) => (
        <Row key={diagnostic.id}>
          <Col>
            <h2>{diagnostic.categorie[0].libelle}</h2>
            <ul>
              {diagnostic.categorie[0].quest.map((question) => (
                <li key={question.id}>{question.description}</li>
              ))}
            </ul>
          </Col>
        </Row>
      ))}
    </Container>
  );
}

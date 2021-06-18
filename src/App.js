import React, { useState, useEffect } from "react";
import FormJobCard from "./components/FormJobCard";
import JobCard from "./components/JobCard";
import styled from "styled-components";
import swal from "sweetalert2";


//*Styled Componentes*//
const Layout = styled.div`
  width: 99vw;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  
`;
const H1 = styled.h1`
  background-color: #868ea990;  
  width: 100%;
  height: 200px;
  flex-grow: 1;
  text-align: center;
  padding-top: 45px;
  box-sizing: border-box;
  margin: 0;
  text-shadow: 2px 2px #868ea9;
  font-size: 5rem;
  color: #586695;
`;
const H2 = styled.h2`
  background-color: #868ea940;
  width: ${({ width }) => width};
  height: 30%;
  padding: 15px;
  margin: 0;
  flex-grow: 1;
  text-align: center;
  color: #5e6075; 
`;
const Box = styled.div`
  width: ${({ width }) => width};
  height: auto;
`;


//*Function*//
function App() {
  let jobsInitial = JSON.parse(localStorage.getItem("jobsCard"));
  if (!jobsInitial) {
    jobsInitial = [];
  }

  const [jobsCard, setJobsCard] = useState(jobsInitial);

  useEffect(() => {
    let jobsInitial = JSON.parse(localStorage.getItem("jobsCard"));
    if (jobsInitial) {
      localStorage.setItem("jobsCard", JSON.stringify(jobsCard));
    } else {
      localStorage.setItem("jobsCard", JSON.stringify([]));
    }
  }, [jobsCard]);

  const newJobCard = (jobCard) => {
    setJobsCard([...jobsCard, jobCard]);
  };

  const deleteJob = (id) => {
    swal
      .fire({
        title: "Confirmar ",
        text: "Este proceso no se puede revertir !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
      })
      .then((result) => {
        if (result.isConfirmed) {
          const newJob = jobsCard.filter((jobCard) => jobCard.id !== id);
          setJobsCard(newJob);
          swal.fire("Borrado!", "La tarea ha sido borrada.", "success");
        }
      });
  };
  const title =
    jobsCard.length === 0 ? "Sin Tareas Pendientes" : "Listado de Tareas";

  return (
    <Layout>
      <H1>Ficha Taller App</H1>
      <H2 width="43%">Registro de Tareas</H2>
      <H2 width="48%">{title}</H2>
      <Box width="45%">
        <FormJobCard newJobCard={newJobCard} />
      </Box>
      <Box width="55%">
        {jobsCard.map((jobCard) => (
          <JobCard key={jobCard.id} jobCard={jobCard} deleteJob={deleteJob} />
        ))}
      </Box>
    </Layout>
  );
}

export default App;

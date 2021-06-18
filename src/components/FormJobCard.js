import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import styled from "styled-components";


 const Container = styled.div`
   width: 90%;
   text-align: center;
   color: #5e6075;
   margin-top:20px;
 `;


const FormJobCard = ({ newJobCard }) => {
  const [jobCard, setJobCard] = useState({
    date: "",
    client: "",
    phone: "",
    car: "",
    ageCar: "",
    repairs: "",
  });

  const handleChange = (e) => {
    setJobCard({
      ...jobCard,
      [e.target.name]: e.target.value,
    });
  };

  const { date, client, phone, car, ageCar, repairs } = jobCard;
  const [errorDate, setErrorDate] = useState(false);
  const [errorClient, setErrorClient] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorCar, setErrorCar] = useState(false);
  const [errorAgeCar, setErrorAgeCar] = useState(false);
  const [errorRepairs, setErrorRepairs] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);

  const btnDisableOk = () => {
    if (
      date.trim() !== "" &&
      client.trim() !== "" &&
      phone.trim() !== "" &&
      car.trim() !== "" &&
      ageCar.trim() !== "" &&
      repairs.trim() !== ""
    ) {
      setBtnDisable(false);
    }
  };

  const submitJob = (e) => {
    e.preventDefault();
    jobCard.id = uuidv4();
    newJobCard(jobCard);
    setBtnDisable(true);
    setJobCard({
      date: "",
      client: "",
      phone: "",
      car: "",
      ageCar: "",
      repairs: "",
    });

    Swal.fire("Tarea Agregada correctamente");
  };

 
  return (
    <Container>
      <form onSubmit={submitJob}>
        <TextField
          style={{ width: "45%", margin: "25px 15px 25px 55px" }}
          label="Nombre Apellido"
          name="client"
          value={client}
          error={errorClient}
          aria-describedby="input datos cliente"
          helperText="Datos Cliente"
          onBlur={() => {
            client.trim() === "" ? setErrorClient(true) : setErrorClient(false);
            btnDisableOk();
          }}
          onChange={handleChange}
        />
        <TextField
          style={{ width: "30%", margin: "25px 15px" }}
          label="Teléfono"
          name="phone"
          value={phone}
          error={errorPhone}
          aria-describedby="input telefono cliente"
          onBlur={() => {
            phone.trim() === "" ? setErrorPhone(true) : setErrorPhone(false);
            btnDisableOk();
          }}
          onChange={handleChange}
        />

        <TextField
          style={{ width: "45%", margin: "25px 15px 25px 55px" }}
          label="Marca/Modelo/Año"
          name="car"
          value={car}
          error={errorCar}
          aria-describedby="input datos automovil"
          helperText="Datos Automóvil"
          onBlur={() => {
            car.trim() === "" ? setErrorCar(true) : setErrorCar(false);
            btnDisableOk();
          }}
          onChange={handleChange}
        />

        <TextField
          style={{ width: "30%", margin: "25px 15px" }}
          label="Patente"
          name="ageCar"
          value={ageCar}
          error={errorAgeCar}
          aria-describedby="input datos automovil"
          onBlur={() => {
            ageCar.trim() === "" ? setErrorAgeCar(true) : setErrorAgeCar(false);
            btnDisableOk();
          }}
          onChange={handleChange}
        />

        <TextField
          style={{ width: "80%", margin: "25px 15px 25px 55px" }}
          label="Observaciones"
          name="repairs"
          value={repairs}
          error={errorRepairs}
          aria-describedby="input diagnostico reparaciones"
          multiline
          rowsMax={10}
          helperText="Datos Reparaciones"
          onBlur={() => {
            repairs.trim() === ""
              ? setErrorRepairs(true)
              : setErrorRepairs(false);
            btnDisableOk();
          }}
          onChange={handleChange}
        />

        <TextField
          style={{ width: "33%", margin: "35px 15px 25px 45px" }}
          label="Fecha de Ingreso"
          name="date"
          value={date}
          error={errorDate}
          type="date"
          InputLabelProps={{ shrink: true }}
          onBlur={() => {
            date.trim() === "" ? setErrorDate(true) : setErrorDate(false);
            btnDisableOk();
          }}
          onChange={handleChange}
        />

        <Button
          style={{ width: "35%", margin: "55px 5px 25px 95px" }}
          type="submit"
          disabled={btnDisable}
          variant="contained"
          size="small"
          startIcon={<SendIcon />}
        >
          Agregar
        </Button>
      </form>
    </Container>
  );
};

FormJobCard.propTypes = {
  newJobCard: PropTypes.func.isRequired,
};

export default FormJobCard;

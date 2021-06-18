import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction:column;
  background-color: whitesmoke;
  margin-top: 30px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px black;
  width: 98%;
  height:23%;
  padding: 1%;
  justify-content:center;
`;

const HeadData = styled.div`  
  display: flex;
`;

const BodyData = styled.div`
  display: flex;
`;

const HeadData2 = styled.div`
`;

const BodyData2 = styled.div`
`;

const Th = styled.p`
  background-color: #1222;
  border: 1px solid gray;
  width: ${({ width }) => width};
  height: 25px;
  text-align:center;
  margin:2px;
  `;

const Td = styled.p`
  color: #3e496f;
  text-align: center;
  margin: 2px;
  width: ${({ width }) => width};
  text-transform: ${({ textTransform }) => textTransform};

  &:hover {
    color: #606166;
    font-weight: bold;
  }
`;

const JobCard = ({ jobCard, deleteJob }) => {
  const { date, client, phone, car, ageCar, repairs } = jobCard;

  return (
    <Container>
      <HeadData>
        <Th width="10%">Fecha</Th>
        <Th width="30%">Cliente</Th>
        <Th width="15%">Teléfono</Th>
        <Th width="25%">Marca/Modelo/Año</Th>
        <Th width="10%">Patente</Th>

        <Button
          width="20px"
          heigth="50px"
          type="text"
          // variant="outlined"
          size="small"
          startIcon={<DeleteIcon />}
          onClick={() => {
            deleteJob(jobCard.id);
          }}
          color="secondary"
        >
          Borrar
        </Button>
      </HeadData>

      <BodyData>
        <Td width="10%">{date}</Td>
        <Td width="29%" textTransform="capitalize">{client}</Td>
        <Td width="16%">{phone}</Td>
        <Td width="24%" textTransform="capitalize">{car}</Td>
        <Td width="10%" textTransform="uppercase">{ageCar}</Td>
      </BodyData>

      <HeadData2>
        <Th>Datos Reparaciones</Th>
      </HeadData2>

      <BodyData2>
        <Td>{repairs}</Td>
      </BodyData2>
    </Container>
  );
};

JobCard.propTypes = {
  jobCard: PropTypes.object.isRequired,
  deleteJob: PropTypes.func.isRequired,
};

export default JobCard;

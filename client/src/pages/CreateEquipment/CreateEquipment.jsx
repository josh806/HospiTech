import React, { useState } from "react";
import withAuth from "../../Auth/withAuth";
import Navbar from "../../components/Navbar/Navbar";
import { CheckCircle, CloseRounded, Report } from "@mui/icons-material";

import {
  Sheet,
  FormControl,
  FormLabel,
  Input,
  Button,
  Typography,
  Alert,
  IconButton,
} from "@mui/joy";

import "./CreateEquipment.css";

const CreateEquipment = ({ Auth }) => {
  console.log(Auth);
  const [alertSuccess, setAlertSuccess] = useState(false);
  return (
    <div className="create-equipment">
      <Navbar Auth={Auth}></Navbar>
      {alertSuccess && (
        <Alert
          key="Success"
          sx={{ alignItems: "flex-start" }}
          startDecorator={React.cloneElement(<CheckCircle />, {
            sx: { mt: "2px", mx: "4px" },
            fontSize: "xl2",
          })}
          variant="soft"
          color="success"
          endDecorator={
            <IconButton
              variant="soft"
              size="sm"
              color="success"
              onClick={() => setAlertSuccess(false)}
            >
              <CloseRounded />
            </IconButton>
          }
        >
          <div>
            <Typography fontWeight="lg" mt={0.25}>
              Success
            </Typography>
            <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
              Equipment created correctly.
            </Typography>
          </div>
        </Alert>
      )}

      {alertError && (
        <Alert
          key="Error"
          sx={{ alignItems: "flex-start" }}
          startDecorator={React.cloneElement(<Report />, {
            sx: { mt: "2px", mx: "4px" },
            fontSize: "xl2",
          })}
          variant="soft"
          color="danger"
          endDecorator={
            <IconButton
              variant="soft"
              size="sm"
              color="error"
              onClick={() => setAlertError(false)}
            >
              <CloseRounded />
            </IconButton>
          }
        >
          <div>
            <Typography fontWeight="lg" mt={0.25}>
              Error
            </Typography>
            <Typography fontSize="sm" sx={{ opacity: 0.8 }}>
              There was some error.
            </Typography>
          </div>
        </Alert>
      )}

      <CreateEquipment />
    </div>
  );
};

export default withAuth(CreateEquipment);

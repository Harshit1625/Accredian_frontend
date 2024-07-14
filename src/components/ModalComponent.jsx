import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Context } from "../context/ModalContext";
import axios from "axios";

const HelperText = styled("p")(() => ({
  color: "red", // Change this to your desired color
}));

const ModalComponent = () => {
  const [referrerName, setReferrerName] = useState("");
  const [referrerEmail, setReferrerEmail] = useState("");
  const [refereeName, setRefereeName] = useState("");
  const [refereeEmail, setRefereeEmail] = useState("");
  const [refNameError, setRefNameError] = useState(false);
  const [refEmailError, setRefEmailError] = useState(false);
  const [refeeNameError, setRefeeNameError] = useState(false);
  const [refeeEmailError, setRefeeEmailError] = useState(false);

  const context = useContext(Context);

  function handleClick() {
    context.setOpen(false);
  }

  //submitHandler to handle data after submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //variable to set true if any of the fields trigger an errora
    let hasError = false;

    if (referrerName === "") {
      setRefNameError(true);
      hasError = true;
    } else {
      setRefNameError(false);
    }

    if (refereeEmail === "") {
      setRefEmailError(true);
      hasError = true;
    } else {
      setRefEmailError(false);
    }

    if (refereeName === "") {
      setRefeeNameError(true);
      hasError = true;
    } else {
      setRefeeNameError(false);
    }

    if (refereeEmail === "") {
      setRefeeEmailError(true);
      hasError = true;
    } else {
      setRefeeEmailError(false);
    }

    async function dataSender(referraLData) {
      axios
        .post("/data", referraLData)
        .then((response) => console.log(response.data));
    }
    
    //if haserror's not true coz of any error above , then only the data will be submitted

    if (!hasError) {
      const userArray = {
        referrerName,
        referrerEmail,
        refereeName,
        refereeEmail,
      };

      console.log(userArray);
      dataSender(userArray);
      context.setOpen(false);
      alert("Referral Details has been added to the Database");
      setRefereeName("");
      setRefereeEmail("");
      setReferrerName("");
      setReferrerEmail("");
    }
  };

  return (
    <modal>
      <form className="flex flex-col p-6 bg-blue-100 text-center rounded-xl  fixed top-[25vh] xl:left-[37vw] left-[8vw] sm:left-[22vw] md:left-[32vw] lg:left-[35vw] shadow-lg">
        <div className="flex items-center justify-between pr-1">
          <h1 className="text-blue-400 text-[1.5vw] font-bold mr-5">
            <span className="input-icon text-blue-400 mr-3 mb-1">
              <LoginIcon />
            </span>
            Enter Your Data
          </h1>
          <h1 className="">
            <button
              onClick={handleClick}
              className="p-3 pl-4 pr-4 bg-red-600 hover:bg-red-700 transition-all rounded-md text-white font-bold text-[1vw]"
            >
              close
            </button>
          </h1>
        </div>

        {/* input fields */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "40ch" },
          }}
          noValidate
          className="box flex flex-col"
          autoComplete="off"
        >
          <TextField
            required
            label="Enter referrer name"
            id="standard-basic"
            value={referrerName}
            variant="standard"
            helperText={
              refNameError ? (
                <HelperText>Please enter referrer name</HelperText>
              ) : (
                ""
              )
            }
            onChange={(e) => {
              if (e.target.value === "") {
                setRefNameError(true);
              }
              setReferrerName(e.target.value);
            }}
          />
          <TextField
            required
            id="standard-basic"
            label="Enter referrer email"
            value={referrerEmail}
            helperText={
              refEmailError ? (
                <HelperText>Please enter referrer email</HelperText>
              ) : (
                ""
              )
            }
            variant="standard"
            onChange={(e) => {
              if (e.target.value === "") {
                setRefEmailError(true);
              }
              setReferrerEmail(e.target.value);
            }}
          />
          <TextField
            required
            id="standard-basic"
            label="Enter referee name"
            value={refereeName}
            helperText={
              refeeNameError ? (
                <HelperText>Please enter referee email</HelperText>
              ) : (
                ""
              )
            }
            variant="standard"
            onChange={(e) => {
              if (e.target.value === "") {
                setRefeeNameError(true);
              }
              setRefereeName(e.target.value);
            }}
          />
          <TextField
            required
            id="standard-basic"
            label="Enter referee email"
            value={refereeEmail}
            helperText={
              refeeEmailError ? (
                <HelperText>Please enter referee email</HelperText>
              ) : (
                ""
              )
            }
            variant="standard"
            onChange={(e) => {
              if (e.target.value === "") {
                setRefeeEmailError(true);
              }
              setRefereeEmail(e.target.value);
            }}
          />
          <div>
            <Button
              onClick={handleSubmit}
              className="w-1/2"
              variant="contained"
            >
              submit
            </Button>
          </div>
        </Box>
      </form>
    </modal>
  );
};

export default ModalComponent;

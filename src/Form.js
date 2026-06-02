import { useState } from "react";
import Swal from "sweetalert2";
import logo from "./logo.svg";
import "./App";
export default function Form() {
  const [Value, SetValue] = useState({
    name: "",
    phone: "",
    age: "",
    Selcet: "",
    IsEmployea: "true",
  });

  function SetName(event) {
    SetValue({ ...Value, name: event.target.value });
  }

  function SetPhone(event) {
    SetValue({ ...Value, phone: event.target.value });
  }

  function SetAge(event) {
    SetValue({ ...Value, age: event.target.value });
  }

  function SetSelectOption(event) {
    SetValue({ ...Value, Selcet: event.target.value });
  }

  function CheckTheCheckBox(event) {
    SetValue({ ...Value, IsEmployea: event.target.checked });
  }

  function CheckDataToSend(x) {
    x.preventDefault();
    let Condition =
      Value.name === "" &&
      Value.phone === "" &&
      Value.age === "" &&
      Value.age < 18 &&
      Value.Selcet === "";

    if(Condition){
        handleAllWrong();
        return true;
    }else if (Value.name === "") {
      handleClickFalse("Name");
      return false;
    } else if (
      Value.phone === "" ||
      Value.phone.length < 11 ||
      Value.phone.length > 12
    ) {
      handleClickFalse("phone");
      return false;
    } else if (Value.age === "" || Value.age < 18 || Value.age > 35) {
      handleClickFalse("Age");
      return false;
    } else if (Value.Selcet === "") {
      handleClickFalse("Select");
      return false;
    } else {
      handleClickTrue();
      // window.Location.href = "."
      document.getElementById("result").innerHTML = `
        <div style="text-align:start ; font-weight: bolder>
            <hr/>
            1. name : ${Value.name} <hr/>
            2. Phone : ${Value.phone} <hr/>
            3. Age : ${Value.age} <hr/>
            4. Select : ${Value.select} <hr/>
            5. You Employe : ${Value.IsEmployea} <hr/>
        </div>
        `;
      return true;
    }
  }

  function handleClickTrue() {
    Swal.fire({
      title: "🚀 Send successfully!",
      //   text: "Your device has been added successfully",
      icon: "success",
      background: "#1e1e1e",
      color: "#fff",
      confirmButtonColor: "#00c853",
    });
  }

  function handleClickFalse(text) {
    Swal.fire({
      title: "Wrong !",
      text: `${text} Is Wrong`,
      icon: "error",
      confirmButtonColor: "#ff0000"
    });
  }

  function handleAllWrong(){
    Swal.fire({
      title: "All Information Wrong 🚫",
      text: "Please Enter Correct Data",
      icon: "warning",
      confirmButtonColor: "#ff0000"
    });
  }

  let InpusStyle = {
    padding: "7px",
    margin: "0px 10px",
    border: "1px solid blue",
    outline: "none",
    borderRadius: "10px",
    backgroundColor: "transparent",
    color: "#eee",
    fontWeight: "bold",
    boxShadow: "0px 1px 3px blue",
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
  };

  let LableStyle = {
    fontWeight: "bolder",
    color: "white",
    padding: "5px",
    borderRadius: "5px 5px 5px 5px",
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
    boxShadow: "0px 2px 1px blue",
    backgroundColor: "rgba(0,0,200,0.8)",
  };

  let LableStyleAge = {
    fontWeight: "bolder",
    color: "white",
    padding: "7px 16px",
    marginRight: "1px",
    borderRadius: "5px 5px 5px 5px",
    fontFamily: "Georgia, 'Times New Roman', Times, serif",
    oxShadow: "0px 2px 1px blue",
    backgroundColor: "rgba(0,0,200,0.8)",
  };

  return (
    <div className="LogInPage">
      <form onSubmit={CheckDataToSend}>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ fontWeight: "bolder" }}>Requesting a Loan</h1>
        <hr style={{ margin: "20px 10px" }} />
        <div style={{ textAlign: "center" }}>
          <label style={LableStyle} for="Name">
            Name
          </label>
          <input
            style={InpusStyle}
            id="Name"
            placeholder="Name"
            value={Value.name}
            onChange={SetName}
          />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <label style={LableStyle} for="Phone">
            Phone
          </label>
          <input
            style={InpusStyle}
            id="Phone"
            placeholder="Phone"
            value={Value.phone}
            onChange={SetPhone}
          />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <label style={LableStyleAge} for="Age">
            Age
          </label>
          <input
            style={InpusStyle}
            id="Age"
            placeholder="Age"
            value={Value.age}
            onChange={SetAge}
          />
        </div>
        <br />
        <div>
          <select
            style={InpusStyle}
            value={Value.Selcet}
            onChange={SetSelectOption}
          >
            <option>--- Select a Countary ---</option>
            <option Value="KSA">KSA</option>
            <option Value="Egypt">Egypt</option>
            <option Value="Endia">Endia</option>
            <option Value="Torkia">Torkia</option>
            <option Value="Quait">Quait</option>
          </select>
        </div>
        <br />
        <div>
          <label
            for="CheckBox"
            style={{ fontFamily: "Georgia, 'Times New Roman', Times, serif" }}
          >
            I'm Employe
          </label>
          <input
            type="checkbox"
            id="CheckBox"
            checked={Value.IsEmployea}
            placeholder="Name"
            value={Value.name}
            onChange={CheckTheCheckBox}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "7px 10px",
            margin: "20px 10px",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
            border: "none",
            boxShadow: "0px 1px 7px black",
          }}
        >
          Submit
        </button>
        <div id="result"></div>
      </form>
    </div>
  );
}

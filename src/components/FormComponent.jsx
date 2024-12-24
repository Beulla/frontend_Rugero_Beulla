import React, { useState, useEffect } from "react";
import "./styles.css";
import { AiOutlinePaperClip } from "react-icons/ai";
import axios from 'axios';
import { RiNewspaperLine } from "react-icons/ri";
const FormComponent = () => {
  const [formData, setFormData] = useState({
    citizenship:"",
    phoneNumber:"",
    address:"",
    email:"",
    loanAmount:"",
    applicationDate:"",
    motive: "",
    accountNumber:"",
    bankName:""
  });

  const [displaypass, setDisplayPass] = useState("none");
  const [displaynid, setDisplayNid] = useState("none");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "citizenship" && value === "Rwandan") {
      setDisplayPass("none");
      setDisplayNid("block");
    }
    if (name === "citizenship" && value === "Foreigner") {
      setDisplayNid("none");
      setDisplayPass("block");
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/api/business/new", formData)

  };
  return (
    <>
    <div> 
                <nav class="bg-blue-700 fixed w-full z-20 top-0 start-0">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                  <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 custom-ul-class">
                  </ul>
              </div>
                </div>
            </nav>
        </div>
    <div className="container">
      <h1 id="loan">Loan application form</h1>
      <form>
        <div className="businessownerdetails">
          <div className="bod">
            <RiNewspaperLine/> Applicant details
          </div>
          <div style={{ marginLeft: "20px"}}>
            <h4 >Applicant details</h4>

            <div style={{ display: "flex", flexDirection: "column",marginTop:"20px" }}>
              <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                Applicant Citizenship <span style={{ color: "red" }}>*</span>
              </label>
              <select
                onChange={handleChange}
                name="citizenship"
                style={{ width: "250px", padding: "5px" }}
                value={formData.citizenship}
              >
                <option value="#">Select Citizenship</option>
                <option value="Rwandan">Rwandan</option>
                <option value="Foreigner">Foreigner</option>
              </select>
            </div>
            <div style={{ display: `${displaynid}` }}>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "13px",
                  display: "block",marginTop:"20px"
                }}
              >
                Identification Document Number
                <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" placeholder="ID number" name="NID" />
            </div>

            <div style={{display: `${displaypass}` }}>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "13px",
                  display: "block",
                  marginTop:"20px"
                }}
              >
                Passport Number
                <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                placeholder="passport number"
                name="passport"
              />
            </div>

            <div style={{ display: "flex",flexWrap: "wrap", }}>
              <div style={{ flex: "0 0 20%" ,display: "flex", flexDirection: "column",marginTop:"20px" }}>
                <label style={{ fontWeight: "bold", fontSize: "13px"}}>
                  Phone Number
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  value={formData.phoneNumber}
                  name="phoneNumber"
                  placeholder="787858685"
                />
              </div>
              <div
                style={{
                  flex: "0 0 48%",
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                  marginTop:"20px"
                }}
              >
                <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                  E-mail Address
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter an email address"
                  value={formData.email}
                />
              </div>
            </div>
            <h4 style={{marginTop:"20px",
              }}>Applicant Address</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "50px",marginTop:"15px",
              }}
            >
              <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                Province <span style={{ color: "red" }}>*</span>
              </label>
              <select
                onChange={handleChange}
                name="address"
                value={formData.address}
              >
                <option value="#">Select Province</option>
                <option value="Western">Western</option>
                <option value="Eastern">Eastern</option>
                <option value="Northern">Northern</option>
                <option value="Southern">Southern</option>
              </select>
            </div>
          </div>
        </div>

        <div className="businessownerdetails" style={{ marginTop: "40px" }}>
  <div className="bod">
    <RiNewspaperLine />
    Application Details
  </div>
  <div style={{ marginLeft: "20px" }}>
    <h4>Application Details</h4>

    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <div style={{ flex: "0 0 20%", display: "flex", flexDirection: "column" }}>
        <label style={{ fontWeight: "bold", fontSize: "13px" }}>
          Amount <span style={{ color: "red" }}>*</span>
        </label>
        <input
          onChange={handleChange}
          value={formData.loanAmount}
          name="loanAmount"
          type="number"
          placeholder="Enter loan amount"
        />
      </div>

      <div style={{ flex: "0 0 48%", display: "flex", flexDirection: "column" }}>
        <label style={{ fontWeight: "bold", fontSize: "13px" }}>
          Application Date <span style={{ color: "red" }}>*</span>
        </label>
        <input
          onChange={handleChange}
          value={formData.applicationDate}
          type="date"
          name="applicationDate"
          placeholder="Select Date"
        />
      </div>

      <div style={{ flex: "0 0 20%", display: "flex", flexDirection: "column" }}>
        <label style={{ fontWeight: "bold", fontSize: "13px" }}>
          Bank name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          onChange={handleChange}
          value={formData.bankName}
          name="bankName"
          type="text"
          placeholder="Enter bank name"
        />
      </div>

      <div style={{ flex: "0 0 20%", display: "flex", flexDirection: "column" }}>
        <label style={{ fontWeight: "bold", fontSize: "13px" }}>
          Account number <span style={{ color: "red" }}>*</span>
        </label>
        <input
          onChange={handleChange}
          value={formData.accountNumber}
          name="accountNumber"
          type="number"
          placeholder="Enter account number"
        />
      </div>

      <div style={{ flex: "0 0 48%", display: "flex", flexDirection: "column",marginBottom:"30px" }}>
        <label style={{ fontWeight: "bold", fontSize: "13px" }}>
          Motive <span style={{ color: "red" }}>*</span>
        </label>
        <textarea
          onChange={handleChange}
          value={formData.motive}
          name="motive"
          type="text"
          placeholder="Enter reason for application"
        />
      </div>
    </div>
  </div>
</div>
      </form>
      <input
        onChange={handleChange}
        style={{
          margin: "10px",
          background: "#247AFD",
          border: "none",
          borderRadius: "50px",
          padding: "10px",
          color: "#fff",
          position: "relative",
          left: "30%",
          cursor: "pointer"
        }}
        type="submit"
        value="Submit"
        name="submit"
        onClick={handleSubmit}
      />
    </div>
    </>
    
  );
};
export default FormComponent;
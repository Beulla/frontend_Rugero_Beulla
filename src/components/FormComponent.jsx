import React, { useState, useEffect } from "react";
import "./styles.css";
import { AiOutlinePaperClip } from "react-icons/ai";
import axios from 'axios';
import logo from "../assets/irembo-gov.svg"
import { RiNewspaperLine } from "react-icons/ri";
const FormComponent = () => {
  const [formData, setFormData] = useState({
    citizenship:"",
    phoneNumber:"",
    address:"",
    email:"",
    businessType:"",
    companyName:"",
    tinNumber:"",
    registrationDate:"",
    businessaddress:"",
    purposeOfImportation:"",
    productCategory:"",
    Weight:"",
    unitOfMeasurement:"",
    quantity:"",
    description:"",
    NID: "",
    passport: "",
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

  //   useEffect(() => {
  //     console.log(formData);
  //   }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:8080/api/business/new", formData)

  };
  return (
    <>
    <div> 
                <nav class="bg-blue-700 fixed w-full z-20 top-0 start-0">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://irembo.gov.rw/home/citizen/all_services" class="flex items-center space-x-5 rtl:space-x-reverse">
                    <img src={logo} class="h-8" alt="Irembo-Gov logo"/>
                </a>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                  <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 custom-ul-class">
                      <li>
                          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Sign Up</a>
                      </li>
                      <li>
                          <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Log In</a>
                      </li>
                      <li>
                          <input type="search" name="Search" id="search" placeholder="Find Applications" class="text-white" />
                      </li>
                  </ul>
              </div>
                </div>
            </nav>
        </div>
    <div className="container">
      <form>
        <div className="businessownerdetails">
          <div className="bod">
            <RiNewspaperLine/> Business Owner Details
          </div>
          <div style={{ marginLeft: "20px" }}>
            <h4>Business Owner Details</h4>

            <div style={{ display: "flex", flexDirection: "column" }}>
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
                  display: "block",
                }}
              >
                Identification Document Number
                <span style={{ color: "red" }}>*</span>
              </label>
              <input type="text" placeholder="ID number" name="NID" />
            </div>

            <div style={{ display: `${displaypass}` }}>
              <label
                style={{
                  fontWeight: "bold",
                  fontSize: "13px",
                  display: "block",
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

            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontWeight: "bold", fontSize: "13px" }}>
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
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
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
            <h4>Business Owner Address</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "50px",
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
            Business Details
          </div>
          <div style={{ marginLeft: "20px" }}>
            <h4>Business Details</h4>

            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                  Business Type <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  onChange={handleChange}
                  name="businessType"
                  value={formData.businessType}
                >
                  <option>Select Business Type</option>
                  <option value="retailer">Retailer</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="manufacturer">Manufacturer</option>
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                }}
              >
                <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                  Company Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="text"
                  name="companyName"
                  placeholder="Enter Company Name"
                  value={formData.companyName}
                />
              </div>
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                  TIN Number <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.tinNumber}
                  name="tinNumber"
                  type="number"
                  placeholder="Enter TIN number"
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                }}
              >
                <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                  Registration Date<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={handleChange}
                  value={formData.registrationDate}
                  type="date"
                  name="registrationDate"
                  placeholder="Select Date"
                />
              </div>
            </div>
            <h4>Business Owner Address</h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "50px",
              }}
            >
              <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                Province <span style={{ color: "red" }}>*</span>
              </label>
              <select
                onChange={handleChange}
                name="businessaddress"
                style={{ width: "250px", padding: "5px" }}
                value={formData.businessaddress}
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
            Product Information
          </div>
          <div style={{ marginLeft: "20px" }}>
            <h4>Importation Details</h4>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                Purpose of Importation <span style={{ color: "red" }}>*</span>
              </label>
              <select
                onChange={handleChange}
                name="purposeOfImportation"
                value={formData.purposeOfImportation}
              >
                <option>Select the purpose of importation</option>
                <option value="direct">Direct Sale</option>
                <option value="personal">Personal Use</option>
                <option value="trial">Trial Sale</option>
                <option value="other">Other</option>
              </select>
            </div>
            <h4>Product Details</h4>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                Product Category <span style={{ color: "red" }}>*</span>
              </label>
              <select
                onChange={handleChange}
                name="productCategory"
                value={formData.productCategory}
              >
                <option>Select Product Category</option>
                <option value="general">General Purpose</option>
                <option value="construction">Construction Material</option>
                <option value="chemicals">Chemicals</option>
              </select>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                Product Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                onChange={handleChange}
                type="text"
                name="businessType"
                placeholder="Enter product name"
                value={formData.businessType}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                Weight (kg)<span style={{ color: "red" }}>*</span>
              </label>
              <input
                onChange={handleChange}
                type="number"
                value={formData.Weight}
                name="Weight"
                placeholder="Weight"
              />
            </div>

            <div style={{ display: "flex" }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                  Unit of Measurement <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  onChange={handleChange}
                  name="unitOfMeasurement"
                  value={formData.unitOfMeasurement}
                >
                  <option value="#">Enter Unit Of Measurement</option>
                  <option value="kgs">Kgs</option>
                  <option value="tonnes">Tonnes</option>
                </select>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "20px",
                }}
              >
                <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                  Quantity of product(s)<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  onChange={handleChange}
                  type="number"
                  name="quantity"
                  placeholder="Enter Quantity"
                  value={formData.quantity}
                />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ fontWeight: "bold", fontSize: "13px" }}>
                Description of Product(s)){" "}
                <span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                value={formData.description}
                onChange={handleChange}
                name="description"
                placeholder="Enter Product Description"
                style={{
                  width: "500px",
                  height: "200px",
                  outline: "none",
                  marginBottom: "30px",
                }}
              ></textarea>
            </div>
          </div>
        </div>
      </form>

      <input
        onChange={handleChange}
        style={{
          margin: "30px",
          background: "#247AFD",
          border: "none",
          borderRadius: "50px",
          padding: "10px",
          color: "#fff",
          position: "relative",
          left: "30%",
          cursor: "pointer",
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
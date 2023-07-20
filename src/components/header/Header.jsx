import React, { useEffect } from "react";
import "./style.scss";
import Logo from "./../../assets/picture/logo.png";
import Logo2 from "./../../assets/picture/logo2.png";
import Jonthn from "./../../assets/picture/jonathan@3x.png";
import ModalFooter from "./../../assets/picture/modalFooter.svg";
import Form from "react-bootstrap/Form";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import { postAPI } from "../../service/apiInstance";
import { useNavigate } from "react-router-dom";
import { ROUTES_CONST } from "../../constants/routeConstant";
import { Formik } from "formik";
import { errorToaster, succesToaster } from "../../utils/toaster";
import * as Yup from "yup";
import ErrorMessage from "../common/ErrorMessage/ErrorMessage";
import { isEmail } from "../../utils/isEmail";
import { useRegisterModal } from "../../hooks/useRegisterModal";
import TelegramLoginButton from "../socialMedia/TelegramLoginButton";

const validationSchema = Yup.object({
  name: Yup.string().required(),
  // dob: Yup.string().required(),
  dob: Yup.date()
    .required("Date of Birth is required")
    .test("age", "You must be at least 18 years old", function (value) {
      const currentDate = new Date();
      const eighteenYearsAgo = new Date().setFullYear(
        currentDate.getFullYear() - 18
      );
      return new Date(value) <= eighteenYearsAgo;
    }),
  emailOrNumber: Yup.string()
    .required("This field is required")
    .matches(
      // /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
      // /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$|^(\+\d{1,3}\s?)?[\d-]{6,}$/i,
      /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$|^(\+\d{1,3}\s?)?[\d-]{10,}$/i,
      "Invalid email or mobile number"
    ),
  password: Yup.string().required(),
  agreement: Yup.boolean().required(),
});

const Header = (props) => {
  const { isRegisterOpen, setIsRegisterOpen } = useRegisterModal();
  const navigate = useNavigate();
  // const [name, setName] = useState('');
  // const [dob, setDob] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const handleClose = () => setIsRegisterOpen(false);
  const handleShow = () => setIsRegisterOpen(true);
  const initialValue = {
    name: "",
    dob: "",
    emailOrNumber: "",
    password: "",
    agreement: "",
  };

  const Handler = async (values) => {
    console.log("isEmail==>>", isEmail(values.emailOrNumber));
    const params = {
      name: values?.name,
      dob: values?.dob,
      email: isEmail(values.emailOrNumber) ? values.emailOrNumber : "",
      phone: isEmail(values.emailOrNumber) ? "" : values.emailOrNumber,
      // emailOrNumber: values?.emailOrNumber,
      password: values?.password,
      agreement: values?.agreement,
    };
    console.log(params);
    // guard claws
    if (!values?.agreement) {
      errorToaster("Please accept the User Agreement");
      return;
    }

    try {
      const res = await postAPI("user/user-request", params);
      console.log(res);
      if (res.data.success) {
        succesToaster(res.data.message);
      } else {
        errorToaster(res.data.message);
      }
    } catch (error) {
      console.log(error);
      errorToaster("something went wrong");
    } finally {
      setIsRegisterOpen(false);
    }
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg lp-navBar py-3"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <a className="lp-navbar-brand" href="/">
            <span className="lp-logo2">
              <img src={Logo2} alt="logo2" className="w-100 h-100 " />
            </span>
            <img src={Logo} className="w-100 h-100 logoText" alt="logo" />
          </a>

          <div
            className="collapse navbar-collapse lp-navLink"
            id="navbarsExample04"
          >
            {/*navbar-nav ==>lp-navbar-nav  error */}
            <ul className="navbar-nav mx-auto mb-2 mb-md-0 gap-5">
              <li className="lp-nav-item">
                {/*nav-link ==>lp-nav-link  error */}
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#Products"
                >
                  Products
                </a>
              </li>
              <li className="lp-nav-item">
                <a className="nav-link" href="#aboutUs">
                  About us
                </a>
              </li>
              <li className="lp-nav-item">
                <a className="nav-link" href="#sponsorship">
                  Sponsorship
                </a>
              </li>
              <li class="lp-nav-item">
                <a class="nav-link" href="#partners">
                  partners
                </a>
              </li>
              {/* <TelegramLoginButton/> */}
            </ul>
          </div>
          <div className="d-flex align-items-center gap-2">
            <div className="lp-navbarButton">
              <button
                className="btn text-uppercase px-sm-2"
                onClick={handleShow}
              >
                register
              </button>
            </div>
            {/* <div class="lp-navbarButton">
              <button class="btn text-uppercase px-sm-2" onClick={() => navigate(ROUTES_CONST.CASINO)}>Run App</button>
            </div> */}
          </div>
        </div>
      </nav>
      <div className="lp-mobilenav py-2 d-block d-lg-none ">
        <ul className=" lp-navul mb-2 mb-md-0 gap-3 d-flex align-items-center justify-content-center list-unstyled">
          <li className="lp-nav-item mb-2 mb-sm-0">
            <a
              className="nav-link px-sm-3 py-sm-2 px-2 py-2 active"
              aria-current="page"
              href="/"
            >
              Products
            </a>
          </li>
          <li className="lp-nav-item mb-2 mb-sm-0">
            <a className="nav-link px-sm-3 py-sm-2 px-2 py-2" href="/">
              About us
            </a>
          </li>
          <li className="lp-nav-item mb-2 mb-sm-0">
            <a className="nav-link px-sm-3 py-sm-2 px-2 py-2" href="/">
              Sponsorship
            </a>
          </li>
          <li className="lp-nav-item mb-2 mb-sm-0">
            <a className="nav-link px-sm-3 py-sm-2 px-2 py-2" href="/">
              partners
            </a>
          </li>
        </ul>
      </div>

      <Modal
        show={isRegisterOpen}
        onHide={handleClose}
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="lp-ragisterModal"
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="d-lg-none d-block fw-bold text-white lp-registerHeading">
            Register
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="lp-dambleUser d-flex px-sm-0 px-4">
                <img src={Jonthn} alt="Jonthn" className="mx-auto" />
              </div>
              <div className="lp-userName fw-bolder text-white text-center">
                WELCOME TO DAMBLE <br />{" "}
                <span className="fw-normal">
                  YOUR GAMING JOURNEY STARTS NOW
                </span>{" "}
              </div>
            </div>
            <div className="col-lg-6 px0">
              <Formik
                initialValues={initialValue}
                // validate={validationSchema}
                validationSchema={validationSchema}
                onSubmit={Handler}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleSubmit,
                  handleChange,
                  handleBlur,
                }) => (
                  <form className="row mx-0 form gap-3">
                    <div className="col-12 fw-bold text-white lp-registerHeading mb-3 d-lg-block d-none">
                      Register
                    </div>
                    {/* form-control => lp-form-control error */}
                    <div className="col-12">
                      <input
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        value={values.name}
                        name="name"
                        onChange={handleChange}
                        type="text"
                        className="form-control border-0 shadow-none"
                        id="exampleForm1"
                        placeholder="Name"
                        onBlur={handleBlur}
                      />
                      <ErrorMessage>
                        {errors.name && touched.name && errors.name}
                      </ErrorMessage>
                    </div>
                    <div className="col-12">
                      <input
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        value={values.emailOrNumber}
                        onChange={handleChange}
                        name="emailOrNumber"
                        type="text"
                        className="form-control border-0 shadow-none"
                        id="exampleForm2"
                        placeholder="Email\Phone number"
                        onBlur={handleBlur}
                      />
                      <ErrorMessage>
                        {errors.emailOrNumber &&
                          touched.emailOrNumber &&
                          errors.emailOrNumber}
                      </ErrorMessage>
                    </div>
                    <div className="col-12">
                      <input
                        // value={dob}
                        // onChange={(e) => setDob(e.target.value)}
                        value={values.dob}
                        onChange={handleChange}
                        name="dob"
                        type="date"
                        className="form-control registerDate border-0 shadow-none"
                        id="exampleForm3"
                        placeholder="Date of Birth"
                        onBlur={handleBlur}
                      />
                      <ErrorMessage>
                        {errors.dob && touched.dob && errors.dob}
                      </ErrorMessage>
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        // value={password}
                        // onChange={(e) => setPassword(e.target.value)}
                        value={values.password}
                        onChange={handleChange}
                        name="password"
                        className="form-control border-0 shadow-none"
                        id="exampleForm4"
                        placeholder="Password"
                        onBlur={handleBlur}
                      />
                      <ErrorMessage>
                        {errors.password && touched.password && errors.password}
                      </ErrorMessage>
                    </div>
                    <div className="col-10 mx-md-0 mx-auto">
                      <div className="form-check">
                        {/* <input */}
                        <Form.Check
                          type="checkbox"
                          id="agreement"
                          name="agreement"
                          value={values.agreement}
                          // onChange={e => {
                          //   handleChange(e)
                          // }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <label htmlFor="agreement" className="form-check-label">
                          I agree to the <span>User Agreement</span> & Confirm I
                          am at least 18 years old
                        </label>
                        <ErrorMessage>
                          {errors.agreement &&
                            touched.agreement &&
                            errors.agreement}
                        </ErrorMessage>
                      </div>
                    </div>
                    <div className="col-10 mx-auto">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        // onClick={Handler}
                        className="btn lp-ragisterBtn w-100 border-0"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center my-sm-4 my-3">
          <div className="lp-footerImg">
            <img src={ModalFooter} alt="ModalFooter" />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;

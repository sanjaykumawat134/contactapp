import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { BsFillPlusSquareFill, BsUpload } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { withFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
const ContactForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    dirty,
    isValid,
    isSubmitting,
    setValues,
  } = props;
  console.log("values", values, errors, touched);
  return (
    <Container>
      <h2 className="text-center p-2 m-2">Contact App</h2>
      <Row className="p-4 m-4">
        <Col md={2}></Col>
        <Col md={8}>
          <Row>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    First Name <span className="form-error">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your first name here"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="firstName"
                  />
                  <Form.Text className="form-error">
                    {touched.firstName && errors.firstName}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    Email <span className="form-error">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your email here"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Form.Text className="form-error">
                    {touched.email && errors.email}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <p>Residential Address</p>
                  <Form.Label>
                    Street 1 <span className="form-error">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="rStreet1"
                    value={values.rStreet1}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Form.Text className="form-error">
                    {touched.rStreet1 && errors.rStreet1}
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Same as Residential Address "
                    checked={values.isSameAddress}
                    onChange={() => {
                      setValues({
                        ...values,
                        isSameAddress: !values.isSameAddress,
                      });
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <p>Permanent Address</p>
                  <Form.Label>
                    Street 1 <span className="form-error">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="pStreet1"
                    value={
                      values.isSameAddress ? values.rStreet1 : values.pStreet1
                    }
                    disabled={values.isSameAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Form.Text className="form-error">
                    {touched.pStreet1 && errors.pStreet1}
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>
                    Last Name <span className="form-error">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your last name here"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Form.Text className="form-error">
                    {touched.lastName && errors.lastName}
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  style={{
                    marginBottom: "32px",
                  }}
                  controlId="formBasicEmail"
                >
                  <Form.Label>
                    Date of Birth <span className="form-error">*</span>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="Date of Birth"
                    name="dob"
                    value={values.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Form.Text className="text-muted">
                    (Min age should be 18 Years)
                  </Form.Text>
                  <Form.Text className="form-error">
                    {touched.dob && errors.dob}
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  style={{
                    marginBottom: "100px",
                  }}
                  controlId="formBasicEmail"
                >
                  <Form.Label>
                    Street 2 <span className="form-error">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="rStreet2"
                    value={values.rStreet2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Form.Text className="form-error">
                    {touched.rStreet2 && errors.rStreet2}
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>
                    Street 2 <span className="form-error">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="pStreet2"
                    disabled={values.isSameAddress}
                    value={
                      values.isSameAddress ? values.rStreet2 : values.pStreet2
                    }
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Form.Text className="form-error">
                    {touched.pStreet2 && errors.pStreet2}
                  </Form.Text>
                </Form.Group>
              </Form>
            </Col>
            <Row>
              <h6>Upload Documents</h6>

              <Col md={11}>
                {values.uploaddocuments.map((doc, ind) => {
                  return (
                    <Form
                      key={ind}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          File Name <span className="form-error">*</span>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name={`uploaddocuments.${ind}.fileName`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <Form.Text className="form-error">
                          {touched.uploaddocuments &&
                            touched.uploaddocuments[ind] &&
                            touched.uploaddocuments[ind].fileName &&
                            errors.uploaddocuments &&
                            errors.uploaddocuments[ind] &&
                            errors.uploaddocuments[ind].fileName}
                        </Form.Text>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Type of File <span className="form-error">*</span>
                        </Form.Label>
                        <Form.Select
                          type="text"
                          name={`uploaddocuments.${ind}.type`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={doc.type}
                        >
                          <option value=""></option>
                          <option value="image">Image</option>
                          <option value="pdf">Pdf</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Text className="form-error">
                        {touched.uploaddocuments &&
                          touched.uploaddocuments[ind] &&
                          touched.uploaddocuments[ind].type &&
                          errors.uploaddocuments &&
                          errors.uploaddocuments[ind] &&
                          errors.uploaddocuments[ind].type}
                      </Form.Text>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>
                          Upload Document <span className="form-error">*</span>
                        </Form.Label>
                        <div className="position-relative">
                          <Form.Control
                            type="file"
                            name={`uploaddocuments.${ind}.type`}
                            onChange={(e) => {
                              setValues({
                                ...values,
                                uploaddocuments: values.uploaddocuments.map(
                                  (doc, index) => {
                                    if (ind == index) {
                                      return {
                                        ...doc,
                                        file: e.target.files[0],
                                      };
                                    }
                                    return doc;
                                  }
                                ),
                              });
                            }}
                          />
                          <BsUpload className="position-absolute upload-icon" />
                        </div>

                        <Form.Text className="form-error">
                          {errors.uploaddocuments &&
                            errors.uploaddocuments[ind] &&
                            errors.uploaddocuments[ind].file}
                        </Form.Text>
                      </Form.Group>
                      <BsFillPlusSquareFill
                        className="icon-common"
                        onClick={() => {
                          setValues({
                            ...values,
                            uploaddocuments: values.uploaddocuments.concat({
                              fileName: "",
                              type: null,
                              file: null,
                            }),
                          });
                        }}
                      />
                      <AiFillDelete
                        className="icon-common"
                        onClick={() => {
                          setValues({
                            ...values,
                            uploaddocuments: [
                              ...values.uploaddocuments.slice(0, ind),
                              ...values.uploaddocuments.slice(ind + 1),
                            ],
                          });
                        }}
                      />
                    </Form>
                  );
                })}

                {/* <Form className="d-flex justify-content-between align-items-center">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      File Name <span className="form-error">*</span>
                    </Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      Type of File <span className="form-error">*</span>
                    </Form.Label>
                    <Form.Control type="text" />
                    <Form.Text>(Image,pdf)</Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>
                      Upload Document <span className="form-error">*</span>
                    </Form.Label>
                    <div className="position-relative">
                      <Form.Control type="text" className="position-static" />
                      <Form.Text>(Image,pdf)</Form.Text>
                      <BsUpload className="position-absolute upload-icon" />
                    </div>
                  </Form.Group>
                  <BsFillPlusSquareFill className="icon-common" />
                </Form> */}
              </Col>
              <Col md={1}></Col>
            </Row>
            <Row>
              <Col md={4}></Col>
              <Col md={4}>
                <Button
                  type="submit"
                  className="p-2"
                  variant="dark"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Col>
              <Col md={4}></Col>
            </Row>
          </Row>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
};

const EnhancedContactForm = withFormik({
  mapPropsToValues: (props) => ({
    firstName: "",
    lastName: "",
    email: "",
    rStreet1: "",
    rStreet2: "",
    dob: new Date(),
    isSameAddress: false,
    pStreet1: "",
    pStreet2: "",
    uploaddocuments: [
      {
        fileName: "",
        type: "",
        file: null,
      },
    ],
  }),
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required(),
    isSameAddress: Yup.boolean(),
    lastName: Yup.string().required(),
    email: Yup.string().required().email(),
    rStreet1: Yup.string("Street1 is required").required(),
    rStreet2: Yup.string("Street2 is required").required(),
    pStreet1: Yup.string().when("isSameAddress", {
      is: false, //just an e.g. you can return a function
      then: () => Yup.string().required("Street1 is required"),
    }),
    pStreet2: Yup.string().when("isSameAddress", {
      is: false, //just an e.g. you can return a function
      then: () => Yup.string().required("Street2 is required"),
    }),
    dob: Yup.date()
      .nullable()
      .test("dob", "Should be greater than 18", function (value, ctx) {
        const dob = new Date(value);
        const validDate = new Date();
        const valid = validDate.getFullYear() - dob.getFullYear() >= 18;
        return !valid ? ctx.createError() : valid;
      })
      .required("Required"),
    uploaddocuments: Yup.array().of(
      Yup.object().shape({
        fileName: Yup.string().required("File name required"),
        type: Yup.string()
          .oneOf(["image", "pdf"])
          .required("Please select the file type"),
        file: Yup.mixed().required("File is required"),
      })
    ),
  }),
  handleSubmit: async (values, { setSubmitting, props }) => {
    try {
      setSubmitting(true);
      console.log("submitttt");
      let uploaddocuments = values.uploaddocuments;

      uploaddocuments.forEach((item) => {
        let fileType = item.type;
        if (fileType == "image") {
          let fileName = item.file.name;
          if (!/\.(jpe?g|png|gif|bmp)$/i.test(fileName)) {
            alert("Invalid file type");
          }
        }
        if (fileType == "pdf") {
          let fileName = item.file.name;
          if (!/\.(pdf)$/i.test(fileName)) {
            alert("Invalid file type");
          }
        }
      });
      const {
        firstName,
        lastName,
        email,
        rStreet1,
        rStreet2,
        dob,
        isSameAddress,
        pStreet1,
        pStreet2,
      } = values;
      let body = {
        first_name: values.firstName,
        last_name: values.last_name,
        email: values.email,
        is_same_address: isSameAddress,
        residential_street1: rStreet1,
        residential_street2: rStreet2,
        dob: values.dob,
        permanent_street1: pStreet1,
        permanent_street2: pStreet2,
        upload_documents: uploaddocuments.map((item) => {
          return {
            name: item.fileName,
            type: item.type,
          };
        }),
      };
      const formData = new FormData();
      for (let i in body) {
        formData.append(i, JSON.stringify(body[i]));
      }
      let uploadFiles = uploaddocuments.map((item) => {
        formData.append("uploadFiles", item.file);
      });
      let resp = await axios.post(
        "http://localhost:3001/contact/add/",
        formData
      );
      if (resp.status == 201) {
        alert("successfully registered");
      }
    } catch (error) {}
  },
  displayName: "Login",
})(ContactForm);

export default EnhancedContactForm;

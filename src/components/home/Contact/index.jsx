import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormField from "../../ui/formfield";
import { validate } from "../../ui/misc";
import { database } from "../../../firebase";
import { ref, query, set, get, push, orderByChild, equalTo } from "firebase/database";

class Contact extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      name: {
        element: "input",
        value: "",
        config: {
          name: "name_input",
          type: "text",
          placeholder: "Enter your name",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
      },
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "text",
          placeholder: "Enter your email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        validationMessage: "",
      },
      message: {
        element: "textarea",
        value: "",
        config: {
          name: "message_input",
          rows: 4,
          placeholder: "Your message",
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: "",
      },
    },
  };

  updateForm = (element) => {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] };
    newElement.value = element.e.target.value;
    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;

    this.setState({
      formError: false,
      formData: newFormData,
    });
  };

  resetFormSuccess = (type) => {
    const newFormData = { ...this.state.formData };
    for (let key in newFormData) {
      newFormData[key].value = "";
      newFormData[key].valid = false;
      newFormData[key].validationMessage = "";
    }
    this.setState({
      formError: false,
      formSuccess: type ? "Message sent successfully!" : "Error sending message.",
    });
    this.clearSuccessMessage();
  };

  clearSuccessMessage = () => {
    setTimeout(() => {
      this.setState({
        formSuccess: "",
      });
    }, 2000);
  };

  submitForm = async (e) => {
    e.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;
    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }
    if (formIsValid) {
      const { name, email, message } = dataToSubmit;
      const newMessageRef = push(ref(database, "messages"));
      try {
        await set(newMessageRef, {
          name,
          email,
          message,
          timestamp: Date.now(),
        });
        this.resetFormSuccess(true);
      } catch (error) {
        console.error("Error sending message", error);
        this.resetFormSuccess(false);
      }
    } else {
      this.setState({
        formError: true,
      });
    }
  };

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper" style={{
            background: '#ffffff'
        }}>
          <form onSubmit={(e) => this.submitForm(e)}>
            <div className="enroll_title" style={{ paddingTop: "70px" }}>
              Contact Us
            </div>
            <div className="enroll_input">
              <FormField
                id={"name"}
                formdata={this.state.formData.name}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={"email"}
                formdata={this.state.formData.email}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={"message"}
                formdata={this.state.formData.message}
                change={(element) => this.updateForm(element)}
              />

              {this.state.formError ? (
                <div className="error_label">
                  Something went wrong, please try again.
                </div>
              ) : null}

              <div className="success_label">{this.state.formSuccess}</div>

              <button onClick={(e) => this.submitForm(e)}>Send Message</button>

              <div className="enroll_discl">
                Thank you for reaching out! We will get back to you shortly.
              </div>
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Contact;

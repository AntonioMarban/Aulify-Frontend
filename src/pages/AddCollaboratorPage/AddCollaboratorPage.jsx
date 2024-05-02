import React from "react";
import AddCollaboratorForm from "../../components/AddCollaboratorForm/AddCollaboratorForm";
import "./AddCollaboratorPage.css"; // Import the CSS file
import logoAulify from "../../assets/logoAulify1.png"; // Import the image

function AddCollaboratorPage() {
  return (
    <div className="add-collaborator-page-container">
      <img src={logoAulify} alt="Logo" className="add-collaborator-page-logo" />
      <div className="add-collaborator-page-form-container">
        <AddCollaboratorForm />
      </div>
    </div>
  );
}

export default AddCollaboratorPage;

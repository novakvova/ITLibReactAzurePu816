import React, { Component } from "react";
import "./Modal.scss";
import Cropper from "react-cropper";
import FileFieldGroup from '../FileFieldGroup';

class CropperModal extends Component {

    state = {
      src: "",
      label: '',
      modal: false
    };

    render() {
        return (
            <>
             <FileFieldGroup
                  field="image"
                  label=""
                  value=""
                  error=""
                  onChange={this.onChange}
                  type="file"
                />
            </>
        );
    }
}
export default CropperModal;
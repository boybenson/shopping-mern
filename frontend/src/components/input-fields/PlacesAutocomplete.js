import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import TextField from "./TextField";
import { Form } from "react-bootstrap";
export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  handleSelect = (address) => {
    // console.log(address);
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              {...getInputProps({})}
              name="address"
              errors={this.props.errors}
              touched={this.props.touched}
              label="Delivery Location"
              defaultValue={this.props.defaultValue}
              placeholder="Search Places..."
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}

              {suggestions.map((suggestion, index) => {
                return (
                  <Form.Control
                    {...getSuggestionItemProps(suggestion, {})}
                    key={index}
                    style={{ cursor: "pointer" }}
                    onClick={this.props.onChange}
                    value={suggestion.description}
                    name={this.props.name}
                    readOnly
                  />
                  // <i className="far fa-compass"></i>

                  // <div
                  //   {...getSuggestionItemProps(suggestion, {})}
                  //   key={index}
                  //   style={{ cursor: "pointer" }}
                  //   onClick={this.props.onChange}
                  // >
                  //   <i className="far fa-compass"></i> {suggestion.description}
                  // </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

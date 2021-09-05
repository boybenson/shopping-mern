import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import TextField from "./TextField";
import { ListGroup } from "react-bootstrap";

export default class LocationSearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = (address) => {
    this.setState({ address });
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <TextField
              {...getInputProps()}
              placeholder={this.props.placeholder}
              name={this.props.name}
              onBlur={this.props.onBlur}
              touched={this.props.touched}
              label={this.props.label}
              errors={this.props.errors}
              values={this.props.values}
              defaultValue={this.state.address}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion, index) => {
                return (
                  <ListGroup
                    key={index}
                    {...getSuggestionItemProps(suggestion, {})}
                  >
                    <ListGroup.Item className="search-item">
                      {" "}
                      <i className="fas fa-search-location">
                        {" "}
                        {suggestion.description}
                      </i>{" "}
                    </ListGroup.Item>
                  </ListGroup>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}

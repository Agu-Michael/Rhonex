import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { RhonexLogo } from "../ui/icons";
import InputBase from "@material-ui/core/InputBase";
import { IconButton } from "@material-ui/core";
import {
  Search,
  LinkedIn,
  Facebook,
  Twitter,
  Instagram,
  ExpandMore,
} from "@material-ui/icons";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null, // Anchor element for the dropdown menu
    };
  }

  // Function to handle opening the dropdown menu
  handleMenuOpen = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  // Function to handle closing the dropdown menu
  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);

    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "none",
          padding: " 0",
          borderBottom: " 2px solid #00285e",
        }}
      >
        {/* Top toolbar with search bar and social media icons */}
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#03989e",
            marginTop: 0,
          }}
        >
          {/* Middle section with search bar */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <InputBase
                placeholder="Search here..."
                style={{ marginLeft: "10px", flex: 1, width: "500px" }}
              />
              <Button
                variant="contained"
                color="inherit"
                style={{
                  marginRight: "10px",
                  backgroundColor: "#03989e",
                  transition: "border-color 0.3s ease-in-out",
                  borderColor: "#00c2c6", // Initial border color
                }}
                startIcon={<Search />}
              >
                Search
              </Button>
            </div>
          </div>

          {/* Right side of the header with social media icons */}
          <div>
            <IconButton color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
            <IconButton color="inherit">
              <Twitter />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
          </div>
        </Toolbar>

        {/* Main toolbar with firm details and dropdown */}
        <Toolbar
          style={{
            display: "flex",
          }}
        >
          <div style={{ flexGrow: "1" }} className="header_handler">
            <div className="header_logo mt-2">
              <RhonexLogo link={true} linkTo="/" width="54px" height="54px" />

              <div className="header_title_handler mt-2">
                <div className="header_logo_venue">Rhonex Solicitors</div>
                <div className="header_logo_title">& Attorneys</div>
              </div>
            </div>
          </div>

          {/* Dropdown for "The Firm" */}
          <Button
            onClick={this.handleMenuOpen}
            style={{
              color: "#03989e",
              fontSize: "17px",
              marginRight: "25px",
              display: "flex",
              alignItems: "center",
              transition: "border-color 0.3s ease-in-out",
              borderColor: "#00c2c6", // Initial border color
            }}
            endIcon={<ExpandMore style={{ color: "#03989e" }} />}
          >
            The Firm
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={this.handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            getContentAnchorEl={null}
            style={{ marginTop: "10px" }}
          >
            <MenuItem component={Link} to="/overview" onClick={this.handleMenuClose}>
              Overview
            </MenuItem>
            <MenuItem component={Link} to="/values" onClick={this.handleMenuClose}>
              Our Values
            </MenuItem>
            <MenuItem component={Link} to="/reach" onClick={this.handleMenuClose}>
              Our Reach
            </MenuItem>
            <MenuItem component={Link} to="/awards" onClick={this.handleMenuClose}>
              Awards and Accolades
            </MenuItem>
          </Menu>

          {/* Other navigation buttons */}
          <Link to="/the_team">
            <Button
              style={{
                color: "#03989e",
                fontSize: "17px",
                marginRight: "25px",
                transition: "border-color 0.3s ease-in-out",
                borderColor: "#00c2c6", // Initial border color
              }}
            >
              The Team
            </Button>
          </Link>
          <Link to="/the_matches">
            <Button
              style={{
                color: "#03989e",
                fontSize: "17px",
                marginRight: "25px",
                transition: "border-color 0.3s ease-in-out",
                borderColor: "#00c2c6", // Initial border color
              }}
            >
              Practices
            </Button>
          </Link>
          <Link to="/the_matches">
            <Button
              style={{
                color: "#03989e",
                fontSize: "17px",
                marginRight: "25px",
                transition: "border-color 0.3s ease-in-out",
                borderColor: "#00c2c6", // Initial border color
              }}
            >
              People
            </Button>
          </Link>
          <Link to="/the_matches">
            <Button
              style={{
                color: "#03989e",
                fontSize: "17px",
                marginRight: "25px",
                transition: "border-color 0.3s ease-in-out",
                borderColor: "#00c2c6", // Initial border color
              }}
            >
              Careers
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;

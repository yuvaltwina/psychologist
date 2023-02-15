import "./Drawer.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import { LINKS_INFO } from "../../utils/data/linksInfo";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { RxHamburgerMenu } from "react-icons/rx";
import classnames from "classnames";
import { useState } from "react";

export default function TemporaryDrawer({ activeButton, clickHandler }) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollOnClick = (title) => {
    setTimeout(() => {
      clickHandler(title);
    }, 10);
    setIsOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    setIsOpen(open);
  };

  return (
    <div className="drawer-all-comp-contianer">
      <Button className="drawer-button-continer" onClick={toggleDrawer(true)}>
        <RxHamburgerMenu className="drawer-hamburger-button" />
      </Button>
      <div className="drawer-container">
        <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
          <Box
            sx={{
              width: 250,
            }}
            role="presentation"
            onClick={() => {
              toggleDrawer(false);
            }}
          >
            <List>
              {LINKS_INFO.modal.map(({ title }) => {
                const isLinkSelected = activeButton === title;
                const linkClass = classnames({
                  "nav-link": true,
                  "nav-selcted": isLinkSelected,
                });
                return (
                  <ListItem key={title} disablePadding>
                    <ListItemButton
                      sx={{
                        padding: 2,
                      }}
                      className={`${linkClass} drawer-link`}
                      onClick={() => {
                        scrollOnClick(title);
                      }}
                    >
                      <ListItemText
                        primary={title}
                        classes={{ primary: "drawer-button-text " }}
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      </div>
    </div>
  );
}

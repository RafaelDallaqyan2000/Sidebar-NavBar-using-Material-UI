import { useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { Box } from "@mui/material";
import "./nestedListStyles.css";

type NestedListType = {
  openedSidebar: boolean;
};

export default function NestedList({ openedSidebar }: NestedListType) {
  const [show, setShow] = useState<boolean>(false);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <List
      sx={{ bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      className="list-container"
    >
      <ListItemButton className="list-items">
        <ListItemIcon className="list-icons">
          <img src={require("../../../icons/analitic-icon.svg").default} />
        </ListItemIcon>
        {openedSidebar && <ListItemText primary="Аналитика проекта" />}
      </ListItemButton>

      <Box>
        <ListItemButton className="list-items" onClick={handleClick}>
          <ListItemIcon className="list-icons">
            <img src={require("../../../icons/position-icon.svg").default} />
          </ListItemIcon>

          {openedSidebar && (
            <>
              <ListItemText primary="Позиции из Я.Вебмастера" />

              <ListItemIcon sx={{ minWidth: "initial" }}>
                <img
                  src={require("../../../icons/vector-icon.svg").default}
                  style={{ transform: `rotate(${show ? 0 : 180}deg)` }}
                />
              </ListItemIcon>
            </>
          )}
        </ListItemButton>

        {openedSidebar && (
          <Collapse in={show} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ p: "0 0 0 57px", mt: "4px" }}>
                <ListItemText primary="Запросы Я.Вебмастер" />
              </ListItemButton>

              <ListItemButton sx={{ p: "0 0 0 57px" }}>
                <ListItemText primary="URLs Я.Вебмастер" />
              </ListItemButton>
            </List>
          </Collapse>
        )}
      </Box>

      <ListItemButton className="list-items">
        <ListItemIcon className="list-icons">
          <img
            src={require("../../../icons/search-with-comment-icon.svg").default}
          />
        </ListItemIcon>
        {openedSidebar && <ListItemText primary="Съем позиций (Live/XML)" />}
      </ListItemButton>

      <Box sx={{ height: "1px", backgroundColor: "#E5E5EA" }} />

      <ListItemButton className="list-items">
        <ListItemIcon className="list-icons">
          <img src={require("../../../icons/my-projects-icon.svg").default} />
        </ListItemIcon>
        {openedSidebar && <ListItemText primary="Мои проекты" />}
      </ListItemButton>
    </List>
  );
}

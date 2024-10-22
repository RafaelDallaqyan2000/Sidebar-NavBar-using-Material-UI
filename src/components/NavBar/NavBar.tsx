import {
  Box,
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import "./navBarStyles.css";

type NavBarType = {
  openSidebar: boolean;
  setOpenSidebar: (value: boolean) => void;
};

const projectsList = ["Проект 1", "Проект 2", "Проект 3", "Проект 4"];

export default function NavBar({ openSidebar, setOpenSidebar }: NavBarType) {
  const [showProjects, setShowProjects] = useState<boolean>(false);
  const [showProfileSettings, setShowProfilteSettings] =
    useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<string>("Проект 1");
  const [timeUpdatedProject, setTimeUpdatedProject] = useState("");

  useEffect(() => {
    const day = new Date().getDay();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();

    setTimeUpdatedProject(
      `Обновлено ${day}.${month}.${year} в ${hour}:${minutes}`
    );
  }, [selectedProject]);

  const handleSelectProject = (project: string) => {
    setSelectedProject(project);
    setShowProjects(false);
  };

  return (
    <div
      className="navbar-container"
      style={{
        width: openSidebar ? `calc(100% - 300px)` : "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        {!openSidebar && (
          <Button onClick={() => setOpenSidebar(true)}>
            <img
              src={require("../../icons/burger-icon.svg").default}
              alt="burger"
            />
          </Button>
        )}
        <Box
          sx={{
            width: "130px",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ListItemButton
            onClick={() => setShowProjects(!showProjects)}
            sx={{ width: "200px !important" }}
          >
            <ListItemText primary={selectedProject} />
            <ListItemIcon sx={{ minWidth: "initial" }}>
              <img
                src={require("../../icons/vector-icon.svg").default}
                style={{ transform: `rotate(${showProjects ? 0 : 180}deg)` }}
              />
            </ListItemIcon>
          </ListItemButton>
          <Collapse
            in={showProjects}
            timeout="auto"
            className="projects-list-container"
            unmountOnExit
          >
            <List component="div" disablePadding>
              {projectsList.map((project) => (
                <ListItemButton
                  onClick={() => handleSelectProject(project)}
                  sx={{ p: "5px 16px", mt: "4px" }}
                  className="projects-list-item"
                >
                  <ListItemText primary={project} />
                  <img
                    src={require("../../icons/projects-list-icon.svg").default}
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </Box>
        <Button onClick={() => setShowProjects(!showProjects)}>
          <img src={require("../../icons/reload-icon.svg").default} />
        </Button>
        <Typography className="updated-date">{timeUpdatedProject}</Typography>
        <Button className="add-new-project-btn" variant="contained">
          <img src={require("../../icons/plus-icon.svg").default} alt="plus" />
          Новый проект
        </Button>
      </div>
      <div className="" style={{ position: "relative" }}>
        <Button
          onClick={() => setShowProfilteSettings(!showProfileSettings)}
          variant="contained"
          className="profile-btn"
        >
          <img
            src={require("../../icons/profile-icon.svg").default}
            alt="profile"
          />
        </Button>

        {showProfileSettings && (
          <List component="div" disablePadding className="profile-list">
            <ListItemButton className="profile-items">
              <ListItemIcon sx={{ minWidth: "initial" }}>
                <img src={require("../../icons/settings-icon.svg").default} />
              </ListItemIcon>
              <ListItemText
                className="profile-items"
                primary="Настройки аккаунта"
              />
            </ListItemButton>

            <ListItemButton className="profile-items">
              <ListItemIcon sx={{ minWidth: "initial" }}>
                <img src={require("../../icons/key-icon.svg").default} />
              </ListItemIcon>
              <ListItemText
                className="profile-items"
                primary="Управление доступами"
              />
            </ListItemButton>

            <div className="border-line" />

            <ListItemButton>
              <ListItemIcon sx={{ minWidth: "initial" }}>
                <img src={require("../../icons/log-out-icon.svg").default} />
              </ListItemIcon>
              <ListItemText
                className="profile-items log-out-btn"
                primary="Выйти из аккаунта"
              />
            </ListItemButton>
          </List>
        )}
      </div>
    </div>
  );
}

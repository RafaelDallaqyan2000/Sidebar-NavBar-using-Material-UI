import { Button, Typography } from "@mui/material";
import NestedList from "./NestedList/NestedList";
import "./sidebarStyles.css";

type SidebarType = {
  openSidebar: boolean;
  setOpenSidebar: (value: boolean) => void;
};

export default function Sidebar({ openSidebar, setOpenSidebar }: SidebarType) {
  return (
    <div className={`container ${!openSidebar && "hide-contaiener"}`}>
      <div
        className="header-container"
        style={{ justifyContent: !openSidebar ? "center" : "space-between" }}
      >
        <Typography className="title" variant="h4">
          {!openSidebar ? "S" : "SEO"}
        </Typography>
        {openSidebar && (
          <Button className="back-button" onClick={() => setOpenSidebar(false)}>
            <img src={require("../../icons/arrow_back-icon.svg").default} />
          </Button>
        )}
      </div>
      <NestedList openedSidebar={openSidebar} />
    </div>
  );
}

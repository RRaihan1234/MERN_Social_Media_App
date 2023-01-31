import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
export default function Topbar() {
  let { user,dispatch } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const history = useHistory();
  
  const handleLogout = () => {
    
    dispatch({type:"LOGOUT"})
    history.push("/login")

  }

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
         <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">Social App</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="topbarLink">Homepage</span>
          </Link>
          {/* <span className="topbarLink">Timeline</span> */}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noImage.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>
        <span className="logoutButton" onClick={handleLogout}>Logout</span>
      </div>
    </div>
  );
}


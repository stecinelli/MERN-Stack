import links from '../utils/links';
import { useDashboardContext } from '../pages/DashboardLayout';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        // admin user
        return (
          <NavLink
            to={path}
            key={text}
            onClick={isBigSidebar ? null : toggleSidebar}
            className="nav-link"
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;

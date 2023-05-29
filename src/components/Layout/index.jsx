import PropTypes from "prop-types";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return <div className="flex flex-col my-24 items-center">{children}</div>;
};

export default Layout;

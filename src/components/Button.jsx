import PropTypes from "prop-types";
export const Button = ({ children }) => {
  return (
    <button className="w-64 text-xl rounded px-5 py-2.5 mt-2 font-medium bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-r">
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.string.isRequired,
};

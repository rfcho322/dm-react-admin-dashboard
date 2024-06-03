import PropTypes from 'prop-types';

// TODO ADD THIS TO NAVBAR AND DO SOMETHING ABOUT ICONS WITH BADGES THAT USES RELATIVE LAYOUT PARENT
const NavbarItem = ({children}) => {
  return (
    <div className="flex items-center m-4 hover:bg-yellow-300 rounded-md p-2 transition-colors duration-200 cursor-pointer">
        {children}
    </div>
  )
}

NavbarItem.propTypes = {
    children: PropTypes.node,
}

export default NavbarItem
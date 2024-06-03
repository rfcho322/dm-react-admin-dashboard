import PropTypes from 'prop-types';

const ListItem = ({text, children}) => {
  return (
    <li className="flex items-center p-2 rounded-lg cursor-pointer text-foreground hover:bg-card hover:">
      {children}
      <span className="ml-3">{text}</span>
    </li>
  )
}

ListItem.propTypes = {
    children: PropTypes.node, // children can be any valid React node
    text: PropTypes.string.isRequired, // Ensure text is a string and is required
};

export default ListItem
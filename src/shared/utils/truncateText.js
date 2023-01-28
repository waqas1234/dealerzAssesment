const truncateText = (text, length) => {
  return text?.length > length ? text.substr(0, length - 1) + "..." : text;
};

export default truncateText;

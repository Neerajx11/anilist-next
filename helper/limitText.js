const limitText = (str = "Not Found", num = 30) =>
  str?.length > num ? `${str.slice(0, num)}...` : str;
export default limitText;

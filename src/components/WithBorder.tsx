const WithBorder = (WrappedComponent) => {
  return (props) => (
    <div className="border-2 border-blue-500 p-2 rounded-full shadow-md">
      <WrappedComponent {...props} />
    </div>
  );
};

export default WithBorder;

import "../Styles/loadLayout.css";

export const LoadLayout = () => {
  return (
    <div className="loader">
      <div className="loader__pulsar1"></div>
      <div className="loader__pulsar2"></div>
      <div className="loader__container">
        <img src="FrentByte.png" alt="imgload" className="container__img" />
      </div>
    </div>
  );
};

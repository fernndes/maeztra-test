import "./App.css";
import DepartmentBar from "./layout/components/DepartmentsBar/DepartmentBar";
import Header from "./layout/components/Header/Header";
import Footer from "./layout/content/Footer/Footer";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <div
        className="promotion-top"
        style={{
          background: "#353535",
          height: 24,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            fontWeight: 400,
            fontSize: 12,
            lineHeight: "18px",
            color: "#fff",
          }}
        >
          Acompanhe as melhores promoções disponíveis aqui na Maeztra.
        </p>
      </div>
      <Header />
      <DepartmentBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

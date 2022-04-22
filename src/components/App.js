import Header from "./Header";
import Footer from "./Footer";
import BeerControl from "./BeerControl";

const mainContent = {
  maxWidth: "50rem",
  margin: "0 auto",
  padding: "1rem",
  flexGrow: "1"
}

function App() {
  return (
    <>
      <Header />
      <main
        style={mainContent}
      >
        <BeerControl />
      </main>
      <Footer />
    </>
  );
}

export default App;

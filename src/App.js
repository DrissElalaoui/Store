import { AllProductSection } from "./script/AllProductSection";
import HomePage from "./script/HomePage";
import ProductList from "./script/ProductList";

function App() {
  return (
    <div style={{backgroundColor: '#EEE'}}>
        <HomePage />
        <ProductList />
        <AllProductSection />
    </div>
  );
}

export default App;

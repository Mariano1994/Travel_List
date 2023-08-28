import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { PackingList } from "./components/PackingList/PackingList";



export function App() {
  return (
    <>
      <div className="app">
        <Header />
        <Form />
        <PackingList />
        <Footer/>
      </div>
    </>
  );
}

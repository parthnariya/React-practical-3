import Footer from "../components/Footer/Footer.js";
import Header from "../components/Header/Header.js";
import TodoList from "../components/TodoList/TodoList";
import ContainerClass from "../styled/Container.styled.js";


export const Container = () => {
  return (
      <ContainerClass>
        <Header />
        <TodoList />
        <Footer />
      </ContainerClass>
  );
};

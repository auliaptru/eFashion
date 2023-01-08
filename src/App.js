import './App.css';
import Content from './container/Content/Content';
import Categories from './container/Categories/Categories';
import Featured from './container/Featured/Featured';
import Header from './container/Header/Header';
import InlineCategory from './components/InlineCategory/InlineCategory';
import Footer from './container/Footer/Footer';

function App() {
    return (
        <div className='App'>
            <Header />
            <Featured />
            <Categories />
            <Content />
            {/* <InlineCategory /> */}
            <Footer />
        </div>
    );
}

export default App;

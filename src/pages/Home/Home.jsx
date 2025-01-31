import CategoryComponent from "../../components/CategoryCompnent/CategoryComponent";
import { useSelector } from 'react-redux';

const Home = () => {
    const categories = useSelector(s => s.reducer.categories);
    return (
        <div>
            {
                categories.map(item=>{
                    return <CategoryComponent key={item} limit={4} category={item} />
                })
            }

        </div>
    );
}

export default Home;

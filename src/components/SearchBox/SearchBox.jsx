import {useDispatch, useSelector} from "react-redux";
import css from "./SearchBox.module.css";
import {changeFilter} from "../../redux/filters/operations";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filters.name);

    return (
        <div className={css["search-box"]}>
            <p className={css.text}>Find contacts by name or number</p>
            <input type="text" value={filter} onChange={e => dispatch(changeFilter(e.target.value))} />
        </div>
    );
};
export default SearchBox;

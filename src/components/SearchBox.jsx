import {useDispatch, useSelector} from "react-redux";
import css from "./SearchBox.module.css";
import {changeFilter} from "../redux/filters/operations";
import {IoSearch} from "react-icons/io5";
import {IoClose} from "react-icons/io5";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filters.name);

    return (
        <div className={css["search-box"]}>
            {/* <p className={css.text}>Find contacts by name or number</p> */}
            <IoSearch className={css.icon} />
            <IoClose className={css.clear} onClick={e => dispatch(changeFilter(""))} />
            <input type="text" value={filter} onChange={e => dispatch(changeFilter(e.target.value))} placeholder={`Search contact`} />
        </div>
    );
};
export default SearchBox;

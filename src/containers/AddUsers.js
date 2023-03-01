import { useDispatch } from "react-redux"
import { addNewUsers } from '../action/index';

const AddUsers = () => {
    
    const dispatch = useDispatch();
    const formHandler = (event) => {
        event.preventDefault();
        console.log(event.target.elements);
        let data = event.target.elements;
        dispatch(addNewUsers(data.name.value, data.passport.value, data.age.value))
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <input type="text" name='Petro' />
                </div>
                <div>
                    <input type="text" passport='JH124523'/>
                </div>
                <div>
                    <input type="text" age='23' />
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
)
}

export default AddUsers;
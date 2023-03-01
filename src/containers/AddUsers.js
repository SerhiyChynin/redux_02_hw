import { useDispatch } from "react-redux"
import { addNewUsers } from '../action/index';

const AddUsers = () => {
    
    const dispatch = useDispatch();
    const formHandler = (event) => {
        event.preventDefault();
        console.log(event.target.elements);
        let data = event.target.elements;
        dispatch(addNewUsers(data.passport.value, data.name.value, data.age.value))
    }

    return (
        <div>
            <form onSubmit={formHandler}>
                <div>
                    <input type="text" name='name' defaultValue='Jora' />
                </div>
                <div>
                    <input type="text" name='passport' defaultValue='GH12343'/>
                </div>
                <div>
                    <input type="text" name='age' defaultValue='44'/>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
)
}

export default AddUsers;
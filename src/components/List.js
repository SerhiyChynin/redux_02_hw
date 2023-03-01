function List(data) {
    console.log('===========')
    console.log(data);
    console.log('===========')

    return (
        <div>
            <ul>
                {data.user.map(item => <li key={item.name}>{ item.name} {item.passport} {item.age}</li>)}
            </ul>
            
        </div>
    )
}

export default List;
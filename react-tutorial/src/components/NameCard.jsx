export const NameCard = ({name, grade, major, email}) => {
    return (
        <div style={{backgroundColor: "lightgray", borderRadius: 10}}>
            <h3 style={{padding: "0.5em"}}>Name: {name}</h3>
            <h4 style={{padding: "0.5em"}}>Grade: {grade}</h4>
            <h4 style={{padding: "0.5em"}}>Major: {major}</h4>
            <h4 style={{padding: "0.5em"}}>Email: {email}</h4>
        </div>
    )
}
export const Userdata=({data})=>{
    return(
        <>
        <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.age}</td>
            <td>{data.date_of_birth}</td>
            <td>{data.state_of_residence}</td>
            <td>{data.address}</td>
            <td>{data.pin_code}</td>
        </tr>
        </>
    )
}
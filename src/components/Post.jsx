export function Post(properties){
    return (
        <div>
            <strong>{properties.author}</strong>
            <p>{properties.content}</p>
        </div>   
    )
}
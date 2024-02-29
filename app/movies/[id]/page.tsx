export default function Movie(
    { params: { id }, searchParams: { region } }
        : { params: { id: string }, searchParams: { region: string } }) {
    return (
        <div>
            movie {`${id} ${region}`}
        </div>
    )
}
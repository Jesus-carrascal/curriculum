import './Descriptions.scss';

function Descriptions({ descriptions }) {
    return (
        <div className="Descriptions">
            {descriptions.map((description, index) => {
                return (
                    <article className="Descriptions_iten" key={description.title + index}>
                        <h3>{description.title}</h3>
                        <span className="Description_year">{description.year}</span>
                        <p>{description.description}</p>
                    </article>
                )
            })}
        </div>
    )
}

export default Descriptions;
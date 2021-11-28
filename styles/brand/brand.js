import {brand} from './styles.module.scss'

function Brand ({title, tagline}) {
    return (
        <header className={brand}>
            <h1>{title || "Page Title"}</h1>
            <p>{tagline || "your page tagline"}</p>
        </header>
    )
}

export default Brand
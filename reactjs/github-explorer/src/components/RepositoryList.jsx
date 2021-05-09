import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
    const repository = {
        name: 'unform#',
        description: 'Forms in React',
        link: 'http://github.com/unform/unform'
    }
    return(
        <section className= "repository-list">
            <h1>Lista de Repositorios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem/>
                <RepositoryItem/>
                <RepositoryItem/>
            </ul>

        </section>
    )
}
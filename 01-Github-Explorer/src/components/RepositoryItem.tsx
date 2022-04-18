interface RepositoryItemprops {
    repository: {
        full_name: string,
        description: string,
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryItemprops) {
    return (
        <li>
            <strong>{props.repository.full_name ?? 'Default'}</strong>
            <p>{props.repository.description}</p>
            <a href={props.repository.html_url}>
                Access Repository
            </a>
        </li>
    );
}
import React from "react";

export interface Repository {
  name: string;
  description: string;
  html_url: string;
}

interface RepositoryItemProps {
  repository: Repository;
}

function RepositoryItem(props: RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a href={props.repository.html_url}>Acessar o repositório</a>
    </li>
  );
}

export default RepositoryItem;

const CreatedUsersList: React.FC<{ users: number[] }> = ({ users }) => {
  return <ul>{users.map(id => (<li>User created with id: {id}</li>))}</ul>
}

export default CreatedUsersList

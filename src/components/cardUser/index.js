const CardUser = ({ card }) => {
  return (
    <div className="infoUser">
      <h3>Seus dados:</h3>
      <p>Usuário: {card.user}</p>
      <p>Nome: {card.name}</p>
      <p>Email: {card.email}</p>
      <p>Contato: {card.cellphone}</p>
    </div>
  );
};
export default CardUser;

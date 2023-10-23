import React, { useContext } from "react";
import CloseIcon from "assets/images/close.png";
import PokemonInfo from "./PokemonInfo";
import PokemonContext from "context/pokemonContext";
import * as S from "./styled";

const Modal = ({ setIsModalOpen }) => {
  const { newPokemon, setStoredPokemon, storedPokemons } =
    useContext(PokemonContext);

  if (!newPokemon) return;

  const { avatar, id } = newPokemon;

  const onClose = () => {
    setIsModalOpen(false);
  };

  const handleCapturePokemon = () => {
    if (storedPokemons.length === 6) {
      alert("Limite excedido");
      return;
    }
    setStoredPokemon([...storedPokemons, newPokemon]);
    onClose();
  };

  const handleLiberarPokemon = () => {
    const newArr = storedPokemons.filter((pokemon) => pokemon.id !== id);
    setStoredPokemon(newArr);
    onClose();
  };

  return (
    <S.Overlay onClick={onClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.CloseWrapper onClick={onClose}>
          <S.Close src={CloseIcon} alt="close icon" />
        </S.CloseWrapper>

        <S.AvatarWrapper>
          <S.Avatar src={avatar} alt="avatar" />
        </S.AvatarWrapper>

        <S.ModalContent>
          <PokemonInfo
            handleCapturePokemon={handleCapturePokemon}
            handleLiberarPokemon={handleLiberarPokemon}
          />
        </S.ModalContent>
      </S.Modal>
    </S.Overlay>
  );
};

export default Modal;

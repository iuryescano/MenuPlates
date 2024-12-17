import React from "react";
import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";

export function PlateItem({ isNew, value, onClick, onChange, ...rest }) {
  return (
    <Container $isNew={isNew}>
      {/* Input do ingrediente */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        readOnly={!isNew} // Desabilita edição para tags já criadas
        {...rest}
      />

      {/* Botão de ação */}
      <button type="button" onClick={(e) => { 
          e.stopPropagation(); // Impede propagação do clique para o container
          onClick(); 
        }}
      >
        {isNew ? <FiPlus /> : <FiX />} {/* Ícone muda conforme `isNew` */}
      </button>
    </Container>
  );
}

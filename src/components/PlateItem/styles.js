import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, $isNew }) =>
    $isNew ? `1px dashed ${theme.COLORS.GRAY_500}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED};
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > input {
    height: 1.5rem;
    width: 6.5rem;

    padding: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`;

import styled from 'styled-components'

export const ListContainer = styled.div`
  margin-top: 24px;
  padding: 16px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .header {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }
`
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
`

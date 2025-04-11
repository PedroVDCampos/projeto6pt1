import styled from 'styled-components'

export const InfoContainer = styled.div`
  padding: 16px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .header {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .info-boxes {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 16px;
  }

  .info-box {
    background-color: #f5f5f5;
    padding: 16px;
    border-radius: 8px;
    text-align: center;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    .info-boxes {
      grid-template-columns: 1fr;
    }
  }
`

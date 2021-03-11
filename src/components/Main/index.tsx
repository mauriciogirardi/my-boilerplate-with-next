import * as S from './styles'

export default function Main() {
  return (
    <S.Wrapper>
      <S.Logo>
        <img
          src="/img/logo.png"
          alt="Imagem de um átomo e meu Boilerplate escrito ao lado"
        />
        <h1>Boilerplate</h1>
      </S.Logo>

      <S.Title>My Boilerplate</S.Title>

      <S.Description>
        TypeScript, ReactJS, NextJS, Styled Components
      </S.Description>

      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Ilustração de um homem sentado em uma cadeira"
      />
    </S.Wrapper>
  )
}

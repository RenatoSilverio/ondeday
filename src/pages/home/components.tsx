import styled from "styled-components";


export const Container =styled.div`

    h1{
        text-align:center;
        margin 4rem 0;

    }   

`;
export const MovieList = styled.ul`
    list-style:none;
    display:grid;
    grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));
    column-gap:3rem;
    row-gap:4rem;


`;
export const Movie= styled.li`
    display:flex;
    flex-direction:column;
    align-items:center;

    img{
        width:180px;
        border-radius:1rem;
        margin-bottom:2rem;
    }


    span{
        font-weight:bold;
        font-size:120%;
        text-align:center;

    }

    a{
        transition:0.3s;
    }

    a:hover{
        transform:scale(1.1);
    }

`
export const Busca= styled.form`
    display:flex;
    align-items: center;

    button{
        width: 4rem;
        height: 2rem;
        color: white;
        background-color: blue;
        border: darkblue;
        border-radius: 16px;
        margin-left: 15px;
    }
`
export const IPNT= styled.input`

    height: 2rem;
    width: 15rem;
    margin-left: 20px;


`
export const Divizinha =styled.div`
text-align:center;
        margin 4rem 0;
        `
;
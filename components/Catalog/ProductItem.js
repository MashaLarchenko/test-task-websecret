import styled from 'styled-components';

const ProductItemContainer = styled.div`
position: relative;
display: flex;
width: 100%;
height: 401px;
flex-direction: column;
background: #FFFFFF;
border: 1px solid #E6E6E6;
box-sizing: border-box;
border-radius: 4px;
overflow: hidden;
&:hover {
    cursor:pointer;
}
`

const ProductLabel = styled.div`
position: absolute;
width: 79px;
height: 1.5rem;
transform: translate(15px, 10px);
text-align: center;
font-style: normal;
font-weight: bold;
font-size: 0.714rem;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #FFFFFF;
background: #44C477;
border-radius: 26px;

@media all and (max-width: 600px) {
    width: 60px;
}

`

const BasketButton = styled.button`
align-self: start;
padding: 8px 15px;
border: 1px solid #DBDBDB;
box-sizing: border-box;
border-radius: 8px;
&:hover {
  border-color: rgb(118, 118, 118);
  transition: background-color 0.2s ease-out 0s, border-color 0.2s ease 0s;
  cursor:pointer;
}
`

const CardImage = styled.img`
width: 100%;
height: 242px;
background-image: url(https://imgproxy.by.dev.family/XoQ8QberZjOXPsFI7nyGJr6xsRfseJBWCeSh0rhUzHw/w:185/h:185/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.png);
background-position: center center;
background-repeat: no-repeat;
background-size: 100% 100%;
background-image: ${props => props.desktop ? `url(${props.desktop})` : `url(https://imgproxy.by.dev.family/XoQ8QberZjOXPsFI7nyGJr6xsRfseJBWCeSh0rhUzHw/w:185/h:185/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.png)`};

@media (max-width: 375px) {
    background-image: ${props => props.mobile ? `url(${props.mobile})` : `url(https://imgproxy.by.dev.family/XoQ8QberZjOXPsFI7nyGJr6xsRfseJBWCeSh0rhUzHw/w:185/h:185/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.png)`};
  }

&:hover {
    transform: scale(1.2);
  }
`

const ProductContent = styled.div`
padding: 12px 16px;
&>p{
    padding: 16px 0;
}
`

const LikeButton = styled.button`
`


const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;

`

function ProductItem({ product }) {
    const { title, price, is_new, image } = product;
    const defaultDesctopImg = 'https://imgproxy.by.dev.family/XoQ8QberZjOXPsFI7nyGJr6xsRfseJBWCeSh0rhUzHw/w:185/h:185/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.png';
    const defaultModileImg = 'https://imgproxy.by.dev.family/XoQ8QberZjOXPsFI7nyGJr6xsRfseJBWCeSh0rhUzHw/w:185/h:185/czM6Ly9nZXRsZW5zLzExL2NhdGVnb3J5X2ltYWdlLnBuZw.png';

    return (
        <>
            <ProductItemContainer>
                {image ? <CardImage mobile={image.mobile.webp_x1} desktop={image.desktop.webp_x1} /> : <CardImage mobile={defaultModileImg} desctop={defaultDesctopImg} />}
                <ProductContent>
                    <p className='title--medium'>{title}</p>
                    <p className='title--bold'>{price} ₽</p>
                    <ButtonContainer>
                        <BasketButton type='button' className='title--medium'>В корзину</BasketButton>
                        <LikeButton>
                            <svg width="20" height="17" viewBox="0 0 20 17" fill="#fff" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.335 9.106h0a4.792 4.792 0 116.828-6.708l.597.667.596-.667a4.792 4.792 0 116.828 6.708l-7.424 6.88-7.425-6.88z" strokeWidth="1.6"></path></svg>
                        </LikeButton>
                    </ButtonContainer>

                </ProductContent>
                {is_new ? <ProductLabel> Новинка</ProductLabel> : null}
            </ProductItemContainer>
        </>
    )

}

export default ProductItem;


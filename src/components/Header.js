import React,{useState} from 'react'
import styled from 'styled-components'



function Header() {
  const [navMenu, setNavMenu] = useState(false)
  return (
    <Section>
      <TeslaIcon>
        <img src='./images tesla/logo.svg'/>
      </TeslaIcon>
      <NavTop>
        <a href='#'>Model3</a>
        <a href='#'>Model S</a>
        <a href='#'>Model X</a>
        <a href='#'>Model Y</a>
      </NavTop>
      <MenuNav>
        <img src="https://img.icons8.com/material-outlined/30/000000/menu--v1.png" onClick={() =>{
          setNavMenu(true)
        }}/>
        <RightMenu show={navMenu}>
          <CloseIcon>
            <img src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
              onClick={()=>{setNavMenu(false)}}
            />
          </CloseIcon>
          <p><a href='#'>Model3</a></p>
          <p><a href='#'>Model S</a></p>
          <p><a href='#'>Model X</a></p>
          <p><a href='#'>Model Y</a></p>
          <p><a href='#'>Model3</a></p>
          <p> <a href='#'>Model S</a></p>
          <p><a href='#'>Model Y</a></p>
        </RightMenu>
      </MenuNav>
    </Section>
  )
}

export default Header
 
const Section = styled.div`
  height:60px;
  display:flex;
  position:fixed;
  align-items:center;
  padding-top:30px;
  justify-content:space-between;
  width:100%;
  z-index:100;
`
const TeslaIcon = styled.div`
  padding-left:30px;
`
const NavTop = styled.div`
  display:flex;
  align-items:center;
  a{
    padding:10px 15px;
    transition:all .5s;
    margin-right:10px;
  }
  a:hover{
    background-color:#393c41;
    border-radius:15px;
    color:#fff
  }
  @media(max-width:798px){
    display:none;
  }
`
const MenuNav = styled.div`
  padding-right:30px;
  img{
    cursor:pointer;
  }
`
const RightMenu = styled.div`
  width:300px;
  transform:${props => props.show ? 'translateX(0)':'translateX(100%)'};
  position:fixed;
  background-color:#fff;
  color:#000;
  right:0;
  bottom:0;
  top:0;
  transition:all .5s;
  p{
    margin:40px 40px;
    padding:10px;
    border-bottom:1px solid gray;

  }
`
const CloseIcon = styled.div`
  padding-top:30px;
  padding-right:30px;
  text-align:right;

`
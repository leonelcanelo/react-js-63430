import CartWidgetCss from "./cartWidgetCss"

const NavBarcss = ()=> {
    return(
        <nav className="nav-container">
            <a href="">
                <img className="logo-nav" src='../img/Pelota de paddle.jpeg' alt='Padel shop' />
            </a>
              <a className="nav-links" href="">Nuevo <img className="logoimg" src="../img/Pelota de paddle.jpeg" alt="" /></a>
              <a className="nav-links" href="">Ofertas <img className="logoimg" src="../img/Pelota de paddle.jpeg" alt="" /></a>
              <a className="nav-links" href="">Mas vendidos <img className="logoimg" src="../img/Pelota de paddle.jpeg" alt="" /></a>
            <CartWidgetCss/>
        </nav>
    )
}

export default NavBarcss
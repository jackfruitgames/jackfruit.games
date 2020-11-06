import {
    Navbar,
    NavbarBrand
  } from 'reactstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar className="App-Navbar" dark expand="md">
                <NavbarBrand href="/">Jackfruit Games</NavbarBrand>
            </Navbar>
        </div>
    );
}

export default Navigation;
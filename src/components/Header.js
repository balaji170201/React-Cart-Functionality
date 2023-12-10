import {Container,Dropdown,FormControl,Navbar,Nav,Badge,Button} from 'react-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
import { AiFillDelete } from 'react-icons/ai'

const Header = ({searchTerm,setSearchTerm}) => {
    const {
        state:{cart},
        dispatch
    } = CartState();

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

  return (
    <>
    <Navbar bg='dark' variant='dark' style={{height:'80px'}}>
        <Container>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                <Navbar.Brand> Shopping Cart </Navbar.Brand>
            </Link>
            <Navbar.Text className='search'>
                <FormControl 
                    style={{width:'500px'}}
                    placeholder='Search a product'
                    className='m-auto'
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </Navbar.Text>
            <Nav>
                <Dropdown style={{marginRight:'100px'}}>
                    <Dropdown.Toggle>
                        <FaShoppingCart color='white' fontSize='25px' />
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth:'270px'}}>
                        {
                            cart.length > 0 ? (
                                <>
                                    {
                                        cart.map((product) => (
                                            <span className='cartItem' key={product.id}>
                                                <img 
                                                    src={product.images}
                                                    alt={product.title}
                                                    className='cartItemImage'
                                                />
                                                <div className='cartItemDetail'>
                                                    <span>{product.title}</span>
                                                    <span>₹ {product.price}</span>
                                                </div>
                                                <AiFillDelete 
                                                    fontSize='20px'
                                                    style={{cursor:'pointer'}}
                                                    color='#EF4040'
                                                    onClick={() => {
                                                        dispatch({
                                                            type:'REMOVE_FROM_CART',
                                                            payload:product
                                                        })
                                                    }}
                                                />
                                            </span>
                                        ))
                                    }
                                    <Link to='/cart'>
                                        <div style={{display:'flex',justifyContent:'center'}}>
                                            <Button style={{width:'75%',padding:'5x 20px'}}>Go To Cart</Button>
                                        </div>
                                    </Link>
                                </>
                            ) : (<span style={{padding:'10px'}}>Cart is Empty</span>)
                        }
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
    </>
  )
}

export default Header
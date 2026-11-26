import React from "react";
import useCart from "../../hooks/useCart.js";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import Item from "@mui/material/Grid";
import  RemoveOutlinedIcon  from '@mui/icons-material/RemoveOutlined';
import  AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import useClearCart from "../../hooks/useClearCart.js";
export default function Cart() {

  const { data, isLoading, isError, error } = useCart();
  const{ClearCartMutaion} =useClearCart();
  const clearCart=()=>{
     ClearCartMutaion.mutate();
  }
  return (
    <Box
      sx={{ pt: "24px", pl: "32px", pr: "32px", pb: "72px" }}
      bgcolor="#FFF8F1"
    >
      {/* Links */}
      <Box>
        <Link component={RouterLink} variant="h6" to={"/"} color="#8B5E3C">
          Home
        </Link>
        <Typography component="span" variant="h6" mx={1}>
          /
        </Typography>

        <Typography
          component="span"
          variant="h6"
          sx={{
            color: "#8B5E3C",
            fontWeight: "bold",
          }}
        >
          Cart
        </Typography>
      </Box>

      <Box sx={{ pt: "16px", pb: "24px" }}>
        {/* Box 1 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Typography component={"h1"} variant="h4" sx={{ fontWeight: "bold" ,color:'#8B5E3C'}}>
            Your Shopping Cart
          </Typography>
          <Box
            bgcolor={"#ECFDF5"}
            sx={{
              display: "flex",
              alignItems: "center",
              padding: "3px 16px",
              borderRadius: "50px",
              gap: "5px",
             border:1,borderColor:'#A7F3D0'
            }}
          >
            <FiberManualRecordIcon color='success' fontSize="inherit" />
            <Typography color="#51443C">
              {data?.cartProducts.length} Products ({" "}
              {data?.cartProducts.reduce(
                (total, p) => total + p.productCount,
                0,
              )}{" "}
              items )
            </Typography>
          </Box>
        </Box>
        {/* Box 2 */}
        <Box sx={{ display: "flex", justifyContent: "space-between",alignItems:'center'}}>
          <Typography color="#51443C">
            Your little one's favorites, lovingly gathered in one safe space.
          </Typography>
          <Button
          onClick={clearCart}
          loading={ClearCartMutaion.isPending}
          disabled={ClearCartMutaion.isPending}
            sx={{
              display: "flex",
              backgroundColor: "#FFDAD6",
              padding: "6px 20px",
              borderRadius: "50px",
              gap: "7px",
              color: "#BA1A1A",
            }}
          >
            <DeleteSweepOutlinedIcon fontSize="medium" />
            <Typography sx={{ fontWeight: "bold", fontSize: "16px" }}>
              Clear Cart
            </Typography>
          </Button>
        </Box>
        {/* Box 3 */}
        <Grid container spacing={2} sx={{ mt: "17px" }}>
          <Grid size={9}>
            <Item >
              {data?.cartProducts.map((cartItem)=>
              <Card key={cartItem.productId}
                sx={{
                  boxShadow: "0px 1px 6px -1px rgba(0, 0, 0, 0.1)",
                  p: "20px 20px 20px 20px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                  mb:2
                }}
              >
                <Box sx={{ display: "flex" ,gap:4}}>
                  {/* img */}
                  <CardMedia
                    component="img"
                    sx={{ height: "150px",width:'150px'}}
                    image={cartItem.mainImage}
                    title={cartItem.productName}
                  />
                  {/* Product Info */}
                  <Box sx={{display:'flex', flexDirection:'column' ,gap:'4px',justifyContent:'space-between'}}>
                    <Typography color="#83746B" sx={{fontSize:'16px'}}>{cartItem.categoryName}</Typography>
                    <Typography variant="h5" sx={{fontWeight:'bold' ,color:'#8B5E3C'}}>{cartItem.productName}</Typography>
                    <Typography color="#8b5e3cbd" sx={{fontSize:'20px' ,fontWeight:'bold'}} >$ {cartItem.price} </Typography>
                       {/* Quantity */}
                   <Box sx={{display:'flex',alignItems:'center',mt:1 ,gap:3 }}>
                      <IconButton sx={{border:1 ,borderColor:'#E86328'}} aria-label="remove" >
                        <RemoveOutlinedIcon fontSize="small" sx={{color:'#E86328'}}/>
                      </IconButton>
                      <Typography sx={{fontWeight:'bold',fontSize:'17px', color:'#8B5E3C'}}>{cartItem.productCount}</Typography>
                       <IconButton    sx={{border:1,borderColor:'#E86328'}} aria-label="add">
                        <AddOutlinedIcon fontSize="small" sx={{color:'#E86328'}}/>
                      </IconButton> 
                        <Button endIcon={<UpdateOutlinedIcon/>}  sx={{backgroundColor:'#E47221',color:'white',borderRadius:50,paddingX:'20px'}}   >Update </Button>
                   </Box>

                  </Box>
                </Box>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:'end'}}>
                   <IconButton disableRipple sx={{backgroundColor:'#FFDAD6',width:'fit-content'}} >
                        <DeleteOutlineOutlinedIcon color="error"/>
                    </IconButton>
                   <Typography color="#8B5E3C" sx={{fontSize:'20px' ,fontWeight:'bold'}} > $ {cartItem.totalPrice}</Typography>

                </Box>
              </Card>
              )}
            </Item>
          </Grid>
          <Grid size={3}>
            <Item>
               <Card  
                sx={{
                  boxShadow: "0px 1px 6px -1px rgba(0, 0, 0, 0.1)",
                  p: "20px 20px 20px 20px",
                  borderRadius: "10px", 
                  mb:2,
                  textAlign:'center'
                }}
              >
                 <Box sx={{display:'flex',justifyContent:'space-between' ,alignItems:'center',mb:'5px'}}>
                   <Typography variant="h5" sx={{color:'#8B5E3C',fontWeight:'bold'}}>Cart totals</Typography>
                   <LocalMallOutlinedIcon sx={{ color:"#E47221"}}/>
                 </Box>
                 <Divider/>
                  <Box sx={{display:'flex',justifyContent:'space-between' ,alignItems:'center',mt:'24px'}}>
                   <Typography sx={{color:'#51443C'}}>Total items</Typography>
                   <Typography sx={{color:'#51443C'}}> {data?.cartProducts.reduce(
                (total, p) => total + p.productCount,
                0,
              )}{" "}</Typography>
                 </Box>
                   <Box sx={{display:'flex',justifyContent:'space-between' ,alignItems:'center',mt:'14px'}}>
                   <Typography sx={{color:'#51443C'}}>Shipping</Typography>
                   <Typography sx={{color:'#005d11'}}> Standard Free Delivery</Typography>
                 </Box>
                 <Box sx={{display:'flex',justifyContent:'space-between' ,alignItems:'center',mt:'24px',backgroundColor:'#FFF1EB',padding:'16px',  borderRadius: "10px"}}>
                   <Typography variant="h6" sx={{color:'#8B5E3C',fontWeight:'bold'}}>Total Amount</Typography>
                   <Typography  variant="h6" sx={{color:'#E47221' ,fontWeight:'bold'}}>$ {data?.cartTotal}</Typography>
                 </Box>
               <Button endIcon={<ArrowForwardOutlinedIcon/>} fullWidth  sx={{backgroundColor:'#E47221',color:'white',borderRadius:50,paddingX:'20px',paddingY:'11px',mt:'24px'}}>Proceed to Checkout </Button>

               <Button component={RouterLink} to={'/products'} startIcon={<ArrowBackOutlinedIcon/>}  disableRipple  sx={{color:'#6F4627',paddingX:'20px',paddingY:'11px',mt:'10px', 
               "&:hover": {
      backgroundColor: 'white',
    },}}>Continue Shopping </Button>

              </Card>

            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

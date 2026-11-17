import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../../hooks/useProductDetails.js";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Link,
  Rating,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Item from "@mui/material/Grid";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
export default function ProductDetails() {
  const { productId } = useParams();
  const { data, isLoading, isError, error } = useProductDetails({
    id: productId,
  });
  const [selectedImg, setSelectedImg] = useState(data?.product.mainImage);
 
  useEffect(() => {
    if (data?.product?.mainImage) {
      setSelectedImg(data.product.mainImage);
    }
  }, [data?.product?.mainImage]);
  return (
    <Box
      sx={{ pt: "24px", pl: "32px", pr: "32px", pb: "72px" }}
      bgcolor="#FFF8F1"
    >
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
          }}
        >
          Products
        </Typography>

        <Typography component="span" variant="h6" mx={1}>
          /
        </Typography>
        <Typography
          component="span"
          variant="h6"
          sx={{
            color: "#8B5E3C",
          }}
        >
          {data?.product.categoryName}
        </Typography>
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
          {data?.product.name}
        </Typography>
      </Box>
      <Card
        sx={{
          mt: "15px",
          mb: "32px",
          boxShadow: "0px 1px 6px -1px rgba(0, 0, 0, 0.1)",
          p: "40px 40px 40px 40px",
          borderRadius: "10px",
        }}
      >
        <Grid container spacing={2}>
          <Grid size={6}>
            <Item>
              {/* main Img */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Card
                  sx={{
                    mb: 2,
                    boxShadow: "none",
                    backgroundColor: "inherit",
                    position: "relative",
                    // border: 1,
                    // borderRadius: 4,
                    borderColor: "#E47221",
                    height: 500,
                    width: "90%",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: "100%", objectFit: "contain" }}
                    image={selectedImg}
                    title={data?.product.name}
                  />
                </Card>
              </Box>

              {/* sub Imgs */}
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                {data?.product.subImages.map((subImage, index) => (
                  <Card
                    key={index}
                    sx={{
                      boxShadow: "none",
                      backgroundColor: "inherit",
                      position: "relative",
                      border: 1,
                      borderRadius: 4,
                      borderColor: "#e472218a",
                      mr: 2,
                    }}
                  >
                    <Button
                      disableRipple
                      sx={{
                        padding: 0,
                      }}
                      onClick={() => {
                        setSelectedImg(subImage);
                      }}
                    >
                      <CardMedia
                        component="img"
                        sx={{ height: 100, width: 100, objectFit: "contain" }}
                        image={subImage}
                      />
                    </Button>
                  </Card>
                ))}
              </Box>
            </Item>
          </Grid>
          <Grid size={6} >
            <Item sx={{display:'flex',flexDirection:'column',gap:'8px'}}>
             <Typography bgcolor={'#F7EDE1'} color='#92400E'sx={{width:'fit-content',p:'4px 18px 4px 18px',borderRadius:'50px' }}>{data?.product.categoryName}</Typography>
             <Typography component={'h1'} variant='h4'  sx={{fontWeight:'bold' }}>{data?.product.name}</Typography>
             <Box sx={{display:'flex',alignItems:'center',gap:'12px',paddingBottom:'8px'}}>
             <Rating  name="read-only" value={data?.product.rate ?? 0} readOnly  precision={0.1} />      
             <Typography color='#44403C' sx={{fontSize:'16px'}}>{data?.product.rate}</Typography>
             <Typography sx={{fontSize:'20px'}}>|</Typography>
             <Typography color='#E86328' sx={{fontSize:'16px'}}>{data?.product.reviews.length} gentle parent reviews</Typography>
             </Box> 
              <Divider/>
              <Box sx={{display:'flex', gap:'12px',alignItems:'center' ,paddingBottom:'5px',paddingTop:'5px'}}>
                <Typography component={'p'} variant='h4'  sx={{fontWeight:'bold' }}>$ {data?.product.price}</Typography>
               
               {/* status=Active | quantity= >0 ====> In Stock • Ready to dispatch (green)*/}
              {/* status=Active | quantity=0 =====> Out of Stock • Currently unavailable (red)*/}
               {/* status=InActive | quantity= X ========> Currently unavailable (red)*/}

               {data?.product.status=="Active" && data?.product.quantity>0?
                 <Typography bgcolor={'#ECFDF5'} color='#047857'sx={{fontSize:'16px',p:'5px 10px 5px 10px',borderRadius:'50px',border:1,borderColor:'#A7F3D0',display:'flex',alignItems:'center',gap:'5px' }}><FiberManualRecordIcon color="success" fontSize='inherit'/>
                 In Stock • Ready to dispatch
                 </Typography>
               :data?.product.status=="Active" && data?.product.quantity==0?
                <Typography bgcolor={'#fdecec'} color='#780404'sx={{fontSize:'16px',p:'5px 10px 5px 10px',borderRadius:'50px',border:1,borderColor:'#f3a7a7',display:'flex',alignItems:'center',gap:'5px' }}><FiberManualRecordIcon color='error' fontSize='inherit'/>
                Out of Stock • Currently unavailable
                </Typography> 
               :data?.product.status=="InActive"?
                <Typography bgcolor={'#fdecec'} color='#780404'sx={{fontSize:'16px',p:'5px 10px 5px 10px',borderRadius:'50px',border:1,borderColor:'#f3a7a7',display:'flex',alignItems:'center',gap:'5px' }}><FiberManualRecordIcon color='error' fontSize='inherit'/>
                 Currently unavailable
                </Typography>:''
               }
                
              </Box>
             <Divider/>
             <Typography sx={{color:'#57534E'}}>
              {data?.product.description}
             </Typography>
             <Box sx={{display:'flex',mt:'26px',gap:2}}>
                   {/* Quantity */}
                   <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between' , borderRadius:'50px',padding:'0px 20px'}}>
                      <IconButton disableRipple sx={{border:1 ,borderColor:'#E86328'}} aria-label="remove" >
                        <RemoveOutlinedIcon sx={{color:'#E86328'}}/>
                      </IconButton>
                      <Typography sx={{paddingX:'30px',paddingY:'8px',fontWeight:'bold',fontSize:'20px'}}>1</Typography>
                       <IconButton disableRipple sx={{border:1,borderColor:'#E86328'}} aria-label="add">
                        <AddOutlinedIcon sx={{color:'#E86328'}}/>
                      </IconButton>
                   </Box>
                   {/* Add to cart Button  */}
                 <Button  variant="contained"  fullWidth endIcon={<LocalMallOutlinedIcon/>} sx={{fontSize:{xs:'14px',sm:'16px'}, backgroundColor:"#E47221", borderRadius:50,boxShadow:0}}>Add To Cart</Button>
             </Box>

            </Item>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

import React,{useState} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "./Spin.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Spin() {
  const[spin,setspin] = useState(8);
  const [bal,setbal] = useState(0);
  const [num, setNum] = useState(0);
  const [open, setOpen] = useState(false);


  const handleOpen = () => {
    setOpen(true);
    setNum(randomNumberInRange(30, 80));
    setbal(bal+num);
    setspin(spin-1);
  }
 
  const handleClose = () => setOpen(false);

  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  return (
      <>
    <div style={{padding:"20px"}}>
      <h1>Spin</h1>
      <p style={{marginTop:"20px",fontSize:"19px",color:"grey"}}> The amount you earn and the number of spins depends on your rank</p>
    </div>
    <Grid container style={{padding:"20px"}}>
        <Grid lg={4} md={6} xs={12}>

        <Card variant="outlined">
     <CardContent>
         <div style={{display:"flex"}}>
         <p>Your Rank is:</p>
         <span className="text" style={{marginLeft:"10px",}}> Diamond</span>
         </div>

         <div style={{display:"flex"}}>
         <p style={{color:"grey"}}>Balance:</p>
         <span className="text" style={{marginLeft:"10px"}}> R{bal}</span>
         </div>

         <div style={{marginTop:"20px",display:"flex",alignItems:"center"}} >
         <WorkspacePremiumIcon />
         <p>Each spin earning range from <b>R30 to R80</b> </p>
         </div>
         <div style={{display:"flex",alignItems:"center"}}>
         <WorkspacePremiumIcon />
             <p>{spin} remaining spin </p>
         </div>
         <div style={{display:"flex",alignItems:"center"}} >
         <WorkspacePremiumIcon />
             <p>8x spin daily </p>
         </div>
         
     
     
     
     
     
   </CardContent>
   <CardActions>
     <button className="btn" onClick={handleOpen} >Spin</button>
   </CardActions>
   </Card>

        </Grid>


    </Grid>

    <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
 
  <div style={{textAlign:"center",alignItems:"center",justifyContent:"center"}}>
      <CheckCircleOutlineIcon  style={{fontSize:"80px",color:"green"}}/>

   <p style={{fontSize:"25px"}}>'Sucessfully you spinned you have earned R{num}' </p>  
   </div>

   
  </Box>
</Modal>
    
   </>
  )
}

export default Spin

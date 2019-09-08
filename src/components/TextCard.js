import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import headerImage from '../assets/1.jpg'

const styles = {
  card: {
    maxWidth: 1545,
    marginBottom: 50,
  },
  media: {
    height: 140,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={headerImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Cadrul 1
          </Typography>
          <Typography paragraph>
          La ridicarea cortinei, niște etuve situate la nivelul podelei, acoperă cu aburi partea de sub platformă. Roba, cu fata spre spectatori, se deschide  parabolic si acoperă fundalul scenei superioare.  
          </Typography>
          <Typography paragraph> 
          - Se-apropie scadenta, Dedal, și se tot înmulțesc cazurile nesoluționate, suna electronic vocea Judecătorului.  
          </Typography>
          <Typography paragraph> 
          Câinele își ridica botul, mârâind: Eu ti-am spus să reprogramezi sufletele, nu să le transferi cu tot cu ambalaj in rețelele tale. Caritatea...  
          </Typography>
          <Typography paragraph> 
          JUDECATORUL, întrerupându-l: Nu mai suportam mirosul  SOS-ului Tartar de când s-a blocat traficul pe bifurcația dinspre bucătărie.  
          </Typography>
          <Typography paragraph> 
          Un fir roșu străbate țesătura parabolei. 
          </Typography>
          <Typography paragraph> 
          JUDECATORUL, cu obidă: Mama, cu mesajele ei sâcâitoare... 
           </Typography>
           <Typography paragraph> 
           Instantaneu apar: imaginea unor valuri care, întinzând-se pe nisip, scot strigate de bucurie, si doua cabinete din lemn poleit. 
            Dedal, metamorfozat in om, cu „Black hat” si labrys in mană, se pregătește să înceapă demolarea.  
           </Typography>
           <Typography paragraph> 
           JUDECATORUL, apostrofându-l malițios: Altă pălărie, Dedal! 
           </Typography>
           <Typography paragraph> 
           DEDAL, cu „White hat”, îndepărtând stratul de poleială: Fakes! Lemn tăiat cu drujba din pădurile carpatine, cioplit cu baltagul si ..., ranchiunos: Iar o să pierdem timpul cu N...  
           </Typography>
           <Typography paragraph> 
           Cuvântul activează iconița cu hieroglifa corespunzătoare literei (suprafața creata a unei ape), in timp ce din sală se ridică un bărbat care nu ieșise prin nimic in evidenta. Rumoare: scaune care se ridica si coboară, voci:"acum si-a găsit...", "cine este/ se crede...". 
           </Typography>
           <Typography paragraph> 
           JUDECATORUL, întrerupându-l: Nu pierdem timp cântărind umbrele faptelor, vorbelor si ale gândurilor. 
           </Typography>
           <Typography paragraph> 
           Bărbatul se îndrepta spre scenă, in timp ce sub prima platforma apare o alta, tot transparentă pe care se proiectează holul de intrare al unei clădiri. Peretele tapetat cu aviziere, coli si biletele lipite, cu anunțuri: „meditez...”, „ofer chirie, preț convenabil...” „cursul de...se tine in sala nr...”. Uși de intrare in săli, numerotate pană la ultima din stânga, deschisă, de la care coboară o trapă spre partea dinspre podeaua scenei care rămâne învăluita in aburi. 
           Bărbatul urcă in scena prin dreapta, se oprește in mijlocul holului cu fata spre spectatori.  
           Dedal începe demontarea. De sus se aud bătăi consecutive de topor căzut pe lemn: tic-tac 
           </Typography>
           <Typography paragraph> 
           !!! De la apariția pe scenă, N rămâne mereu acolo, fie ca prezentă fizică, voce sau hologramă.  
           </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Editeaza
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
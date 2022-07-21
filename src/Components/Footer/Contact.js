import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';

//Data
import Contacts from 'Data/Footer/Contacts.data';

//Styles
import styles from 'Styles/Footer/Contact.styles';

const Contact = () => {
    return (
        <Box sx={styles.Container}>
            <Grid container spacing={2}>
                <Grid item md={3} sm={6} xxs={6.5}>
                    <Box sx={styles.Content}>
                        <Box component='img' src={Contacts.Addess.image} alt={Contacts.Addess.title} />
                        <Typography variant='h6' component='h6'>
                            {Contacts.Addess.title}
                        </Typography>
                        <Typography variant='body1' component='figure'>
                            {Contacts.Addess.address}
                        </Typography>
                        <Typography variant='body1' component='figure'>
                            {Contacts.Addess.Country}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={3} sm={6} xxs={5.5}>
                    <Box sx={styles.Content}>
                        <Box component='img' src={Contacts.Phone.image} alt={Contacts.Phone.title} />
                        <Typography variant='h6' component='h6'>
                            {Contacts.Phone.title}
                        </Typography>
                        <Typography variant='body1' component='figure'>
                            <Link href={`tel:+88${Contacts.Phone.phone1.replace('-', '')}`}>
                                <a>
                                    {Contacts.Phone.phone1}
                                </a>
                            </Link>
                        </Typography>
                        <Typography variant='body1' component='figure'>
                            <Link href={`tel:+88${Contacts.Phone.phone2.replace('-', '')}`}>
                                <a>
                                    {Contacts.Phone.phone2}
                                </a>
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={3} sm={6} xxs={6.5}>
                    <Box sx={styles.Content}>
                        <Box component='img' src={Contacts.Email.image} alt={Contacts.Email.title} />
                        <Typography variant='h6' component='h6'>
                            {Contacts.Email.title}
                        </Typography>
                        <Typography variant='body1' component='figure'>
                            <Link href={`mailto:${Contacts.Email.email1}`}>
                                <a>
                                    {Contacts.Email.email1}
                                </a>
                            </Link>
                        </Typography>
                        <Typography variant='body1' component='figure'>
                            <Link href={`mailto:${Contacts.Email.email2}`}>
                                <a>
                                    {Contacts.Email.email2}
                                </a>
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item md={3} sm={6} xxs={5.5}>
                    <Box sx={styles.Content}>
                        <Box component='img' src={Contacts.Chat.image} alt={Contacts.Chat.title} />
                        <Typography variant='h6' component='h6'>
                            {Contacts.Chat.title}
                        </Typography>
                        <Typography variant='body1' component='figure'>
                            <Link href={Contacts.Chat.chat1Url}>
                                <a>
                                    {Contacts.Chat.chat1}
                                </a>
                            </Link>
                        </Typography>
                        <Typography variant='body1' component='figure'>
                            <Link href={Contacts.Chat.chat2Url}>
                                <a>
                                    {Contacts.Chat.chat2}
                                </a>
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default Contact;
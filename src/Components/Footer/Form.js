import { useState } from 'react';
import { Box, Stack, TextField, Grid, Typography, ButtonBase, CircularProgress, Snackbar, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

//Styles
import styles from 'Styles/Footer/Form.styles';

const Form = () => {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success');
    const [open, setOpen] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const onSubmit = (data, e) => {
        setLoading(true);
        emailjs.sendForm('service_747catm', 'template_6217l1e', e.target, 'user_16XW0lLOb2THIxAtbUd0Z')
            .then((result) => {
                setLoading(false);
                setSeverity('success');
                setMessage('Email received! I will contact you soon.');
                setOpen(true);
                reset();
            }, (error) => {
                setLoading(false);
                setSeverity('error');
                setMessage('Something went wrong. Try again!');
                setOpen(true);
            });
    }
    return (
        <Box component='form' onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='h6' component='h6' sx={styles.FormHeading}>
                Say Something
            </Typography>
            <Grid container spacing={2}>
                <Grid item xxs={6}>
                    <Box>
                        <Input
                            label='Name'
                            size='small'
                            fullWidth
                            error={errors.name ? true : false}
                            helperText={errors.name && errors.name.type === 'required' && (
                                <Typography variant='body1' component='p' sx={styles.ErrorMessage}>
                                    <Icon icon='fluent:error-circle-12-filled' />
                                    Please Enter Your Name!
                                </Typography>
                            )}
                            {...register('name', { required: true })}
                        />
                    </Box>
                </Grid>
                <Grid item xxs={6}>
                    <Box>
                        <Input
                            label='Email'
                            size='small'
                            fullWidth
                            error={errors.email ? true : false}
                            helperText={errors.email && (
                                <Typography variant='body1' component='p' sx={styles.ErrorMessage}>
                                    <Icon icon='fluent:error-circle-12-filled' />{errors.email.message}
                                </Typography>
                            )}
                            {...register(
                                'email',
                                {
                                    required: 'Please enter an email addreess!',
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: 'The email you enter is invalid email!',
                                    },
                                },
                                { required: true }
                            )}
                        />
                    </Box>
                </Grid>
                <Grid item xxs={12}>
                    <Box>
                        <Input
                            label='Subject'
                            size='small'
                            fullWidth
                            error={errors.subject ? true : false}
                            helperText={errors.subject && (
                                <Typography variant='body1' component='p' sx={styles.ErrorMessage}>
                                    <Icon icon='fluent:error-circle-12-filled' />
                                    {errors.subject.message}
                                </Typography>
                            )}
                            {...register(
                                'subject',
                                {
                                    required: 'Please enter your subject!',
                                    minLength: {
                                        value: 5,
                                        message: 'Subject should not be less than 5 characters!',
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: 'Subject should not be more than 50 characters!'
                                    }
                                },
                                { required: true }
                            )}
                        />
                    </Box>
                </Grid>
                <Grid item xxs={12}>
                    <Box>
                        <Input
                            label='Message'
                            size='small'
                            fullWidth
                            multiline
                            minRows={5}
                            maxRows={5}
                            error={errors.subject ? true : false}
                            helperText={errors.message && (
                                <Typography variant='body1' component='p' sx={styles.ErrorMessage}>
                                    <Icon icon='fluent:error-circle-12-filled' />
                                    {errors.message.message}
                                </Typography>
                            )}
                            {...register(
                                'message',
                                {
                                    required: 'Please add your message!',
                                    minLength: {
                                        value: 25,
                                        message: 'Message should not be less than 25 characters!',
                                    },
                                    maxLength: {
                                        value: 1000,
                                        message: 'Message should not be more than 1000 characters!'
                                    }
                                },
                                { required: true }
                            )}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Stack direction='row' sx={{ alignItems: 'center', mt: '25px' }}>
                <Box>
                    <ButtonBase type='submit' sx={styles.SubmitButton} className={loading ? 'disable' : ''}>
                        Send Message
                        <Icon icon='akar-icons:send' />
                    </ButtonBase>
                </Box>
                <Box sx={{ ml: '10px', display: 'flex' }}>
                    {loading &&
                        < CircularProgress size={25} />
                    }
                </Box>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                >
                    <Alert onClose={handleClose} sx={{ width: '100%' }} severity={severity} variant='filled'>
                        {message}
                    </Alert>
                </Snackbar>
            </Stack>
        </Box>
    );
};
export default Form;

//Custom component with styling
const Input = styled(TextField)(({ theme }) => ({
    '& label, & label.Mui-focused': {
        color: theme.palette.text.primary,
    },
    '& label.Mui-error': {
        color: '#d32f2f',
    },
    '& .MuiFormHelperText-root': {
        marginLeft: '0px'
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.primary.form_border,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.primary.form_border,
        },
        '&.Mui-focused fieldset': {
            borderColor: theme.palette.primary.main,
        },
        '&.Mui-error fieldset': {
            borderColor: '#d32f2f',
        }
    },
}))
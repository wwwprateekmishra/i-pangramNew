import * as React from 'react';
import Button from '@mui/material/Button';
import { Card, Grid, FormControlLabel, FormControl, FormLabel, RadioGroup, Radio, Box } from '@mui/material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import useStore from '../../hooks/useStore';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate ,Link} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

function CreatePage() {

    const { addUser } = useStore();
    const [userInfo, setuserInfo] = React.useState({
        problem: '',
        diagnosed : '',
        physical : '',
        mental : '',
        howExperience : '',
        zeroToTenScale : '',
        otherInfo : ''
    });
    
    const defaultCheckInfo = {
        notRelvent: false,
        whenLyingDown: false,
        whenSitting: false,
        underStanding: false,
        inWalking: false,
        Other: false
    }
    
    const [checkedInfo, setCheckedInfo] = React.useState(defaultCheckInfo);
    const handleCheckBox = (event) => {
        let temp = { ...checkedInfo };
        temp[event.target.name] = event.target.checked;
        console.log(event.target.checked);
        setCheckedInfo(temp);
    };

    const handleChange = ({ target: { name, value } }) => {
        let temp = { ...userInfo }
        temp[name] = value;
        setuserInfo(temp)
    }
    const navigate = useNavigate();
    const handleFormSubmit = async (event) => {
        console.log(userInfo,checkedInfo, 'pages');
        const res = await addUser(userInfo,checkedInfo);
        navigate('/table')
        if (res.status === 200) {
            toast.success(res.msg);
            setuserInfo({
                problem: '',
                email: '',
                name: ''
            })

        } else {
            toast.error(res.msg);
        }
    }
let {notRelvent, whenLyingDown,whenSitting, underStanding, inWalking, Other} = checkedInfo;
    return (
        <Card sx={{ width: 800, ml: "30%", mt: 2, bgcolor: '' }}>
            <ValidatorForm onSubmit={handleFormSubmit} >
                <Grid container rowSpacing={1} spacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={11}>
                        <span style={{ fontSize: 17, backgroundColor: "white", fontWeight: 'bold', alignItems: 'center' }} > Pain & Functional Description <br /></span>
                        <span style={{ fontSize: 17, backgroundColor: "white", alignItems: 'center' }} >The description of the current situation gives your Optimum Trainer a picture of and clues to the underlying causes of your problems <br /><br /></span>

                        <label> If you have problems with pain/aches, stiffness, weakness or functional problems, describe this/these below. (List the symptoms in descending order with the most troublesome first)</label>
                        <TextValidator
                            sx={{ mt: 2, mb: 1, width: '100%' }}
                            variant="outlined"
                            size="small"
                            onChange={handleChange}
                            type="text"
                            name="problem"
                            value={userInfo.problem || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <Box>
                            <FormLabel sx={{ ml: -10, mb: 1 }}>Have you been diagnosed with this problem ?</FormLabel>
                            <FormControl sx={{ ml: 3, mb: 1 }}>

                                <RadioGroup onChange={handleChange} row aria-labelledby="demo-row-radio-buttons-group-label" name="diagnosed"  >
                                    <FormControlLabel value='NR' control={<Radio />} label="Not Relevent" />
                                    <FormControlLabel value='YES' control={<Radio />} label="Yes" />
                                    <FormControlLabel value='NO' control={<Radio />} label="No" />
                                </RadioGroup>

                            </FormControl>
                        </Box>

                        <Box>
                            <FormLabel sx={{ ml: -9, mb: 1 }}>Did the problem start after a physical trauma ?</FormLabel>
                            <FormControl sx={{ ml: 3, mb: 1 }}>

                                <RadioGroup onChange={handleChange} row aria-labelledby="demo-row-radio-buttons-group-label" name="physical"  >
                                    <FormControlLabel value='NR' control={<Radio />} label="Not Relevent" />
                                    <FormControlLabel value='YES' control={<Radio />} label="Yes" />
                                    <FormControlLabel value='NO' control={<Radio />} label="No" />
                                </RadioGroup>

                            </FormControl>
                        </Box>
                        <Box>
                            <FormLabel sx={{ ml: -10, mb: 1 }}>Did the problem start after a mental trauma ?</FormLabel>
                            <FormControl sx={{ ml: 3, mb: 1 }}>

                                <RadioGroup onChange={handleChange} row aria-labelledby="demo-row-radio-buttons-group-label" name="mental"  >
                                    <FormControlLabel value='NR' control={<Radio />} label="Not Relevent" />
                                    <FormControlLabel value='YES' control={<Radio />} label="Yes" />
                                    <FormControlLabel value='NO' control={<Radio />} label="No" />
                                </RadioGroup>

                            </FormControl>
                        </Box>
                        <Box sx={{ mt: 1, ml: -50 }}>
                            <FormLabel >How often do you experience the problem ?</FormLabel>
                        </Box>
                        <Box sx={{ mt: 1, ml: 5 }}>
                            <FormControl >

                                <RadioGroup onChange={handleChange} row aria-labelledby="demo-row-radio-buttons-group-label" name="howExperience"  >
                                    <FormControlLabel value='NR' control={<Radio />} label="Not Relevent" />
                                    <FormControlLabel value='Daily' control={<Radio />} label="Daily" />
                                    <FormControlLabel value='Several times/week' control={<Radio />} label="Several times/week" />
                                    <FormControlLabel value='Afew times month' control={<Radio />} label="Afew times month" />
                                    <FormControlLabel value='A few times/year' control={<Radio />} label="A few times/year" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Box sx={{ mt: 1, ml: -54 }}>
                        <FormLabel > When do you experience the problem?</FormLabel>
                        </Box >
                        <Box sx={{ mt: 1, ml : 2 }}>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox checked = {notRelvent}  onChange={handleCheckBox} name = 'notRelvent'/>} label="Not Relevent" />
                            <FormControlLabel  control={<Checkbox checked={whenLyingDown} onChange={handleCheckBox} name="whenLyingDown" />} label="When lying down" />
                            <FormControlLabel control={<Checkbox  checked={whenSitting} onChange={handleCheckBox} name="whenSitting"/>} label="When sitting" />
                            <FormControlLabel  control={<Checkbox checked={underStanding} onChange={handleCheckBox} name="underStanding"/>} label="Under standing" />
                            <FormControlLabel control={<Checkbox checked={inWalking} onChange={handleCheckBox} name="inWalking" />} label="In walking" />
                            <FormControlLabel control={<Checkbox  checked={Other} onChange={handleCheckBox} name="Other"/>} label="Other" />

                        </FormGroup>
                        </Box>
                       {(Other) ?<TextValidator
                            sx={{ mt: 2, mb: 1, width: '100%' }}
                            variant="outlined"
                            label = 'Other Info'
                            size="small"
                            onChange={handleChange}
                            type="text"
                            name="otherInfo"
                            value={userInfo.otherInfo || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        /> : ''} 
                        <Box sx={{ mt: 1, ml: -20 }}>
                            <FormLabel >How intense is the experience of the problem on average on a 0-10 scale ?</FormLabel>
                        </Box>
                        <Box sx={{ mt: 1 }}>
                            <FormControl >

                                <RadioGroup onChange={handleChange} row aria-labelledby="demo-row-radio-buttons-group-label" name="zeroToTenScale"  >
                                    <FormControlLabel value='1' control={<Radio />} label="1" />
                                    <FormControlLabel value='2' control={<Radio />} label="2" />
                                    <FormControlLabel value='3' control={<Radio />} label="3" />
                                    <FormControlLabel value='4' control={<Radio />} label="4" />
                                    <FormControlLabel value='5' control={<Radio />} label="5" />
                                    <FormControlLabel value='6' control={<Radio />} label="6" />
                                    <FormControlLabel value='7' control={<Radio />} label="7" />
                                    <FormControlLabel value='8' control={<Radio />} label="8" />
                                    <FormControlLabel value='9' control={<Radio />} label="9" />
                                    <FormControlLabel value='10' control={<Radio />} label="10" />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <Button type='submit' >Next</Button>
                        <Link to='/'> <Button >Back</Button></Link>
                        
                    </Grid>
                </Grid>
            </ValidatorForm>
        </Card>
    )
}
export default CreatePage;
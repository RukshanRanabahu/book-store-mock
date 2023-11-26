import Typography from '@mui/material/Typography';

export default function TypographyComponent(props: any) {
    return (
        <Typography className={props.className} variant={props.text_variant} gutterBottom>
            {props.name}
        </Typography>
    );
}